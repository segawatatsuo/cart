<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreItem_imageRequest;
use App\Http\Requests\UpdateItem_imageRequest;
use App\Models\Item_image;

class ItemImageController extends Controller
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
     * @param  \App\Http\Requests\StoreItem_imageRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreItem_imageRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Item_image  $item_image
     * @return \Illuminate\Http\Response
     */
    public function show(Item_image $item_image)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Item_image  $item_image
     * @return \Illuminate\Http\Response
     */
    public function edit(Item_image $item_image)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateItem_imageRequest  $request
     * @param  \App\Models\Item_image  $item_image
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateItem_imageRequest $request, Item_image $item_image)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Item_image  $item_image
     * @return \Illuminate\Http\Response
     */
    public function destroy(Item_image $item_image)
    {
        //
    }
}
