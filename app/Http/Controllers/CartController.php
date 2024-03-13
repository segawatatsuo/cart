<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
use App\Models\Sku;
use Illuminate\Support\Str;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Redirect;

class CartController extends Controller
{
    public function index(Request $request)
    {
        //カートに入る前のページのURL
        $prevUrl = url()->previous();

        //バリデーションチェック
        $validator = Validator::make($request->all(), [
            'アイテムカラー'=> 'required',
            '数量' => 'required|numeric|min:1|max:100',
        ]);

        //バリデーションエラーの場合
        if ($validator->fails()) {
            return back()	//cart（入力フォーム）にリダイレクト
                    ->withInput()
                    ->withErrors($validator);
        }

        //\Cart::remove('293ad');//1件削除
        //\Cart::clearCartConditions();//全件削除

        //セッションipaddressをuserIDにする
        $userID = session('ipaddress');
        //dd($userID);




        /*商品番号*/
        $productId = $request->id;
        $rowId = $productId;

        $Product = Item::find($productId);
        $number = $Product->number;//商品番号(画像のパスに使用)
        $sku = $_POST["sku"];//sku

        //拡張子付きの画像名
        $image = Sku::where("image_name", "LIKE", $sku.".%");
        $picture = $image->first();
        $pic = $picture['image_name'];

        $name = $Product->name;
        $options = $_POST;//選択肢を含む全項目

        //単価の配列を取り出す
        $prices_array=$options["price"];

        //表示に不要な_tokenと配列price(bladeで配列なのでこのままだとループに支障をきたす)を配列から削除
        unset($options['_token']);
        unset($options['price']);
        //optionsの全項目数。まとめる際に使用。
        $count=count($options);

        //空欄の配列要素を削除
        $NoEmpty = array_filter($options["サイズ"]);

        //サイズと枚数が配列なのでそれに単価を加えたセットを１つの文字列にする
        $size="";
        foreach ($NoEmpty as $key=>$val) {
            $size .= 'サイズ : '.$key.' ('.number_format($prices_array[$key]).'円) '.' × '.$val.' ';
        }
        //$options['size'] = $size;
        //dd($size);
        $quantity = $options["数量"];
        $price = str_replace('円', '', $options["合計"]);//小計

        //選択肢の部分を3つの配列に分けてoptions配列にする
        //一番下、一番上の順で切り取る
        //切り取られた値 = array_splice(削除対象配列, 切り取り開始Index, 切り取り数);
        $select_options3=array_splice($options, $count-3, 3);//アイテム価格 オプション代 合計が入っている
        $select_options1=array_splice($options, 0, 2);//id,アイテムカラー
        $select_options2=$options;//切り抜かれた残り(選択オプション)を2に入れる

        //元のサイズは配列なので削除して文字列$sizeで別に渡す
        unset($select_options2['サイズ']);

        $options=[];
        //$options[0]と$options[1]と$options[3]を１つに
        $options=[$select_options1, $select_options2, $select_options3, $size, $pic, $number];

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
        //商品合計
        $total=0;
        foreach ($cartCollection as $data) {
            $total+=$data["price"];
        }
        //消費税
        $tax=round($total*0.1);
        //総合計
        $total_add_tax=$total+$tax;

        return view('/cartAdd/index', compact('cartCollection', 'total', 'tax', 'total_add_tax' ,'prevUrl'));
    }
    //お届け先住所登録
    public function address()
    {
        return view('/cartAdd/address');
    }
    //確認画面へ
    public function confirm()
    {
        return view('/cartAdd/confirm');
    }
    //注文確定
    public function order()
    {
        return view('/cartAdd/order');
    }




    public function show()
    {
        $items = \Cart::getContent();
        $cart=[];
        foreach ($items as $item) {
            $data=[];
            $id = $item->id; // the Id of the item
            $name = $item->name; // the name
            $price = $item->price; // the single price without conditions applied
            $item->getPriceSum(); // the subtotal without conditions applied
            $item->getPriceWithConditions(); // the single price with conditions applied
            $item->getPriceSumWithConditions(); // the subtotal with conditions applied
            $quantity = $item->quantity; // the quantity
            $attributes = $item->attributes; // the attributes
            $data=array( $id, $name, $price, $quantity, $attributes );
            array_push($cart, $data);

            // Note that attribute returns ItemAttributeCollection object that extends the native laravel collection
            // so you can do things like below:

            if ($item->attributes->has('size')) {
                // item has attribute size
            } else {
                // item has no attribute size
            }
        }

        dd($cart);

        return redirect()->route('cartAdd.show');
    }


    public function destroy(Request $request)
    {
        //1件削除
        //ボタンのパラメータ
        $target=$request->query();//requestを全部取り出す
        $key=array_keys($target);//キーが番号になっている
        $id=$key[0];//配列なので先頭を取り出す
        // レコードを削除(商品ID)
        $kekka=\Cart::remove($id);
        //dd($kekka);

        $cartCollection = \Cart::getContent();
        $total=0;
        foreach ($cartCollection as $data) {
            $total+=$data["price"];
        }
        $tax=round($total*0.1);
        $total_add_tax=$total+$tax;

        return view('/cartAdd/index', compact('cartCollection', 'total', 'tax', 'total_add_tax'));
    }

    public function clear()
    {
        \Cart::clearCartConditions();//全件削除
        return redirect()->route('welcome');
    }
}
