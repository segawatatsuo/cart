<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests\StoreSkuRequest;
use App\Http\Requests\UpdateSkuRequest;

use App\Models\Sku;
use App\Imports\SkuImport;
use App\Exports\SkuExport;
use Maatwebsite\Excel\Facades\Excel;


class SkuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }


    public function list() {
        $list=Sku::paginate(15);
        return view('sku.list',compact('list'));
    }

    public function import(Request $request){
        $excel_file = $request->file('excel_file');
        $excel_file->store('excels');
        Excel::import(new SkuImport, $excel_file);
        //return view('sku.index');
        $list=Sku::paginate(15);
        return redirect()->route('sku.list',compact('list'))->with('successMessage', 'エクセルをインポートしました');
    }

    public function export(){ //追加
        return Excel::download(new SkuExport, 'output_sku_data.xlsx');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreSkuRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreSkuRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Sku  $sku
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $sku = Sku::find($id);
        return view('sku.show',compact('sku'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Sku  $sku
     * @return \Illuminate\Http\Response
     */
    public function edit(Sku $sku)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateSkuRequest  $request
     * @param  \App\Models\Sku  $sku
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $id=$request->id;
        $sku_item = Sku::find($id);
        $sku_item->fill (
        [
            'item_number' => $request->item_number,
            'maker_item_number' => $request->maker_item_number,
            'maker_color_number' => $request->maker_color_number,
            'size' => $request->size,
            'color_display_name' => $request->color_display_name,
            'stock' => $request->stock,
        ]);
        $sku_item->save();

        return redirect()->route('sku.show',compact('id'))->with('successMessage', '更新しました');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Sku  $sku
     * @return \Illuminate\Http\Response
     */
    public function destroy(Sku $sku)
    {
        //
    }
}
