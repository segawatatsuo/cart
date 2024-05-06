<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;

class ListController extends Controller
{
    public function index(Request $request)
    {
        $category = $request->query('category'); // これはクエリパラメーターに入っている値 list?category=34
        $lists_array = Item::with('skus')->where("category", "LIKE", "%".$category."%")->where("display", "=", "表示")->get();

        $lists=[];
        foreach ($lists_array as $data) {
            $id = $data->id;
            $number = $data->number;
            $name = $data->name;
            $material = $data->material;//素材
            $brand = $data->brand;//ブランド名
            $min_price = $data->skus->min('price');//各商品の最小プライス
 

            //$categorys = $data->category;
            foreach ($data->skus as $sku) {
                $thumbnail_folder = $sku->thumbnail_folder;
                $image_name = $sku->image_name;
            }
            array_push($lists, ['id'=>$id,'number'=>$number,'name'=>$name,'thumbnail_folder'=>$thumbnail_folder,'image_name'=>$image_name,'material'=>$material,'min_price'=>$min_price,'brand'=>$brand]);
        }
        /*
        foreach($lists as $list){
           print($list['thumbnail_folder']);
           print("<br>");
        }
        */

        return view('list.index', compact('lists'));
    }
}
