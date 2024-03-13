<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Item;
use App\Models\Sku;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function index($id)
    {
        $item = Item::find($id);
        $itemNo = $item->number;
        $sizes = Sku::where('item_number', $itemNo)->groupBy('size', 'price')->orderBy('id', 'asc')->get(['size','price']);//'サイズ表用にsize'と'price'でグループ化
        $colors = Sku::where('item_number', $itemNo)->groupBy('color_display_name', 'image_name')->get(['color_display_name','image_name']);//'カラー選択用にcolor_display_name'でグループ化
        return view('products.index', compact('item', 'sizes', 'colors'));
    }

    public function get_size(Request $request)
    {
        $users = "";
        $color = $request->color;
        $itemNo = $request->itemNo;
        //$users = DB::select("SELECT skus.size FROM skus WHERE skus.item_number = " . $itemNo . " AND skus.image_color_name LIKE " . $color);
        $sql = "SELECT skus.size FROM skus WHERE skus.item_number LIKE '" . $itemNo . "'" . " AND skus.image_color_name LIKE '" . $color . "'";
        $users = DB::select($sql);
        //HTTPヘッダー（application/json）も含めjson形式で返す
        return response()->json($users);
    }

    public function hoge(Request $request)
    {
        $color = $request->color;
        $itemNo = $request->itemNo;
        $sql = "SELECT skus.size FROM skus WHERE skus.item_number LIKE '" . $itemNo . "'" . " AND skus.image_color_name LIKE '" . $color . "'";
        //dd($sql);
        //SELECT skus.size FROM skus WHERE skus.item_number LIKE 'p175' AND skus.image_color_name LIKE 'red'
        $users = DB::select($sql);
        return response()->json($users);
    }

    public function back()
    {
        $url = url()->previous();
        dd($url);
        return back('url');
    }
}
