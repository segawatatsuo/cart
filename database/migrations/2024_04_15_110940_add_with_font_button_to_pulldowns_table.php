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
        Schema::table('pulldowns', function (Blueprint $table) {
            $table->string('with_font_button')->after('with_color_button')->nullable()->comment('書体選択ボタン');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('pulldowns', function (Blueprint $table) {
            $table->dropColumn('with_font_button');  //カラムの削除
        });
    }
};
