<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class() extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('skus', function (Blueprint $table) {
            $table->string('image_color_name')->nullable()->after('color_display_name')->comment('色名英語で');
            $table->string('image_name')->nullable()->after('image_color_name')->comment('画像ファイル名');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('skus', function (Blueprint $table) {
            $table->dropColumn('image_color_name');
            $table->dropColumn('image_name');
        });
    }
};
