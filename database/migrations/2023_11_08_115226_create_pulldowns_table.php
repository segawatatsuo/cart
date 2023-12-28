<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePulldownsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pulldowns', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable()->comment('プルダウン名');
            $table->string('inside_name')->nullable()->comment('社内用に内容がわかりやすい名前');
            $table->string('input_column1')->nullable()->comment('手入力欄名');
            $table->string('input_column2')->nullable()->comment('手入力欄名');
            $table->string('input_column3')->nullable()->comment('手入力欄名');
            $table->integer('sequence')->nullable()->comment('表示順');
            $table->string('attribution')->nullable()->comment('帰属先');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pulldowns');
    }
}
