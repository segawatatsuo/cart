<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Item;
use App\Http\Requests\ProductRequest;

class ProductController extends Controller
{
    public function index($id)
    {
        $item=Item::find($id);
        
        return view('products.index',compact('item'));
    }
}
