<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Item;
use App\Models\Pulldown;
use App\Models\Sku;
use App\Models\Pulldown_set;
use App\Models\Color;
use App\Models\Font;
use App\Models\Category;
use App\Models\AddPrint;
use Hamcrest\Arrays\IsArray;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function index($id)
    {
        $item = Item::find($id);

        $addprint_model = new AddPrint();
        $add_print = $addprint_model->add_print();

        $categorys = $item->category;//JSON "["33","34"]"
        $categorys_arr = json_decode($categorys, true);//JSONを連想配列に変換(引数trueが必要)

        //カテゴリー
        $category_name=[];
        foreach ($categorys_arr as $category) {
            $catg = Category::where('id', $category)->get();
            $name = $catg[0]->name;
            $id = $catg[0]->id;
            $hoge=[$name=>$id];
            array_push($category_name, $hoge);
        }

        $itemNo = $item->number;
        //'サイズ表用にsize'と'price'でグループ化
        //$sizes = Sku::where('item_number', $itemNo)->groupBy('size', 'price')->get(['size','price']);
        //'サイズ表用にsize'と'price'でグループ化とskusortorderも一緒に
        $sizes = Sku::with('skusortorder')->where('item_number', $itemNo)->groupBy('size', 'price')->get(['size','price']);

        //'カラー選択用にcolor_display_name'でグループ化
        $colors = Sku::where('item_number', $itemNo)->groupBy('color_display_name', 'image_name')->get(['color_display_name','image_name']);
        //dd($itemNo);
        //関連画像のユニークな配列
        //$images = Sku::where('item_number', $itemNo)->groupBy('image_name')->get(['image_name']);
        $images = Sku::where('thumbnail_folder', $itemNo)->groupBy('image_name')->get(['image_name']);
        //dd($images);

        //関連画像の格納フォルダ名
        $thumbnail_folder = Sku::where('thumbnail_folder', $itemNo)->groupBy('thumbnail_folder')->get(['thumbnail_folder']);
        if ($thumbnail_folder!="" and count($thumbnail_folder)>=1) {
            $thumbnail_folder = $thumbnail_folder[0]->thumbnail_folder;
        }
        //dd($thumbnail_folder[0]->thumbnail_folder);
        //使用するプルダウンのセット番号。
        $pulldowns = $item->pulldown_rightside;
        $pulldowns = unserialize($pulldowns);
        $pulldown_id = $pulldowns[0];//セットは配列だが1つだけ使用する前提なので[0]番目だけ取り出せばOK

        //pulldown_setsから該当するidを探す
        $selected_pulldown_set = Pulldown_set::find($pulldown_id);
        $selected_pulldown_set = $selected_pulldown_set->rightside;
        $selected_pulldown_sets = unserialize($selected_pulldown_set);

        //各プルダウンの構成内容を取得して配列にセット
        $selecters = [];
        foreach ($selected_pulldown_sets as $key=>$val) {
            $data = Pulldown::with('pulldown_detail')->find($val);//pulldown_detailも一緒に取得
            if ($data != null) { //削除をした場合にnullになる
                array_push($selecters, $data);
            }
        }
        //フォント用カラー一覧
        $color_array = Color::all();
        //書体一覧
        $font_array = Font::all();

        return view('products.index', compact('item', 'sizes', 'colors', 'images', 'thumbnail_folder', 'selecters', 'color_array', 'font_array', 'category_name','add_print'));
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
