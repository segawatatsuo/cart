<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sku extends Model
{
    use HasFactory;
    protected $fillable = [
        'item_number',
        'maker_item_number',
        'maker_color_number',
        'size',
        'color_display_name',
        'stock',
        'maker',
        'purchase',

        'price',
        'maker_price',
        'purchase_price',
        'jan',
        'country',
        'classification',
    ];

    public function item()
    {
        return $this->belongsTo( Item::class,'item_number','number' );
    }

}
