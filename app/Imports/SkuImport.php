<?php

namespace App\Imports;

use App\Models\Sku;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\Importable; //追加
use Maatwebsite\Excel\Concerns\WithHeadingRow; //追加
use Maatwebsite\Excel\Concerns\WithStartRow; //追加
use Maatwebsite\Excel\Concerns\WithValidation; //追加

class SkuImport implements ToModel,WithValidation,WithHeadingRow
{
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row)
    {
        return new Sku([
            /*
            このパターンだと1行目も取り込まれる
            'item_number' => $row[0],
            'maker_item_number' => $row[1],
            'maker_color_number' => $row[2],
            'size' => $row[3],
            'color_display_name' => $row[4],
            'stock' => $row[5],
            */
            //WithHeadingRow書式にすると2行目から
            'item_number' => $row['item_number'],
            'maker_item_number' => $row['maker_item_number'],
            'maker_color_number' => $row['maker_color_number'],
            'size' => $row['size'],
            'color_display_name' => $row['color_display_name'],
            'stock' => $row['stock'],

        ]);
    }
    /*
    public function chunkSize(): int
    { //50件づつ取り込む
        return 50;
    }
    */

    public function startRow(): int //取り込み開始行(2行目から)
    {
        return 2;
    }


    //WithHeadingRowを使わない場合は0〜数字,そうでない場合はitem_numberなどになる
    public function rules(): array
    {
        return [
            /*
            '0' => 'required',
            '1' => 'required',
            '2' => 'required',
            '3' => 'required',
            '4' => 'required',
            '5' => 'required',
            */
            'item_number' => 'required',
            'maker_item_number' => 'required',
            'maker_color_number' => 'required',
            'size' => 'required',
            'color_display_name' => 'required',
            'stock' => 'required',
        ];
    }
	public function customValidationMessages()
    {
        return [
            /*
            '0.required' => '商品番号は必須です',
            '1.required' => 'メーカー商品番号は必須です',
            '2.required' => 'メーカーカラー番号は必須です',
            '3.required' => 'サイズは必須です',
            '4.required' => '顧客表示用色名は必須です',
            '5.required' => '在庫数は必須です',
            */
            'item_number.required' => '商品番号は必須です',
            'maker_item_number.required' => 'メーカー商品番号は必須です',
            'maker_color_number.required' => 'メーカーカラー番号は必須です',
            'size.required' => 'サイズは必須です',
            'color_display_name.required' => '顧客表示用色名は必須です',
            'stock.required' => '在庫数は必須です',

        ];
    }


}