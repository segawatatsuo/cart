<?php

namespace App\Exports;

use App\Models\Sku;
use Maatwebsite\Excel\Concerns\FromCollection;

class SkuExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Sku::all();
    }
}
