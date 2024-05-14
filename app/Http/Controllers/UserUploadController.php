<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\Http\Requests\StoreUserUploadRequest;
use App\Http\Requests\UpdateUserUploadRequest;

use App\Models\UserUpload;


class UserUploadController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store(StoreUserUploadRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(UserUpload $userUpload)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(UserUpload $userUpload)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserUploadRequest $request, UserUpload $userUpload)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserUpload $userUpload)
    {
        //
    }

    //登録
    public function upload(Request $request)
    {
        $image = $request->file('file');
        $imageName = $image->getClientOriginalName();
        $image->move(public_path('storage/images'), $imageName);//assetでは上手くいかない。public_pathを使用。

        //DBに画像名を登録
        $user_upload = new UserUpload();
        $user_upload->image_name = $imageName;
        $user_upload->save();
        return response()->json(['success'=>$imageName]);
    }

    //削除
    public function fileDestroy(Request $request)
    {
        $filename =  $request->get('filename');
        UserUpload::where('image_name', $filename)->delete();
        $path=public_path().'/images/'.$filename;
        if (file_exists($path)) {
            unlink($path);
        }
        return $filename;
    }

}
