<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\StoreLawRequest;
use App\Http\Requests\UpdateLawRequest;
use App\Models\Law;

class LawController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $law = Law::find(1);
        return view('company.law', compact('law'));
    }

    public function privacy()
    {
        $privacy = Law::find(1);
        return view('company.privacy', compact('privacy'));

    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreLawRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Law $law)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Law $law)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        // id=1が存在していれば更新、無ければ新規作成
        $options = [
            'id' => 1,
        ];

        // 更新または作成する属性の配列
        $key = [
            'distributor' => $request->distributor,
            'manager' => $request->manager,
            'location' => $request->location,
            'trade_name' => $request->trade_name,
            'tel' => $request->tel,
            'fax' => $request->fax,
            'email' => $request->email,
            'url' => $request->url,
            'shipping_method' => $request->shipping_method,
            'necessary_charges' => $request->necessary_charges,
            'expiration_date' => $request->expiration_date,
            'defective_product' => $request->defective_product,
            'sales_quantity' => $request->sales_quantity,
            'delivery_time' => $request->delivery_time,
            'sales_quantity' => $request->sales_quantity,
            'sales_quantity' => $request->sales_quantity,
            'sales_quantity' => $request->sales_quantity,

            
            'payment_method_name1' => $request->payment_method_name1,
            'payment_method1' => $request->payment_method1,

            'payment_method_name2' => $request->payment_method_name2,
            'payment_method2' => $request->payment_method2,

            'payment_method_name3' => $request->payment_method_name3,
            'payment_method3' => $request->payment_method3,

            'payment_method_name4' => $request->payment_method_name4,
            'payment_method4' => $request->payment_method4,

            'payment_method_name5' => $request->payment_method_name5,
            'payment_method5' => $request->payment_method5,

            'payment_method_name6' => $request->payment_method_name6,
            'payment_method6' => $request->payment_method6,

            'payment_method_name7' => $request->payment_method_name7,
            'payment_method7' => $request->payment_method7,

            'payment_method_name8' => $request->payment_method_name8,
            'payment_method8' => $request->payment_method8,

            'payment_method_name9' => $request->payment_method_name9,
            'payment_method9' => $request->payment_method9,

            'payment_method_name10' => $request->payment_method_name10,
            'payment_method10' => $request->payment_method10,

            'return_period' => $request->return_period,
            'return_shipping_fee' => $request->return_shipping_fee,
        ];

        // メソッドの呼び出し
        Law::updateOrCreate($options, $key);
        $law = Law::find(1);
        return view('company.law', compact('law'));
    }

    public function privacy_update(Request $request)
    {
        // id=1が存在していれば更新、無ければ新規作成
        $options = [
            'id' => 1,
        ];
        $key = [
            'privacy' => $request->privacy,
        ];
        Law::updateOrCreate($options, $key);

        $privacy = Law::find(1);

        return view('company.privacy', compact('privacy'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Law $law)
    {
        //
    }
}
