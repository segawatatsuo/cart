<?php
namespace App;

use Franzose\ClosureTable\Models\Entity;
use Illuminate\Http\Request;

class Node extends Entity
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'nodes';

    protected $fillable = ['name'];

    /**
     * ClosureTable model instance.
     *
     * @var \App\NodeClosure
     */
    protected $closure = 'App\NodeClosure';


    public function test()
    {
        //$rootCategory= new Node(['name' => '暮らし']);
        //$rootCategory->save();

        $id=1;
        $hairetu=[];
        $arry=Node::find($id)->getChildren()->pluck('id')->toArray();
        foreach($arry as $data){
            array_push($hairetu,$data);
        }
    }


    public function findAllNode()
    {
        return $this->all()->sortBy('parent_id');
    }


    public function nodeAddHyphen($separatorText)//nameにハイフンを追加する
    {
        $datas = $this->all()->sortBy('parent_id');
        foreach($datas as $data){
            if($data->parent_id==2){
                $data->name = $separatorText.$data->name;//セパレーター文字を前に一つ
            }
            if($data->parent_id>=3){
                $data->name = $separatorText.$separatorText.$data->name;//セパレーター文字を前に二つ
            }
        }
        return $datas;
    }

    public function setNode( Request $request )
    {
        //formから新しい値を受け取る
        $category_name = $request->category_name;
        $slug = $request->slug;
        $parent_name_id = $request->parent_name;
        $explanation = $request->explanation;

        //idからnameを取り出す
        $parent = Node::where( 'id' , $parent_name_id ) ->first();
        $parent_name = $parent->name;

        //category_nameがルートの場合はトップレベルに配置、それ以外は子孫に配置
        if($parent_name == "ルート")
        {
            $rootCategory = new Node(['name' => $category_name]);
            $rootCategory->save();
        }else
        {
            $hoge = Node::where( 'name' , $parent_name ) ->first();
            $id=$hoge->id;
            Node::find($id)->addChild(new Node(['name' => $category_name]));
        }
    }
}
