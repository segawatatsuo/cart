<?php

namespace App\Imports;

use App\Models\Sku;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\Importable; //追加
use Maatwebsite\Excel\Concerns\WithHeadingRow; //追加

use Maatwebsite\Excel\Concerns\WithStartRow;//追加

class SkuImport implements ToModel, WithStartRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Sku([
            'item_number' => $row[0],
            'maker_item_number' => $row[1],
            'maker_color_number' => $row[2],
            'size' => $row[3],
            'color_display_name' => $row[4],
            'stock' => $row[5],
        ]);
    }
    public function chunkSize():int{ //50件づつ取り込む
        return 50;
    }

    public function startRow(): int //取り込み開始行(2行目から)
    {
        return 2;
    }

}
