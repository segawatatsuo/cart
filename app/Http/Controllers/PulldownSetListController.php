<?php

namespace App\Http\Controllers;

use App\Http\Requests\Storepulldown_set_listRequest;
use App\Http\Requests\Updatepulldown_set_listRequest;
use App\Models\pulldown_set_list;

class PulldownSetListController extends Controller
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
     * @param  \App\Http\Requests\Storepulldown_set_listRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Storepulldown_set_listRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\pulldown_set_list  $pulldown_set_list
     * @return \Illuminate\Http\Response
     */
    public function show(pulldown_set_list $pulldown_set_list)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\pulldown_set_list  $pulldown_set_list
     * @return \Illuminate\Http\Response
     */
    public function edit(pulldown_set_list $pulldown_set_list)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\Updatepulldown_set_listRequest  $request
     * @param  \App\Models\pulldown_set_list  $pulldown_set_list
     * @return \Illuminate\Http\Response
     */
    public function update(Updatepulldown_set_listRequest $request, pulldown_set_list $pulldown_set_list)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\pulldown_set_list  $pulldown_set_list
     * @return \Illuminate\Http\Response
     */
    public function destroy(pulldown_set_list $pulldown_set_list)
    {
        //
    }
}
