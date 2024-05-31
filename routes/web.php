<?php

use Illuminate\Support\Facades\Auth;
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
use App\Http\Controllers\SkuController;
use App\Http\Controllers\TopController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\ListController;
use App\Http\Controllers\ColorAttributionController;
use App\Http\Controllers\ToppageCategoryController;
use App\Http\Controllers\UserUploadController;
use App\Http\Controllers\LawController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\AddPrintController;
use App\Models\AddPrint;
use App\Models\Pulldown;
use App\Models\Pulldown_detail;


use App\Models\Sku;
use PhpOffice\PhpSpreadsheet\Shared\OLE\PPS\Root;

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
/*
Route::get('/', function () {
    return view('welcome');
});
*/

Route::get('/', [TopController::class, 'index'])->name('welcome');
Route::get('/flush', [TopController::class, 'flush'])->name('flish');

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
    Route::post('item/create', [ItemController::class,'create'])->name('item.create');
    Route::get('item/store', [ItemController::class,'store'])->name('item.store');
    Route::post('item/store', [ItemController::class,'store'])->name('item.store');

    Route::get('item/select', [ItemController::class,'select'])->name('item.select');

    Route::get('item/list', [ItemController::class,'list'])->name('item.list');
    Route::get('item/show/{id}', [ItemController::class,'show'])->name('item.show');
    Route::post('item/update/{id}', [ItemController::class,'update'])->name('item.update');
    Route::post('item/destroy/{id}', [ItemController::class,'destroy'])->name('item.destroy');

    Route::get('item/test', [ItemController::class,'test'])->name('item.test');

    //プルダウン登録ページ
    Route::get('pulldown', [PulldownController::class,'index'])->name('pulldown.index');
    Route::post('pulldown.store', [PulldownController::class,'store'])->name('pulldown.store');
    Route::post('pulldown.store2', [PulldownController::class,'store2'])->name('pulldown.store2');
    Route::get('pulldown/list', [PulldownController::class,'list'])->name('pulldown.list');
    Route::get('pulldown/show/{id}', [PulldownController::class,'show'])->name('pulldown.show');
    Route::get('pulldown/set/', [PulldownController::class,'set'])->name('pulldown.set');
    Route::get('pulldown/setlist', [PulldownController::class,'setlist'])->name('pulldown.setlist');
    Route::post('pulldown/set_store', [PulldownController::class,'set_store'])->name('pulldown.set_store');
    Route::post('pulldown/update', [PulldownController::class,'update'])->name('pulldown.update');
    Route::post('pulldown/update2', [PulldownController::class,'update2'])->name('pulldown.update2');
    Route::get('pulldown/set_show/{id}', [PulldownController::class,'set_show'])->name('pulldown.set_show');
    Route::get('pulldown/destroy/{id}', [PulldownController::class, 'destroy'])->name('pulldown.destroy');
    Route::get('pulldown/clone/{id}', [PulldownController::class,'clone'])->name('pulldown.clone');

    Route::post('pulldown/detailsdestroy/{detailId}/{postId}', [PulldownController::class, 'detailsdestroy'])->name('pulldown.detailsdestroy');

    Route::post('pulldown_detail/index', [Pulldown_detail::class, 'index'])->name('pulldown_detail.index');
    Route::post('pulldown_detail/destroy/{id}', [Pulldown_detail::class, 'destroy'])->name('pulldown_detail.destroy');
    Route::post('pulldown_set/update', [PulldownSetController::class,'update'])->name('pulldown_set.update');
    Route::get('pulldown_set/update', [PulldownSetController::class,'update'])->name('pulldown_set.update');


    Route::get('color', [ColorController::class,'index'])->name('color');
    Route::post('color/store', [ColorController::class,'store'])->name('color.store');
    Route::get('color/list', [ColorController::class,'list'])->name('color.list');
    Route::get('color/set', [ColorController::class,'set'])->name('color.set');
    Route::get('color/setlist', [ColorController::class,'setlist'])->name('color.setlist');

    Route::get('color/attribution', [ColorAttributionController::class,'index'])->name('color.attribution');
    Route::post('color/attribution/store', [ColorAttributionController::class,'store'])->name('color.attribution.store');
    Route::post('color/attribution/destroy/{id}', [ColorAttributionController::class,'destroy'])->name('color.attribution.destroy');


    Route::get('image', [ImageController::class,'index'])->name('image');
    Route::get('image/set', [ImageController::class,'set'])->name('image.set');
    Route::get('image/setlist', [ImageController::class,'setlist'])->name('image.setlist');
    Route::post('image/upload', [ImageController::class,'upload'])->name('image.upload');

    //カテゴリー
    Route::get('category', [CategoryController::class,'index'])->name('category.index');
    Route::post('category/store', [CategoryController::class,'store'])->name('category.store');

    //トップページ
    Route::get('toppage', [ToppageCategoryController::class,'index'])->name('toppage.index');
    Route::post('toppage/store', [ToppageCategoryController::class,'store'])->name('toppage.store');


    //商品画像アップロード(item)
    Route::post('image/upload/store', [ImageUploadController::class,'fileStore']);
    Route::post('image/delete', [ImageUploadController::class,'fileDestroy']);

    //skuインポート＆エクスポート
    Route::get('sku/list', [SkuController::class,'list'])->name('sku.list');
    Route::post('sku/sku_import', [SkuController::class,'import'])->name('sku.import');
    Route::post('sku/sku_export', [SkuController::class,'export'])->name('sku.export'); //追加
    Route::get('sku/show/{id}', [SkuController::class,'show'])->name('sku.show');
    Route::get('sku/update/{id}', [SkuController::class,'update'])->name('sku.update'); //追加
    Route::post('sku/update/{id}', [SkuController::class,'update'])->name('sku.update'); //追加

    Route::post('sku/del_multi', [SkuController::class,'remove_multi'])->name(('sku.remove_multi'));

    Route::post('sku/search', [SkuController::class,'search'])->name('sku.search');
    Route::get('sku/search', [SkuController::class,'search'])->name('sku.search');

    Route::get('sku/excel', [SkuController::class,'excel'])->name('sku.excel');//excelテンプレートダウンロード

    Route::get('add_print/index',[AddPrintController::class,'index'])->name('add_print.index');
    Route::post('add_print/update',[AddPrintController::class,'update'])->name('add_print.update');

    Route::get('company/info', [CompanyController::class,'info'])->name('company.info');
    Route::post('company/info/store', [CompanyController::class,'info_store'])->name('company.info.store');

    Route::get('company/mail', [CompanyController::class,'mail'])->name('company.mail');
    Route::post('company/mail/update', [CompanyController::class,'mail_update'])->name('company.mail.update');

    Route::get('company/law', [LawController::class,'index'])->name(('law.index'));//特定商取引法
    Route::post('company/law/update', [LawController::class,'update'])->name('company.law.update'); //アップデート

    Route::get('company/privacy', [LawController::class,'privacy'])->name(('law.privacy'));//プライバシーポリシー
    Route::post('company/privacy/update', [LawController::class,'privacy_update'])->name('company.privacy.update'); //アップデート
});

//--------------------一覧ページ---------------------//
Route::get('list', [ListController::class,'index'])->name('list.index');

//--------------------商品ページ---------------------//

Route::get('product{id}', [ProductController::class,'index'])->name('product.index');//商品シングルページ
//サイズ取得のルート(ProductController)
Route::get('product/get_size', [ProductController::class,'get_size'])->name('product.get_size');

Route::get('product/hoge', [ProductController::class,'hoge'])->name('product.hoge');
//戻る
Route::get('product/back', [ProductController::class,'back'])->name('product.back');

//--------------------カート---------------------//

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
/*
Route::get('cart', function () {
    return Cart::getContent();
});
*/

//カートに入れる
Route::post('cartAdd/index', [CartController::class,'index'])->name('cartAdd.index');
Route::get('cartAdd/index', [CartController::class,'index'])->name('cartAdd.index');

//カートを見る
Route::get('cartAdd/show', [CartController::class,'show'])->name('cartAdd.show');

//住所入力
Route::post('cartAdd/address', [CartController::class,'address'])->name('cartAdd.address');
Route::get('cartAdd/address', [CartController::class,'address'])->name('cartAdd.address');

//確認画面
Route::post('cartAdd/confirm', [CartController::class,'confirm'])->name('cartAdd.confirm');

//注文確定
//Route::get('cartAdd/order', [CartController::class,'order'])->name('cartAdd.order');

//サンクスメール
Route::post('cartAdd/order', [MailController::class,'orderMail'])->name('cartAdd.order');

//カート１商品づつ削除
Route::post('cartAdd/destroy{id}', [CartController::class, 'destroy'])->name('cartAdd.destroy');
Route::get('cartAdd/destroy{id}', [CartController::class, 'destroy'])->name('cartAdd.destroy');

//カート全商品削除
Route::get('cartAdd/allclear', [CartController::class, 'allclear'])->name('cartAdd.allclear');

Route::post('cartAdd/delete', [CartController::class, 'delete'])->name('cartAdd.delete');
Route::get('cartAdd/delete', [CartController::class, 'delete'])->name('cartAdd.delete');

Route::post('user/upload', [UserUploadController::class,'upload']);//UserUploadController
Route::post('user/delete', [UserUploadController::class,'fileDestroy']);

//特定商取引法に基づく表記
Route::get('tokutei', [TopController::class, 'tokutei'])->name('law.tokutei');
//プライバシーポリシー
Route::get('privacy', [TopController::class, 'privacy'])->name('law.privacy');

//お問い合わせ入力フォーム
Route::get('/contact', [ContactController::class,'index'])->name('contact.index');
//確認ページ
Route::post('/contact/confirm', [ContactController::class,'confirm'])->name('contact.confirm');
//送信完了ページ
Route::post('/contact/thanks', [ContactController::class,'send'])->name('contact.send');
