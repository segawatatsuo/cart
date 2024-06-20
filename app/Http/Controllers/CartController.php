<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
use App\Models\Sku;
use Darryldecode\Cart\CartCondition;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Redirect;

use Illuminate\Support\Facades\Mail;
use App\Mail\ThanksMail;
use App\Models\Company;

class CartController extends Controller
{
    public function index(Request $request)
    {
        //カートに入る前のページのURL
        session(['prevUrl' => url()->previous()]);
        $prevUrl = session('prevUrl');

        //バリデーションチェック
        $validator = Validator::make($request->all(), [
            'アイテムカラー' => 'required',
            '数量' => 'required|numeric|min:1|max:100',
        ]);

        //バリデーションエラーの場合
        if ($validator->fails()) {
            return back()    //cart（入力フォーム）にリダイレクト
                ->withInput()
                ->withErrors($validator);
        }

        $productId = $request->id;
        $rowId = $productId;

        //1つだけの要素を取り出し
        $item_color = $request->アイテムカラー;
        $sku = $request->sku;
        $item_no = preg_replace("/(.+)(\.[^.]+$)/", "$1", $sku);//商品番号(画像の拡張子を取る)
        $Product = Item::find($productId);
        $item_number = $Product->number; //商品番号(画像のパスに使用)"00083-BBT"
        $item_name = $Product->name;//商品名 4.0オンス ライトウェイトTシャツ
        $brand_name = $Product->brand;//ブランド名 Printstar
        $processing_unit_price = $request->加工単価;//加工単価
        $quantity_total = $request->数量;//数量合計
        $total_purchase_amount = $request->合計;//合計金額
        $customer_requests = $request->ご要望他;//ご要望他

        //配列の要素を取り出し
        $print_position_array = $request->プリント箇所;
        $size_array = $request->サイズ; //["８０ｃｍ" => "2" "９０ｃｍ" => "1"]
        $price_array = $request->price;//全部のサイズと単価 "１５０ｃｍ" => "623""１６０ｃｍ" => "623" "Ｌ" => "700"
        $processing_costs_array = $request->プリント加工費;//[  0 => "990"]
        $fonts_array = $request->書体;//[0 => "Font-2.gif"]
        $fonts_color_array = $request->文字カラー;
        $fonts_border_array = $request->縁取り;
        $fonts_border_color_array = $request->文字縁カラー;

        $fonts_text = $request->テキスト;

        $sizeNoEmpty = array_filter($size_array);
        $size_price_set = "";
        foreach ($sizeNoEmpty as $key => $val) {
            $size_price_set .= 'サイズ : ' . $key . ' (単価' . number_format($price_array[$key]) . '円)' . ' × ' . $val . '点 ';
        }
        //dd($size_price_set);//"サイズ : １５０ｃｍ (単価623円) × 1点 サイズ : １６０ｃｍ (単価623円) × 1点 サイズ : ＸＸＬ (単価847円) × 1点 "

        $Product = Item::find($productId);
        $number = $Product->number; //商品番号(画像のパスに使用)

        //ユニフォーム単価(合計金額/数量)
        $unit_price = round($total_purchase_amount/$quantity_total);

        $attributes = [
            "item_color" => $item_color,
            "sku" => $sku,
            "item_no" => $item_no,
            "unit_price" => $unit_price,
            "number" => $number,
            "item_name" => $item_name,
            "brand_name" => $brand_name,
            "processing_unit_price" => $processing_unit_price,
            "quantity_total" => $quantity_total,
            "total_purchase_amount" => $total_purchase_amount,
            "customer_requests" => $customer_requests,
            "print_position_array" => $print_position_array,
            "size_array" => $size_array,
            "price_array" => $price_array,
            "processing_costs_array" => $processing_costs_array,
            "fonts_array" => $fonts_array,
            "fonts_color_array" => $fonts_color_array,
            "fonts_border_array" => $fonts_border_array,
            "fonts_border_color_array" => $fonts_border_color_array,
            "fonts_text" => $fonts_text,
            "size_price_set" => $size_price_set,
            "postage" => '',
            "tax" => '',
            "total_add_tax" => '',
        ];

        //カートに追加
        \Cart::add(array(
            'id' => $item_no,
            'name' => $item_name,
            'price' => $unit_price,
            'quantity' => $quantity_total,
            'attributes' => $attributes
        ));

        $cartCollection = \Cart::getContent();

        //カート商品数
        if (\Cart::isEmpty()) {
            $cart_count = 0;
        } else {
            $cartCollection = \Cart::getContent();
            $cart_count = $cartCollection->count();
        }

        //総合計
        $sum_total=0;
        foreach ($cartCollection as $cart) {
            $sum=$cart->attributes['total_purchase_amount'];
            $sum_total+=$sum;
        }

        //送料計算
        if ($sum_total>=11000) {
            $postage=0;
        } elseif ($sum_total>=1 and $sum_total <11000) {
            $postage=770;
        } else {
            $postage=0;
        }
        //消費税
        $tax = round($sum_total * 0.1);

        //総合計
        $total_add_tax = $sum_total + $tax + $postage;

        $item = \Cart::get($item_no);

        $option = $item->attributes->merge(['postage' => $postage,'tax' => $tax,'total_add_tax' => $total_add_tax,'total_product_amount' => $sum_total]);

        \Cart::update(
            $item_no,
            [
                'id' => $item_no,
                'name' => $item_name,
                'price' => $unit_price,
                'quantity' => $quantity_total,
                'attributes' => $option
            ]
        );
        return view('/cartAdd/index', compact('cartCollection', 'prevUrl', 'cart_count'));
    }


    //お届け先住所登録
    public function address()
    {
        $cartCollection = \Cart::getContent();

        //カート商品数
        if (\Cart::isEmpty()) {
            $cart_count = 0;
        } else {
            $cartCollection = \Cart::getContent();
            $cart_count = $cartCollection->count();
        }

        //商品合計
        $total = 0;
        foreach ($cartCollection as $data) {
            $total += $data["price"];
        }

        //送料
        if ($total>=11000) {
            $postage=0;
        } elseif ($total>=1 and $total <11000) {
            $postage=770;
        } else {
            $postage=0;
        }

        //消費税
        $tax = round($total * 0.1);

        //総合計
        $total_add_tax = $total + $tax + $postage;
        return view('/cartAdd/address', compact('cartCollection', 'total', 'tax', 'total_add_tax', 'postage', 'cart_count'));
    }


    //確認画面へ
    public function confirm(Request $request)
    {
        $all_request = $request->all(); //全てのPOST投稿内容

        session(['all_request' => $all_request]); //セッション化
        //dd($all_request);
        $cartCollection = \Cart::getContent();
        //カート商品数
        if (\Cart::isEmpty()) {
            $cart_count = 0;
        } else {
            $cartCollection = \Cart::getContent();
            $cart_count = $cartCollection->count();
        }
        //商品合計
        $total = 0;
        foreach ($cartCollection as $data) {
            $total += $data["price"];
        }
        //送料
        if ($total>=11000) {
            $postage=0;
        } elseif ($total>=1 and $total <11000) {
            $postage=770;
        } else {
            $postage=0;
        }
        //消費税
        $tax = round($total * 0.1);
        //総合計
        $total_add_tax = $total + $tax + $postage;

        return view('/cartAdd/confirm', compact('cartCollection', 'total', 'tax', 'total_add_tax', 'postage', 'cart_count', 'all_request'));
    }
    //注文確定画面とメール送信
    public function order(Request $request)
    {
        $cart_count = 0;
        $content= $request->all();
        /* $content　顧客住所と送付先
        "firstName" => "達男"
        "lastName" => "瀬川達男"
        "email" => "segawa@lookingfor.jp"
        "phone" => "09091496802"
        "zip01" => "206-0823"
        "pref01" => "東京都"
        "addr01" => "稲城市平尾"
        "addr02" => "3-1-1"
        "firstName2" => null
        "lastName2" => null
        "phone2" => null
        "zip01_2" => null
        "pref01_2" => null
        "addr01_2" => null
        "addr02_2" => null
        "paymentMethod" => "クレジットカード"
        */
        $cartCollection = \Cart::getContent();
        foreach ($cartCollection as $cart) {
            $cart->attributes['brand_name'];
            $cart->attributes['item_name'];
            $cart->attributes['item_no'];
            $cart->attributes['size_price_set'];
            if(is_array($cart->attributes['print_position_array'])){
                $counter = count($cart->attributes['print_position_array']);
            }else{
                $counter=0;
            }
        }

        return view('/cartAdd/order', compact('cart_count'));
    }


    public function show()
    {
        $cartCollection = \Cart::getContent();

        //カート商品数
        if (\Cart::isEmpty()) {
            $cart_count = 0;
        } else {
            $cartCollection = \Cart::getContent();
            $cart_count = $cartCollection->count();
        }

        return view('/cartAdd/index', compact('cartCollection', 'cart_count'));
    }

    public function destroy(Request $request)
    {
        //カートに入る前のページのURL
        //$prevUrl = url()->previous();
        $prevUrl = session('prevUrl');
        //1件削除
        //ボタンのパラメータ
        $target = $request->query(); //requestを全部取り出す
        $key = array_keys($target); //キーが番号になっている
        if ($key[0]) {
            $id = $key[0]; //配列なので先頭を取り出す
            // レコードを削除(商品ID)
            $kekka = \Cart::remove($id);
            //dd($kekka);
        }

        $cartCollection = \Cart::getContent();
        $total = 0;
        foreach ($cartCollection as $data) {
            $total += $data["price"];
        }
        $tax = round($total * 0.1);
        $total_add_tax = $total + $tax;

        return view('/cartAdd/index', compact('cartCollection', 'total', 'tax', 'total_add_tax', 'prevUrl'));
    }

    public function delete()
    {
        $id=$_GET['id'];
        //SKUを取得して引数に渡す
        \Cart::remove($id);

        $cartCollection = \Cart::getContent();
        //dd($cartCollection);
        //商品合計
        $total = 0;
        foreach ($cartCollection as $data) {
            $total += $data["price"];
        }
        //送料
        if ($total>=11000) {
            $postage=0;
        } elseif ($total>=1 and $total <11000) {
            $postage=770;
        } else {
            $postage=0;
        }

        //消費税
        $tax = round($total * 0.1);
        //総合計
        $total_add_tax = $total + $tax;

        return view('/cartAdd/index', compact('cartCollection', 'total', 'tax', 'total_add_tax', 'postage'));
    }


    public function allclear()
    {
        //$userId = Auth::id();
        \Cart::clear();
        //return redirect()->route('cartAdd.index', ['message' => 'cart reset to empty']);
        $cartCollection="";
        $total=0;
        $tax=0;
        $total_add_tax=0;
        $prevUrl="";
        $cart_count=0;
        return view('/cartAdd/index', compact('cartCollection', 'total', 'tax', 'total_add_tax', 'prevUrl', 'cart_count'));
    }

    public function cartBack($request)
    {
        if($request->input('back') == 'back'){
            return redirect('/form/')
                        ->withInput();
         }
    }


    public function remove_item(Request $request)
    {
        $prevUrl = session('prevUrl');
        $id = $request->id;
        \Cart::remove($id);
        $cartCollection = \Cart::getContent();
        $total = 0;
        foreach ($cartCollection as $data) {
            $total += $data["price"];
        }
        $tax = round($total * 0.1);
        $total_add_tax = $total + $tax;

        //カート商品数
        if (\Cart::isEmpty()) {
            $cart_count = 0;
        } else {
            $cartCollection = \Cart::getContent();
            $cart_count = $cartCollection->count();
        }

        return view('/cartAdd/index', compact('cartCollection', 'total', 'tax', 'total_add_tax', 'prevUrl', 'cart_count'));
    }
}
