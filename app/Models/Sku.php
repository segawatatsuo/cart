<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sku extends Model
{
    use HasFactory;
    protected $guarded = [
        'id',
    ];

    public function item()
    {
        return $this->belongsTo( Item::class,'item_number','number' );
    }

    public function skusortorder()
    {
        return $this->hasMany( SkuSortOrder::class,'size','size' );
    }

    public function items()
    {
        return $this->belongsTo(Item::class,'number');
    }
}
