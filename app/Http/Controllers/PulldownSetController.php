<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests\Storepulldown_setRequest;
use App\Http\Requests\Updatepulldown_setRequest;
use App\Models\pulldown_set;

class PulldownSetController extends Controller
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
     * @param  \App\Http\Requests\Storepulldown_setRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $record_id = $request->record_id;
        $name = $request->setname;
        $right = serialize($request->rightside);
        $left = serialize($request->leftside);
        $pulldown_set = Pulldown_set::create(['name' => $name, 'right' => $right, 'left' => $left]);


        $filename = 'filestream.txt'; //publicにテキストが書き出しされる
        $fp = fopen($filename, 'wa');

        fwrite($fp, "record_id:");
        fwrite($fp, $record_id . "¥n");

        fwrite($fp, "setname:");
        fwrite($fp, $name . "¥n");

        fwrite($fp, "rightside:");
        fwrite($fp, $right . "¥n");

        fwrite($fp, "leftside:");
        fwrite($fp, $left);
        fclose($fp);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\pulldown_set  $pulldown_set
     * @return \Illuminate\Http\Response
     */
    public function show(pulldown_set $pulldown_set)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\pulldown_set  $pulldown_set
     * @return \Illuminate\Http\Response
     */
    public function edit(pulldown_set $pulldown_set)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\Updatepulldown_setRequest  $request
     * @param  \App\Models\pulldown_set  $pulldown_set
     * @return \Illuminate\Http\Response
     */
    public function update(Updatepulldown_setRequest $request, pulldown_set $pulldown_set)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\pulldown_set  $pulldown_set
     * @return \Illuminate\Http\Response
     */
    public function destroy(pulldown_set $pulldown_set)
    {
        //
    }
}
