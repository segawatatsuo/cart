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
        Schema::create('laws', function (Blueprint $table) {
            $table->id();
            $table->string('distributor')->nullable()->comment('販売業者');
            $table->string('manager')->nullable()->comment('販売責任者');
            $table->string('location')->nullable()->comment('所在地');
            $table->string('trade_name')->nullable()->comment('屋号');
            $table->string('tel')->nullable()->comment('電話番号');
            $table->string('fax')->nullable()->comment('FAX番号');
            $table->string('email')->nullable()->comment('メールアドレス');
            $table->string('url')->nullable()->comment('URL');
            $table->text('shipping_method')->nullable()->comment('配送方法');

            $table->string('necessary_charges')->nullable()->comment('商品代金以外の必要料金');
            $table->string('expiration_date')->nullable()->comment('申込の有効期限');
            $table->string('defective_product')->nullable()->comment('不良品');
            $table->string('sales_quantity')->nullable()->comment('販売数量');
            $table->string('delivery_time')->nullable()->comment('引き渡し時期');
            
            $table->string('payment_method_name1')->nullable()->comment('お支払い方法1名称');
            $table->text('payment_method1')->nullable()->comment('お支払い方法1');

            $table->string('payment_method_name2')->nullable()->comment('お支払い方法2名称');
            $table->text('payment_method2')->nullable()->comment('お支払い方法2');

            $table->string('payment_method_name3')->nullable()->comment('お支払い方法3名称');
            $table->text('payment_method3')->nullable()->comment('お支払い方法3');

            $table->string('payment_method_name4')->nullable()->comment('お支払い方法4名称');
            $table->text('payment_method4')->nullable()->comment('お支払い方法4');

            $table->string('payment_method_name5')->nullable()->comment('お支払い方法5名称');
            $table->text('payment_method5')->nullable()->comment('お支払い方法5');

            $table->string('payment_method_name6')->nullable()->comment('お支払い方法6名称');
            $table->text('payment_method6')->nullable()->comment('お支払い方法6');

            $table->string('payment_method_name7')->nullable()->comment('お支払い方法7名称');
            $table->text('payment_method7')->nullable()->comment('お支払い方法7');

            $table->string('payment_method_name8')->nullable()->comment('お支払い方法8名称');
            $table->text('payment_method8')->nullable()->comment('お支払い方法8');

            $table->string('payment_method_name9')->nullable()->comment('お支払い方法9名称');
            $table->text('payment_method9')->nullable()->comment('お支払い方法9');

            $table->string('payment_method_name10')->nullable()->comment('お支払い方法10名称');
            $table->text('payment_method10')->nullable()->comment('お支払い方法10');


            $table->string('payment_deadline')->nullable()->comment('お支払い期限');


            $table->string('return_period')->nullable()->comment('返品期限');
            $table->string('return_shipping_fee')->nullable()->comment('返品送料');
            $table->text('privacy')->nullable()->comment('プライバシーポリシー');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('laws');
    }
};
