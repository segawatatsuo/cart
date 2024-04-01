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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('order_no')->comment('受注番号');
            $table->string('message')->comment('メッセージ');
            $table->string('firstname')->comment('姓');
            $table->string('lastname')->comment('名');
            $table->string('company_name')->comment('会社名');
            $table->string('email')->comment('メール');
            $table->string('phone_number')->comment('電話番号');
            $table->string('postal_code')->comment('郵便番号');
            $table->string('prefecture')->comment('都道府県');
            $table->string('city')->comment('市区町村');
            $table->string('street')->comment('番地');
            $table->string('birth')->comment('誕生日');
            $table->integer('subtotal')->nullable()->comment('小計');
            $table->integer('discount')->nullable()->comment('割引');
            $table->integer('delivery_fee_total')->nullable()->comment('配送料合計');
            $table->integer('tax')->comment('税金');
            $table->integer('total')->comment('注文合計');
            $table->integer('payment_total')->comment('支払い総額');
            $table->string('payment_method')->comment('支払い方法');
            $table->string('note')->nullable()->comment('注意書き');
            $table->dateTime('order_date')->comment('注文日時');
            $table->dateTime('payment_date')->nullable()->comment('支払い完了日時');

            $table->string('complete_message')->nullable()->comment('完了メッセージ');
            $table->string('complete_mail_message')->nullable()->comment('');
            $table->string('customer_id')->nullable()->comment('顧客番号');
            $table->string('sex_id')->nullable()->comment('性別');
            $table->string('add_point')->nullable()->comment('発生ポイント数');
            $table->string('use_point')->nullable()->comment('使用ポイント数');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
