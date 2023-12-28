<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Item extends Model
{
    use HasFactory;
    protected $guarded = ['id',];

    public function image()
    {
        return $this->hasMany(Image::class);
    }
    public function item_category()
    {
        return $this->hasMany(Item_category::class);
    }
    public function item_image()
    {
        return $this->hasMany(Item_image::class);
    }
    public function item_pulldown()
    {
        return $this->hasMany(Item_pulldown::class);
    }

}
