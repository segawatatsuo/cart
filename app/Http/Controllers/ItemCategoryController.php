<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreItem_categoryRequest;
use App\Http\Requests\UpdateItem_categoryRequest;
use App\Models\Item_category;

class ItemCategoryController extends Controller
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
     * @param  \App\Http\Requests\StoreItem_categoryRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreItem_categoryRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Item_category  $item_category
     * @return \Illuminate\Http\Response
     */
    public function show(Item_category $item_category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Item_category  $item_category
     * @return \Illuminate\Http\Response
     */
    public function edit(Item_category $item_category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateItem_categoryRequest  $request
     * @param  \App\Models\Item_category  $item_category
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateItem_categoryRequest $request, Item_category $item_category)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Item_category  $item_category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Item_category $item_category)
    {
        //
    }
}
