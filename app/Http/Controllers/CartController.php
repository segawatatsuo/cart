<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
use Illuminate\Support\Str;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Redirect;

class CartController extends Controller
{
    public function index(Request $request)
    {
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

        /*商品番号*/
        $productId = $request->id;
        $rowId = $productId;

        $Product = Item::find($productId);
        $itemNo = $Product->number;
        $name = $Product->name;
        $options = $_POST;//選択肢を含む全項目
        unset($options['_token']);//_tokenを配列から削除
        $count=count($options);//optionsの全項目数
        $quantity = $options["数量"];
        $price = str_replace('円', '', $options["合計"]);

        //選択肢の部分を3つの配列に分けてoptions配列にする
        //一番下、一番上の順で切り取る
        //切り取られた値 = array_splice(削除対象配列, 切り取り開始Index, 切り取り数);
        $select_options3=array_splice($options, $count-3,3 );//アイテム価格 オプション代 合計が入っている
        $select_options1=array_splice($options, 0,4 );//id,アイテムカラー,サイズ,数量
        $select_options2=$options;//切り抜かれた残り(選択オプション)を2に入れる

        $options=[];
        //$options[0]と$options[1]と$options[3]を１つに
        $options=[$select_options1,$select_options2,$select_options3];
        
        //カートに追加
        \Cart::add(array(
            'id' => $itemNo,
            'name' => $name,
            'price' => $price,
            'quantity' => $quantity,
            'attributes' => $options
        ));
        $cartCollection = \Cart::getContent();
        //dd($cartCollection);

        return view('/cartAdd/index', compact('cartCollection'));
    }

    public function destroy($id)
    {
        // レコードを削除(商品ID)
        \Cart::remove($id);

        // 削除したら一覧画面にリダイレクト
        return redirect()->route('cartAdd.index');
    }
}
