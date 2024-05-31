<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\StoreAddPrintRequest;
use App\Http\Requests\UpdateAddPrintRequest;
use App\Models\AddPrint;

class AddPrintController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $addprints = AddPrint::all();
        return view('add_print.index', compact('addprints'));
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
    public function store(StoreAddPrintRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(AddPrint $addPrint)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(AddPrint $addPrint)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $addprint = AddPrint::all();

        $kazu = count($addprint);

        for ($i = 0; $i < $kazu; $i++) {
            $addprint[$i]->part_name = $request->part_name[$i];
            $addprint[$i]->image = $request->image[$i];
            $addprint[$i]->price = $request->price[$i];
            $addprint[$i]->save();
        }

        $addprints = AddPrint::all();
        return redirect('add_print/index')->with('addprints', $addprints)->with('flash_message', '更新しました');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(AddPrint $addPrint)
    {
        //
    }
}
