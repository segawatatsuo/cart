<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SkuSortOrder extends Model
{
    use HasFactory;
    protected $guarded = [
        'id',
    ];
    public function sku()
    {
        return $this->belongsTo( Sku::class,'size' );
    }
}
