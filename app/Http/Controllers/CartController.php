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

class CartController extends Controller
{
    public function index(Request $request)
    {
        //カートに入る前のページのURL
        //$prevUrl = url()->previous();
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

        /*商品番号*/
        $productId = $request->id;
        $rowId = $productId;

        $Product = Item::find($productId);
        $number = $Product->number; //商品番号(画像のパスに使用)
        $sku = $_POST["sku"]; //skuなのだが画像の拡張子がついている

        //拡張子付きの画像名
        //$image = Sku::where("image_name", "LIKE", $sku.".%");//DBのSKUカラム側で拡張子を除いて登録してある場合はこっち
        $image = Sku::where("image_name", "LIKE", $sku);
        $picture = $image->first();
        $pic = $picture['image_name'];
        //dd($pic);//00103-CBT-037_90.jpg

        //拡張子を取り除く
        //$sku = preg_replace("/(.+)(\.[^.]+$)/", "$1", $sku);

        $name = $Product->name;
        $options = $_POST; //選択肢を含む全項目
        //dd($options);

        //価格の一覧表の配列を取り出す
        $prices_array = $options["price"];

        //表示に不要な_tokenと配列price(bladeで配列なのでこのままだとループに支障をきたす)を配列から削除
        unset($options['_token']);
        unset($options['price']);
        //optionsの全項目数。まとめる際に使用。
        $count = count($options);

        //空欄の配列要素を削除
        $NoEmpty = array_filter($options["サイズ"]);

        //サイズと枚数が配列なのでそれに単価を加えたセットを１つの文字列にする
        $size = "";
        foreach ($NoEmpty as $key => $val) {
            $size .= 'サイズ : ' . $key . ' (単価' . number_format($prices_array[$key]) . '円)' . ' × ' . $val . '点 ';
        }
        //$options['size'] = $size;
        //dd($size);
        $quantity = $options["数量"];//全サイズの枚数の合計
        //dd($quantity);
        $price = str_replace('円', '', $options["合計"]); //小計
        //ユニフォーム単価(金額/数量)
        $tanka = round($price/$quantity);


        //選択肢の部分を3つの配列に分けてoptions配列にする
        //一番下、一番上の順で切り取る
        //切り取られた値 = array_splice(削除対象配列, 切り取り開始Index, 切り取り数);
        $select_options3 = array_splice($options, $count - 3, 3); //アイテム価格 オプション代 合計が入っている
        $select_options3 =str_replace('円', '', $select_options3);
        //"オプション単価" => "2530円"
        //"数量" => "2"
        //"合計" => "7610円"
        $select_options1 = array_splice($options, 0, 2); //id,アイテムカラー
        //"id" => "1"
        //"アイテムカラー" => "レッド"
        $select_options2 = $options; //切り抜かれた残り(選択オプション)を2に入れる
        //"左片胸色名" => "Nオレンジ"
        //"チーム名書体" => "Font-3.gif"
        //"マーキング右袖（右肩）" => "フルカラー (15cm×35cm以内) ¥1650"
        //"マーキング背面衿下" => "1色 (15cm×35cm以内) ¥880"
        //"サイズ" => array:10 [▶]
        //"sku" => "p175_11.png"

        $a=$select_options2["sku"];
        $b=preg_replace("/(.+)(\.[^.]+$)/", "$1", $a);
        $select_options2["sku"]=$b;

        //元のサイズは配列なので削除して文字列$sizeで別に渡す
        unset($select_options2['サイズ']);

        $options = [];
        //$options[0]と$options[1]と$options[3]を１つに
        $options = [$select_options1, $select_options2, $select_options3, $size, $pic, $number, $tanka];

        //総合計金額

        //カートに追加
        \Cart::add(array(
            'id' => $sku,
            'name' => $name,
            'price' => $price,
            'quantity' => $quantity,
            'attributes' => $options
        ));

        /*
        \Cart::session($userID)->add(array(
            'id' => $sku,
            'name' => $name,
            'price' => $price,
            'quantity' => $quantity,
            'attributes' => $options,
            'associatedModel' => $Product
        ));
        */
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
        $total_add_tax = $total + $tax + $postage;

        //以降使い回すのでセッションcartsに入れる
        $carts = ['total' => $total, 'tax' => $tax, 'total_add_tax' => $total_add_tax, 'cartCollection' => $cartCollection];
        session(['carts' => $carts]);
        return view('/cartAdd/index', compact('cartCollection', 'total', 'tax', 'total_add_tax', 'prevUrl', 'postage'));
        //return view('/cartAdd/index');
    }


    //お届け先住所登録
    public function address()
    {
        $cartCollection = \Cart::getContent();
        //数量
        $count = $cartCollection->count();
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
        return view('/cartAdd/address', compact('cartCollection', 'total', 'tax', 'total_add_tax', 'postage', 'count'));
    }


    //確認画面へ
    public function confirm(Request $request)
    {
        $all_request = $request->all(); //全てのPOST投稿内容

        session(['all_request' => $all_request]); //セッション化
        //dd($all_request);
        $cartCollection = \Cart::getContent();
        //数量
        $count = $cartCollection->count();
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

        return view('/cartAdd/confirm', compact('cartCollection', 'total', 'tax', 'total_add_tax', 'postage', 'count', 'all_request'));
    }
    //注文確定
    public function order()
    {
        dd("order");
        return view('/cartAdd/order');
    }


    public function show()
    {
        $items = \Cart::getContent();
        $cart = [];
        foreach ($items as $item) {
            $data = [];
            $id = $item->id; // the Id of the item
            $name = $item->name; // the name
            $price = $item->price; // the single price without conditions applied
            $item->getPriceSum(); // the subtotal without conditions applied
            $item->getPriceWithConditions(); // the single price with conditions applied
            $item->getPriceSumWithConditions(); // the subtotal with conditions applied
            $quantity = $item->quantity; // the quantity
            $attributes = $item->attributes; // the attributes
            $data = array($id, $name, $price, $quantity, $attributes);
            array_push($cart, $data);

            // Note that attribute returns ItemAttributeCollection object that extends the native laravel collection
            // so you can do things like below:
        }

        dd($cart);

        return redirect()->route('cartAdd.show');
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
        return redirect()->route('cartAdd.index', ['message' => 'cart reset to empty']);
    }

    public function hoge()
    {
        return view('/cartAdd/hoge');
    }
}
