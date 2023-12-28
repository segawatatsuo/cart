<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i = 1 ; $i <= 25 ; $i++) {

            $product = new \App\Models\Product();
            $product->name = $i .'番目の商品名';
            $ary = array("500", "1000", "1500", "2000");
            $r = array_rand($ary);
            $product->amount = $ary[$r];

            $hoge= array(
                ['M'],
                ['M', 'L'],
                ['S', 'M', 'L']
            );
            $h = array_rand($hoge);
            $product->sizes =($hoge[$h]);
            $product->save();

        }
    }
}