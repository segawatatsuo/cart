<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Pulldown_detail;
use Illuminate\Support\Facades\DB; //トランザクション

class Pulldown extends Model
{
    use HasFactory;
    protected $guarded = ['id',];

    //レコード複製(クローン)機能
    use \Bkwld\Cloner\Cloneable;
    protected $cloneable_relations = ['pulldown_detail'];//クローンするリレーション（下33行目のpulldown_detail()）を指定
    public function onCloning($src, $child = null) { //クローン作成時にnameフィールドに文字列を追加
        $this->name = "this is clone!-- ". $src->name;
   }


    //リレーション元が削除されたら子も削除する設定
    public static function boot()
    {
        parent::boot();

        static::deleting(function ($pulldown) {
            $pulldown->pulldown_detail()->delete();
        });
    }

    public function pulldown_detail()
    {
        return $this->hasMany(Pulldown_detail::class);
    }

    public function store($request)
    {
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
            
            $n=0;
            foreach ($request->ingredients as $ingredient_name) {
                $detail = new Pulldown_detail();
                $detail->pulldown_id = $pulldown->id;
                $detail->name = $ingredient_name;
                $detail->price = mb_convert_kana($request->prices[$n],"n");//半角に変換
                $detail->save();
                $n+=1;
            }

            DB::commit();
            $result = true;
        } catch (\Exception $e) {

            DB::rollBack();
        }
        
        return ['result' => $result];
    }
}
