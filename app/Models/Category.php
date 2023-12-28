<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Kalnoy\Nestedset\NodeTrait;//追加

class Category extends Model
{
    use HasFactory;

    use NodeTrait;//追加

    protected $guarded = [
        'id',
        'created_at',
        'updated_at',
        'depth',//追加
    ];
}
