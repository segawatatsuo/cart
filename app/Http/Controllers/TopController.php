<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
        return view("welcome");
    }


        
}
