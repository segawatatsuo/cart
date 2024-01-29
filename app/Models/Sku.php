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
        'price',
        'maker_price',
        'purchase_price',
        'maker',
        'purchase',
        'stock',
    ];

}
