<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests\StoreColor_attributionRequest;
use App\Http\Requests\UpdateColor_attributionRequest;
use App\Models\Color_attribution;

class ColorAttributionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $attributions=Color_attribution::all();
        return view('color.attribution',compact('attributions'));
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
    public function store(Request $request)
    {
        $attribution = $request->attribution;
        $attribution = Color_attribution::create(['attribution' => $attribution]);
        //return view('color.attribution');
        $attributions=Color_attribution::all();
        return view('color.attribution',compact('attributions'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Color_attribution $color_attribution)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Color_attribution $color_attribution)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateColor_attributionRequest $request, Color_attribution $color_attribution)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Color_attribution $color_attribution)
    {
        //
    }
}
