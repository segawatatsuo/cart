<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreToppageCategoryRequest;
use App\Http\Requests\UpdateToppageCategoryRequest;
use App\Models\ToppageCategory;

use Illuminate\Console\Command;
use App\Models\Category;



class ToppageCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //一番上のカテゴリグループを取得
        $ctg=Category::where('parent_id', '=', null)->get();

        $this->Category = new Category();
        $node = $this->Category->find(1);
        return view('toppage.index');
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
    public function store(StoreToppageCategoryRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(ToppageCategory $toppageCategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ToppageCategory $toppageCategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateToppageCategoryRequest $request, ToppageCategory $toppageCategory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ToppageCategory $toppageCategory)
    {
        //
    }
}
