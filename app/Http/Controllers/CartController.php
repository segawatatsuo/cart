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


        //id, 商品名, 個数, 単価, オプション（配列）
        //\Cart::add('293ad', 'Product 1', 1, 9.99, ['size' => 'large']);

        $productId = 3;

        $rowId = $productId;

        $Product = Item::find($productId);
        $itemNo = $Product->number;
        $name = $Product->name;
        $options = $_POST;//選択肢
        $quantity = $options["数量"];
        $price = str_replace('円', '', $options["価格"]);

        //dd($Product, $itemNo, $name, $options, $quantity, $price);

        \Cart::add(array(
            'id' => $itemNo,
            'name' => $name,
            'price' => $price,
            'quantity' => $quantity,
            'attributes' => $options
        ));
        $cartCollection = \Cart::getContent();

        return view('/cart/index', compact('cartCollection'));
    }

    public function destroy($name)
    {
        // レコードを削除
        \Cart::removeCartCondition($name);
        // 削除したら一覧画面にリダイレクト
        return redirect()->route('cart.index');
    }
}
