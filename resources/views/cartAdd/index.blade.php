@include('parts.header')

<main>

    <div class="container py-3">
        <div class="section-header" style="padding-top: 0px;">


            <!-- BEGIN CONTENT -->
            <div class="col-md-12 col-sm-12">

                <h1 class="title">ショッピングカート</h1>

                @if (Cart::isEmpty())
                    <div class="box" style="border: 1px solid #e8e8e8;">
                        カート内に商品がありません
                        <div class="cart-content-buttons">
                            <button type="button"
                                class="button m-size-xl m-full cart-button moveShipping"
                                onclick="location.href='{{ route('welcome') }}'">お買い物を続ける</button>
                        </div>

                    </div>


                @else



                    <div class="box" style="border: 1px solid #e8e8e8;">
                        @foreach ($cartCollection as $cart)
                            <div class="cart-product">
                                <div class="row">
                                    <!--画像-->
                                    <div class="col-2">
                                        <img src="{{ asset('storage/image/detail') . '/' . $cart->attributes['number'] . '/' . $cart->attributes['sku'] }}"
                                            alt="">
                                    </div>


                                    <!--右側-->
                                    <div class="col-10">

                                        <div class="cart-product-row">
                                            <span class="sku-code">{{ $cart->attributes['item_no'] }}</span>
                                        </div>

                                        <div class="cart-product-row product-name">
                                            <a class="link" href="">{{ $cart->attributes['brand_name'] }}
                                                {{ $cart->attributes['item_name'] }}</a>
                                        </div>

                                        <div class="cart-product-row product-price unit-price">
                                            <span class="product-price_item">
                                                単価：
                                                ¥{{ number_format($cart->attributes['unit_price']) }}（税込）
                                            </span>
                                        </div>

                                        <div class="cart-product-row product-price unit-price">
                                            <span class="product-price_item">
                                                数量：
                                                {{ number_format($cart->attributes['quantity_total']) }}
                                            </span>
                                        </div>



                                        <div class="cart-product-row variation">

                                            <p>カラー：
                                                <span
                                                    class="variation_value">{{ $cart->attributes['item_color'] }}</span>
                                            </p>

                                            <p>{{ $cart->attributes['size_price_set'] }}</p>

                                            @if (is_countable($cart->attributes['print_position_array']) && count($cart->attributes['print_position_array']) > 0)
                                                @for ($i = 0; $i < count($cart->attributes['print_position_array']); $i++)
                                                    <div class="cart-divider"></div>
                                                    <p>プリント位置：{{ $cart->attributes['print_position_array'][$i] }}
                                                        ¥{{ number_format($cart->attributes['processing_costs_array'][$i]) }}
                                                    </p>

                                                    <p>フォント：{{ $cart->attributes['fonts_array'][$i] }}</p>

                                                    <p>フォント色：{{ $cart->attributes['fonts_color_array'][$i] }}</p>

                                                    <p>縁取りスタイル：{{ $cart->attributes['fonts_border_array'][$i] }}</p>

                                                    <p>縁取り色：{{ $cart->attributes['fonts_border_color_array'][$i] }}</p>

                                                    <p>文字：{{ $cart->attributes['fonts_text'][$i] }}</p>
                                                @endfor
                                            @endif
                                        </div>
                                    </div>



                                    <div class="box m-primary order-info">
                                        <div class="order-qty">
                                        </div>
                                        <div class="sub-total sub-total_price"><span class="spr868_yen"><span
                                                    class="spr868_yen">¥</span></span>{{ number_format($cart->attributes['total_purchase_amount']) }}
                                        </div>
                                    </div>


                                    <div class="cart-product-buttons">
                                        <form method="POST"
                                            action="{{ route('cartAdd.remove_item', ['id' => $cart->id]) }}">
                                            @csrf
                                            <input type="submit" class="button m-size-m deleteCommodity" value="削除"
                                                onclick='return confirm("この商品をカートから削除します。よろしいですか？")'>
                                        </form>
                                    </div>
                                </div><!--<div class="col-10">-->
                                <hr class="hr1">
                            </div><!--row-->
                        @endforeach
                    </div>



                    <div class="row" style="margin-top: 5px;">
                        <div class="section">
                            <div class="box m-primary total-amount-box">
                                <div class="total-amount-header">
                                    <div class="total-amount_title">合計数量</div>
                                    <div class="total-amount_qty">
                                        {{ number_format($cart->attributes['quantity_total']) }}
                                        点のお買い上げ
                                    </div>
                                </div>
                                <div class="box total-amount-price">
                                    <div class="total-amount-price_label">ご注文金額</div>
                                    <div class="total-amount-price_number"><span
                                            class="spr868_yen">¥</span>{{ number_format($cart->attributes['total_add_tax']) }}
                                    </div>
                                </div>
                                <div class="amount-table">
                                    <div class="cart-divider">
                                        <div class="amount-table-row">
                                            <div class="amount-table_label">商品合計金額(税抜)</div>
                                            <div class="amount-table_body">
                                                ¥{{ number_format($cart->attributes['total_product_amount']) }}
                                            </div>
                                        </div>
                                        <div class="amount-table-row">
                                            <div class="amount-table_label">消費税</div>
                                            <div class="amount-table_body">
                                                ¥{{ number_format($cart->attributes['tax']) }}
                                            </div>
                                        </div>
                                        <div class="amount-table-row">
                                            <div class="amount-table_label">送料</div>
                                            <div class="amount-table_body">
                                                ¥{{ number_format($cart->attributes['postage']) }}
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div class="cart-content-buttons">
                                <button type="button"
                                    class="button m-size-xl m-full m-warning-fill cart-button moveShipping"
                                    data-data1="cartForm_0"
                                    onclick="location.href='{{ route('cartAdd.address') }}'">注文へ進む</button>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="section">
                            <div class="cart-buttons">
                                <a class="button m-size-l clearCommodity" onclick="location.href='{{ route('cartAdd.allclear') }}'">カートからすべて削除する</a>
                            </div>
                            <div class="cart-buttons">

                                <a class="button m-size-l" onclick="cartBack()" name='back' value="back">
                                    <span>戻る</span>
                                </a>
                                {{-- 
                                <form method="post">
                                    @csrf
                                    <button type="submit" class="button m-size-l" name='back' value="back">修正する</button>
                                </form>
                                 --}}
                                <a class="button m-size-l" onclick="location.href='{{ route('welcome') }}'">お買い物を続ける</a>
                            </div>
                        </div>
                    </div>
            </div>
            @endif

        </div>
        <!-- END CONTENT -->
    </div>
    <!-- END SIDEBAR & CONTENT -->
    </div>


</main>

@include('parts.footer')
