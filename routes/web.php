<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\PulldownSetController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\AdminLoginController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\PulldownController;
use App\Http\Controllers\ColorController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ImageUploadController;
use App\Models\Pulldown;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


// 管理ログイン画面
Route::get('/admin-login', [AdminLoginController::class, 'create'])->name('admin.login');
// 管理ログイン
Route::post('/admin-login', [AdminLoginController::class, 'store'])->name('admin.login.store');
// 管理ログアウト
Route::delete('/admin-login', [AdminLoginController::class, 'destroy'])->name('admin.login.destroy');

// 管理ログイン後のみアクセス可
Route::middleware('auth:admin')->group(function () {
    Route::get('/admin', function () {
        return view('admin.top');
    })->name('admin.top');

    //商品登録ページを表示
    Route::get('item', [ItemController::class,'index'])->name('item');
    Route::post('item/create',[ItemController::class,'create'])->name('item.create');
    Route::get('item/store',[ItemController::class,'store'])->name('item.store');
    Route::post('item/store',[ItemController::class,'store'])->name('item.store');
    Route::get('item/list',[ItemController::class,'list'])->name('item.list');
    Route::get('item/show/{id}',[ItemController::class,'show'])->name('item.show');
    Route::post('item/update/{id}',[ItemController::class,'update'])->name('item.update');


    //プルダウン登録ページ
    Route::get('pulldown',[PulldownController::class,'index'])->name('pulldown.index');
    Route::post('pulldown.store',[PulldownController::class,'store'])->name('pulldown.store');
    Route::post('pulldown.store2',[PulldownController::class,'store2'])->name('pulldown.store2');
    Route::get('pulldown/list',[PulldownController::class,'list'])->name('pulldown.list');
    Route::get('pulldown/show/{id}',[PulldownController::class,'show'])->name('pulldown.show');
    Route::get('pulldown/set/',[PulldownController::class,'set'])->name('pulldown.set');
    Route::get('pulldown/setlist',[PulldownController::class,'setlist'])->name('pulldown.setlist');
    Route::post('pulldown/set_store',[PulldownController::class,'set_store'])->name('pulldown.set_store');
    Route::post('pulldown/update',[PulldownController::class,'update'])->name('pulldown.update');
    Route::get('pulldown/set_show/{id}',[PulldownController::class,'set_show'])->name('pulldown.set_show');

    Route::get('color',[ColorController::class,'index'])->name('color');
    Route::post('color/store',[ColorController::class,'store'])->name('color.store');
    Route::get('color/list',[ColorController::class,'list'])->name('color.list');


    Route::get('color/set',[ColorController::class,'set'])->name('color.set');
    Route::get('color/setlist',[ColorController::class,'setlist'])->name('color.setlist');

    Route::get('image',[ImageController::class,'index'])->name('image');
    Route::get('image/set',[ImageController::class,'set'])->name('image.set');
    Route::get('image/setlist',[ImageController::class,'setlist'])->name('image.setlist');
    Route::post('image/upload',[ImageController::class,'upload'])->name('image.upload');

    //カテゴリー
    Route::get('category',[CategoryController::class,'index'])->name('category.index');
    Route::post('category/store',[CategoryController::class,'store'])->name('category.store');

    //商品画像アップロード(item)
    Route::post('image/upload/store',[ImageUploadController::class,'fileStore']);
    Route::post('image/delete',[ImageUploadController::class,'fileDestroy']);

});



//--------------------カート---------------------//


Route::get('carts', [CartController::class,'index']);

Route::resource('ajax/products', App\Http\Controllers\Ajax\ProductController::class)->only(['index']);
Route::resource('ajax/carts', App\Http\Controllers\Ajax\CartController::class)->only(['index', 'store', 'destroy']);
Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


//--------------------------------//
Route::get('test', function () {
    \Cart::add('293ad', 'Product 1', 1, 9.99, ['size' => 'large']);
});

Route::get('test2', function () {
    Cart::add('1001-B', '山田うどん', 5, 380);
});

Route::get('test3', function () {
    Cart::add('1001-C', 'Apple', 100, 3);
});

//--------------------------------//
Route::get('cart', function(){
    return Cart::getContent();
});

