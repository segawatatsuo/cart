<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreItemRequest;
use App\Http\Requests\UpdateItemRequest;

use Illuminate\Http\Request;

use Carbon\Carbon;

use App\Services\TaxService;
use App\Models\Item;
use App\Models\Pulldown;
use App\Models\Pulldwn_record;
use App\Models\Category;
use App\Models\Image;
use App\Models\ImageUpload;
use App\Models\Pulldown_set;
use App\Models\Tax;
use App\Models\Item_pulldown_temporarily;



class ItemController extends Controller
{


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        \App\Models\ImageUpload::truncate(); //商品登録にアクセスしたら画像アップテーブルを初期化する。
        \App\Models\Item_pulldown_temporarily::truncate();
        //カテゴリー
        $projects = Category::get()->toTree();
        //プルダウンセット
        $pulldown_sets = Pulldown_set::all();
        //全プルダウンを左にセット
        $leftside = Pulldown::all();
        $rightside = [];
        return view('items.index', compact('leftside', 'rightside', 'projects', 'pulldown_sets'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $rightside = serialize($request->rightside);
        $leftside = serialize($request->leftside);
        $Item_pulldown_temporarily = Item_pulldown_temporarily::create(['rightside' => $rightside, 'leftside' => $leftside]);
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreItemRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        /*
        $filename = 'filestream.txt'; //publicにテキストが書き出しされる
        $fp = fopen($filename, 'wa');

        fwrite($fp, "recoedID:");
        $content = $request->record_id;
        fwrite($fp, $content);

        fwrite($fp, "rightside:");
        $right = serialize($request->rightside);
        fwrite($fp, $right);

        fwrite($fp, "leftside:");
        $left = serialize($request->leftside);
        fwrite($fp, $left);

        fclose($fp);
        */

        //消費税 from app/Services/TaxService.php & config/constants.php
        $tody = new Carbon('today');
        $tax = TaxService::getRateByDate($tody);
        //カテゴリ
        $categorys = $request->input('category');
        $categorys = json_encode($categorys);

        //Item_pulldown_temporarilyにインポートされたpulldownのAJAXデータを取り出す
        $tempo = new Item_pulldown_temporarily();
        $id = $tempo->latest('id')->first();
        $pulldown = $tempo::find($id);
        $pulldown_rightside = $pulldown[0]['rightside'];
        $pulldown_leftside = $pulldown[0]['leftside'];

        Item::create([
            'display' => $request->display,
            'number' => $request->number,
            'name' => $request->name,
            'size' => $request->size,
            'color' => $request->color,
            'head_copy' => $request->head_copy,
            'description' => $request->description,
            'recommend' => $request->recommend,
            'price' => $request->price,
            'price_in_tax' => round($request->price * (1 + $tax / 100)),
            'maker_price' => $request->maker_price,
            'maker' => $request->maker,
            'purchase' => $request->purchase,
            'purchase_price' => $request->purchase_price,
            'purchase_price_in_tax' => round($request->purchase_price * (1 + $tax / 100)),
            'color_group' => $request->color_group,
            'category' => $categorys,
            'pulldown_rightside' => $pulldown_rightside,
            'pulldown_leftside' => $pulldown_leftside,
        ]);
        //最終ID
        $item = new Item();
        $last = $item->latest('id')->first();
        $lastId = $last->id;

        //画像データをImageUploadからImageに移動させる
        $imageupload = ImageUpload::all();
        foreach ($imageupload as $image) {
            Image::create([
                'item_id' => $lastId,
                'filename' => $image->filename,
            ]);
        }

        return redirect('item');
    }


    public function list()
    {
        $list = Item::paginate(50);
        return view('items.list', compact('list'));
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        \App\Models\ImageUpload::truncate(); //商品登録にアクセスしたら画像アップテーブルを初期化する。
        \App\Models\Item_pulldown_temporarily::truncate();

        $item = Item::find($id);

        //カテゴリー
        $projects = Category::get()->toTree(); //ツリー形式
        //プルダウンセット
        $pulldown_sets = Pulldown_set::all();

        $selected_category = $item->category;
        $selected_category = str_replace('"', '', $selected_category); //"を削除
        $selected_category = json_encode($selected_category); //JSON

        //プルダウンの選択されたものを送る
        $set_show = Item::where('id', $id)->first();
        $leftside = unserialize($set_show->pulldown_leftside);
        $rightside = unserialize($set_show->pulldown_rightside);

        if ($leftside == null) {
            $left = "";
        } else {
            foreach ($leftside as $n) {
                $left[] = Pulldown_set::find($n);
            }
        }
        if ($rightside == null) {
            $right = "";
        } else {
            foreach ($rightside as $n) {
                $right[] = Pulldown_set::find($n);
            }
        }

        //関連テーブルのimagesに登録された画像一覧配列を取得
        $images=$item->images;

        //関連するSKUを取得
        $hoge=$item->sku;
        dd($hoge);


        return view('items.show', compact('item', 'projects', 'pulldown_sets', 'selected_category', 'left', 'right', 'images'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function edit(Item $item)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateItemRequest  $request
     * @param  \App\Models\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //カテゴリ
        $categorys = $request->input('category');
        $categorys = json_encode($categorys);
        //Item_pulldown_temporarilyにインポートされたpulldownのAJAXデータを取り出す
        $tempo = new Item_pulldown_temporarily();
        $lastId = $tempo->latest('id')->first();
        $pulldown = $tempo::find($lastId);
        if($pulldown[0]['rightside']!=null){
            $pulldown_rightside = $pulldown[0]['rightside'];
        }else{
            $pulldown_rightside ="";
        }

        if($pulldown[0]['leftside']!=null){
            $pulldown_leftside = $pulldown[0]['leftside'];
        }else{
            $pulldown_leftside = "";
        }


        $item = Item::find($id);
        $item->display = $request->display;
        $item->number = $request->number;
        $item->name = $request->name;
        $item->category = $categorys;
        $item->size = $request->size;
        $item->color = $request->color;
        $item->head_copy = $request->head_copy;
        $item->description = $request->description;
        $item->recommend = $request->recommend;
        $non_kugiri_number = str_replace(',', '', $request->price);
        $item->price = $non_kugiri_number;
        $non_kugiri_number = str_replace(',', '', $request->maker_price);
        $item->maker_price = $non_kugiri_number;
        $item->maker = $request->maker;
        $item->purchase = $request->purchase;
        $non_kugiri_number = str_replace(',', '', $request->purchase_price);
        $item->purchase_price = $non_kugiri_number;
        $item->color_group = $request->color_group;
        $item->save();

        //$item->pulldown_rightside = $pulldown_rightside;
        //$item->pulldown_leftside = $pulldown_leftside;

        Item::where('id', $id)->update(['pulldown_rightside' => $pulldown_rightside]);
        Item::where('id', $id)->update(['pulldown_leftside' => $pulldown_leftside]);

        $list = Item::paginate(50);
        return view('items.list', compact('list'));

    }

    public function select(){
        return view('items.select');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $item = Item::find($id);
        dd($item);
        $item->delete();
        //$list = Item::paginate(50);
        //return view('items.list', compact('list'));

    }
}
