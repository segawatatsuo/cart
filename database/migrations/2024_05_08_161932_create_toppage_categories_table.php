<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('toppage_categories', function (Blueprint $table) {
            $table->id();
            $table->string('japanese_name')->comment('和名');
            $table->string('english_name')->comment('英名');
            $table->integer('category_no')->comment('カテゴリー番号');
            $table->string('image_main')->comment('メイン画像');
            $table->string('image_sub1')->comment('サブ画像1');
            $table->string('image_sub2')->comment('サブ画像2');
            $table->string('image_sub3')->comment('サブ画像3');
            $table->integer('sort_order')->comment('表示順');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('toppage_categories');
    }
};
