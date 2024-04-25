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
        Schema::table('skus', function (Blueprint $table) {
            $table->string('size_code')->after('size')->nullable()->comment('メーカーのサイズコード');
            $table->string('thumbnail_folder')->after('image_color_name')->nullable()->comment('画像のフォルダ名');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('skus', function (Blueprint $table) {
            $table->dropColumn('size_code');
            $table->dropColumn('thumbnail_folder');
        });
    }
};
