<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;

class Pulldown_detail extends Model
{
    use HasFactory;
    protected $guarded = ['id',];

    public function pulldown()
    {
        return $this->belongsTo(Pulldown::class);
    }
}
