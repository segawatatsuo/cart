<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Http\FormRequest;
use App\Http\Requests\StorePulldown_detailRequest;
use App\Http\Requests\UpdatePulldown_detailRequest;
use App\Models\Pulldown_detail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB; //トランザクション

class PulldownDetailController extends Controller
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
     * @param  \App\Http\Requests\StorePulldown_detailRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePulldown_detailRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Pulldown_detail  $pulldown_detail
     * @return \Illuminate\Http\Response
     */
    public function show(Pulldown_detail $pulldown_detail)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Pulldown_detail  $pulldown_detail
     * @return \Illuminate\Http\Response
     */
    public function edit(Pulldown_detail $pulldown_detail)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePulldown_detailRequest  $request
     * @param  \App\Models\Pulldown_detail  $pulldown_detail
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePulldown_detailRequest $request, Pulldown_detail $pulldown_detail)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Pulldown_detail  $pulldown_detail
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        dd("");
        DB::beginTransaction();
        try {
          $pulldown = Pulldown_detail::where('id', $request->id)->first();
          $pulldown->delete(); // このタイミングでpulldown_detailも一緒に削除されます。
          DB::commit();
        } catch (\Exception $e) {
          // 省略
        }
    }
}
