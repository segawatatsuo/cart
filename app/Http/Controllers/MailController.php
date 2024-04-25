<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

use App\Mail\ThanksMail;
use App\Models\Company;

use Darryldecode\Cart\CartCondition;
use Illuminate\Support\Str;

class MailController extends Controller
{
    public function orderMail(Request $request)
    {

        $content= $request->all();

        $firstName = $content['firstName'];
        $lastName = $content['lastName'];
        $email = $content['email'];
        $phone = $content['phone'];
        $zip01  = $content['zip01'];
        $pref01 = $content['pref01'];
        $addr01 = $content['addr01'];
        $addr02  = $content['addr02'];

        if($content['firstName2']!=null){
            $firstName2  = $content['firstName2'];
        }else{
            $firstName2  = "";
        }
        if($content['lastName2']!=null){
            $lastName2 = $content['lastName2'];
        }else{
            $lastName2 = "";
        }
        if($content['zip01_2']!=null){
            $zip01_2 = $content['zip01_2'];
        }else{
            $zip01_2 = "";
        }
        if($content['pref01_2']!=null){
            $pref01_2 = $content['pref01_2'];
        }else{
            $pref01_2 = "";
        }
        if($content['addr01_2']!=null){
            $addr01_2 = $content['addr01_2'];
        }else{
            $addr01_2 = "";
        }
        if($content['addr02_2']!=null){
            $addr02_2  = $content['addr02_2'];
        }else{
            $addr02_2  = "";
        }
        if($content['paymentMethod']){
            $paymentMethod = $content['paymentMethod'];
        }else{
            $paymentMethod = "";
        }
        $content=['firstName'=>$firstName,'lastName'=>$lastName,
        'email'=>$email,
        'phone'=>$phone,
        'zip01'=>$zip01,
        'pref01'=>$pref01,
        'addr01'=>$addr01,
        'addr02'=>$addr02,
        'firstName2'=>$firstName2,
        'lastName2'=>$lastName2,
        'zip01_2'=>$zip01_2,
        'pref01_2'=>$pref01_2,
        'pref01_2'=>$pref01_2,
        'addr01_2'=>$addr01_2,
        'addr02_2'=>$addr02_2,
        'paymentMethod'=>$paymentMethod
        ];

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

        $items_array=[];
        foreach($carts["cartCollection"] as $cart){

            $id = $cart->id;
            $sku = preg_replace("/(.+)(\.[^.]+$)/", "$1", $id);
            $name = $cart->name;
            $price = $cart->price;
        }
        //DBにインサート

        //メール送信
        $mailto = $content["email"];
	    Mail::to($mailto)->send(new ThanksMail($content));




        \Cart::clear();

        return view('welcome');
    }
}