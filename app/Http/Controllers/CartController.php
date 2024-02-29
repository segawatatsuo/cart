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
        $options = $_POST;//選択肢
        unset($options['_token']);//_tokenを配列から削除
        $quantity = $options["数量"];
        $price = str_replace('円', '', $options["合計"]);

        //カートに追加
        \Cart::add(array(
            'id' => $itemNo,
            'name' => $name,
            'price' => $price,
            'quantity' => $quantity,
            'attributes' => $options
        ));
        $cartCollection = \Cart::getContent();

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
