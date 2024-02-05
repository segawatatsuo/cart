<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePulldownRequest;
use App\Http\Requests\UpdatePulldownRequest;
use App\Models\Pulldown;
use App\Models\Pulldown_detail;
use App\Models\Pulldown_set;
use App\Models\Pulldwn_record;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB; //トランザクション
use JeroenNoten\LaravelAdminLte\View\Components\Widget\Alert;


class PulldownController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('pulldown.index');
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
     * @param  \App\Http\Requests\StorePulldownRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        DB::beginTransaction();
        try {
            $pulldown = new Pulldown($request->get('pulldown', [
                'name' => $request->name,
                'inside_name' => $request->inside_name,
                'attribution' => $request->attribution,
                'input_column1' => $request->input_column1,
                'input_column2' => $request->input_column2,
                'input_column3' => $request->input_column3,
            ]));
            //メインを保存
            $pulldown->save();

            //明細を処理
            $data = $request->all();
            foreach ($data['pull'] as $detail) {
                $data = [
                    'name' => $detail[0],
                    'price' => $detail[1],
                    'pulldown_id' => $pulldown->id,
                ];
                //保存取得した複数のレコ-ドをinsert() でまとめて保存する(bulk insert)
                $vote = Pulldown_detail::insert($data);
            }
        } catch (Exception $e) {
            DB::rollback();
            return back()->withInput();
        }

        DB::commit();
        return redirect(route('pulldown.index'));
    }


    public function store2(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'inside_name' => ['required'],
            'attribution' => ['required'],
            'ingredients.*' => ['distinct'],
        ]);

        $result = false;

        DB::beginTransaction();

        try {
            $pulldown = new Pulldown();
            $pulldown->name = $request->name;
            $pulldown->inside_name = $request->inside_name;
            $pulldown->attribution = $request->attribution;
            $pulldown->input_column1 = $request->input_column1;
            $pulldown->input_column2 = $request->input_column2;
            $pulldown->input_column3 = $request->input_column3;
            $pulldown->save();

            $n = 0;
            foreach ($request->ingredients as $ingredient_name) {
                $detail = new Pulldown_detail();
                $detail->pulldown_id = $pulldown->id;
                $detail->name = $ingredient_name;
                $detail->price = mb_convert_kana($request->prices[$n], "n"); //半角に変換
                $detail->save();
                $n += 1;
            }

            DB::commit();
            $result = true;
        } catch (\Exception $e) {

            DB::rollBack();
        }
        return ['result' => $result];
    }


    public function list(Pulldown $pulldown)
    {
        $list = Pulldown::paginate(15);
        return view('pulldown.list', compact('list'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Pulldown  $pulldown
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $post = Pulldown::where('id', $id)->with('pulldown_detail')->first();
        $details = $post->pulldown_detail;
        return view('pulldown.show', compact('post', 'details'));
    }

    public function set()
    {
        $pulldowns = Pulldown::all();
        return view('pulldown.set', compact('pulldowns'));
    }


    public function setlist()
    {
        $pulldown_sets = Pulldown_set::all();
        return view('pulldown.setlist', compact('pulldown_sets'));
    }

    public function set_show($id)
    {
        $set_show = Pulldown_set::where('id', $id)->first();
        $name = $set_show->name;
        $leftside = unserialize($set_show->leftside);
        $rightside = unserialize($set_show->rightside);
        $record_id = $id;
        if ($leftside !== null) {
            foreach ($leftside as $n) {
                $left[] = Pulldown::find($n);
            }
        } else {
            $left = "";
        }
        if ($rightside !== null) {
            foreach ($rightside as $n) {
                $right[] = Pulldown::find($n);
            }
        }else{
            $right="";
        }
        //return view('pulldown.set_show', compact('name','leftside','rightside'));
        return view('pulldown.set_show', compact('name', 'left', 'right' ,'record_id'));
    }



    public function set_store(Request $request)
    {
        //$record_id = $request->record_id;
        $name = $request->setname;
        $rightside = serialize($request->rightside);
        $leftside = serialize($request->leftside);
        $pulldown_set = Pulldown_set::create(['name' => $name, 'rightside' => $rightside, 'leftside' => $leftside]);
    }




    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Pulldown  $pulldown
     * @return \Illuminate\Http\Response
     */
    public function edit(Pulldown $pulldown)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePulldownRequest  $request
     * @param  \App\Models\Pulldown  $pulldown
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $pulldown = Pulldown::find($request->id);
        $pulldown->fill(
            [
                'name' => $request->name,
                'inside_name' => $request->inside_name,
                'input_column1' => $request->input_column1,
                'input_column2' => $request->input_column2,
                'input_column3' => $request->input_column3,
                'sequence' => $request->sequence,
                'attribution' => $request->attribution,
            ]
        );
        $pulldown->save();

        $details = $request->detail; //セット名の配列
        $prices = $request->price; //価格の配列
        $ids = $request->ids; //レコードIDの配列

        $n = 0;
        foreach ($details as $item) {
            $data[] = [
                'id' => $ids[$n],
                'name' => $item,
                'price' => mb_convert_kana($prices[$n], "n"), //半角数字に変換
                'pulldown_id' => $request->id,
            ];
            $n += 1;
        }
        Pulldown_detail::upsert($data, ['id'], ['name', 'price']); //レコードIDが同じもので比較して$dataで更新、レコードIDが無ければ追加

        return redirect('pulldown/list')->with('flash_message', '更新しました');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Pulldown  $pulldown
     * @return \Illuminate\Http\Response
     */
    /*
    public function destroy(Request $request)
    {
        DB::beginTransaction();
        try {
          $pulldown = Pulldown::where('id', $request->id)->first();
          $pulldown->delete(); 
          DB::commit();
        } catch (\Exception $e) {

        }
    }
    */

    public function detailsdestroy($detailId,$postId)
    {
 
        DB::beginTransaction();
        try {
          $pulldown_detail = Pulldown_detail::where('id', $detailId)->first();
          $pulldown_detail->delete(); 
          DB::commit();
        } catch (\Exception $e) {

        }
        $post = Pulldown::where('id', $postId)->with('pulldown_detail')->first();
        $details = $post->pulldown_detail;
        return view('pulldown.show', compact('post', 'details'))->with('flash_message', '削除しました');

        //return redirect('pulldown.show')->with('flash_message', '更新しました');
    }
}
