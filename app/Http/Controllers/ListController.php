<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;

class ListController extends Controller
{
    public function index(Request $request){
        $category = $request->query('category'); // これはクエリパラメーターに入っている値
        $lists_array = Item::with('skus')->where("category", "LIKE" , "%".$category."%"  )->where("display", "=" , "表示"  )->get();
        $lists=[];
        foreach($lists_array as $data){
            $id = $data->id;
            $number = $data->number;
            $name = $data->name;
            foreach($data->skus as $hoge){
                $thumbnail_folder = $hoge->thumbnail_folder;
                $image_name = $hoge->image_name;
            }
            array_push($lists,['id'=>$id,'number'=>$number,'name'=>$name,'thumbnail_folder'=>$thumbnail_folder,'image_name'=>$image_name]);
        }
        /*
        foreach($lists as $list){
            dd($list['id']);
        }
        */
        return view('list.index',compact('lists'));
    }
}
