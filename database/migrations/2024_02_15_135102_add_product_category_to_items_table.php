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
        Schema::table('items', function (Blueprint $table) {
            //$table->string('product_category')->after('name')->comment('商品分類');
            $table->string('font_group')->after('color_group')->comment('フォント');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('items', function (Blueprint $table) {
            //$table->dropColumn('product_category');
            $table->dropColumn('font_group');
        });
    }
};
