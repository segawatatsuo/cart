<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('items', function (Blueprint $table) {
            $table->id();
            $table->string('display')->nullable()->comment('表示非表示');
            $table->string('number')->nullable()->comment('商品番号');
            $table->string('name')->nullable()->comment('商品名');
            $table->string('head_copy')->nullable()->comment('商品コピー');
            $table->text('description')->nullable()->comment('商品説明文');
            $table->string('recommend')->nullable()->comment('おすすめ');
            $table->string('maker')->nullable()->comment('メーカー');
            $table->string('purchase')->nullable()->comment('仕入れ先');
            $table->string('color_group')->nullable()->comment('カラーグループ');
            $table->string('font_group')->nullable()->comment('フォントグループ');
            $table->text('category')->nullable()->comment('カテゴリJSON');
            $table->text('pulldown_rightside')->nullable()->comment('プルダウンJSON');
            $table->text('pulldown_leftside')->nullable()->comment('プルダウンJSON');
            $table->timestamps();
            /*
            $table->string('size')->nullable()->comment('サイズ');
            $table->string('color')->nullable()->comment('色');
            $table->integer('price')->nullable()->comment('販売価格');
            $table->integer('price_in_tax')->nullable()->comment('税込販売価格');
            $table->integer('maker_price')->nullable()->comment('メーカー希望小売価格');
            $table->integer('purchase_price')->nullable()->comment('仕入れ価格');
            $table->integer('purchase_price_in_tax')->nullable()->comment('税込仕入れ価格');
            */
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('items');
    }
}
