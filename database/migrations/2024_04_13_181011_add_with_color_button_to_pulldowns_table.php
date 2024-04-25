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
        Schema::table('pulldowns', function (Blueprint $table) {
            $table->string('with_color_button')->after('sequence')->nullable()->comment('色選択ボタンの有無');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('pulldowns', function (Blueprint $table) {
            $table->dropColumn('with_color_button');  //カラムの削除
        });
    }
};
