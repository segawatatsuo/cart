<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\LawController;
use App\Models\Law;
use Darryldecode\Cart\CartCondition;

class TopController extends Controller
{
    public function flush(Request $request)
    {
        $request->session()->flush();//全セッションを削除
        return view("welcome");
    }

    public function index(Request $request)
    {
        $ipaddress = $request-> ip();//訪問者のIPアドレスを取得
        session(['ipaddress' => $ipaddress]);//セッションに保存

        if(\Cart::isEmpty()){
            $cart_count = 0;
        }else{
            $cartCollection = \Cart::getContent();
            $cart_count = $cartCollection->count();
        }
        return view("welcome",compact('cart_count'));
    }

    public function tokutei()
    {
        $data=Law::find(1);
        return view("law.tokutei",compact('data'));
    }

    public function privacy()
    {
        $data=Law::find(1);
        return view("law.privacy",compact('data'));
    }
}
