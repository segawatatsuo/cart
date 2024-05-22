@include('parts.product.header')

<main>
    <div id="product-wrapper" class="product-wrapper mfp-with-anim">
        <div class="container">
            <!--ヘッダー-->
            <div class="row">
                <div class="product__top">
                    <h2 class="section-header__title">
                        <span class="section-ttl">{{ $item->brand . ' ' . $item->number . ' ' . $item->name }}</span>
                    </h2>

                    <ol class="breadcrumbs" itemscope itemtype="https://schema.org/BreadcrumbList">

                        <li class="breadcrumbs__item" itemprop="itemListElement" itemscope
                            itemtype="https://schema.org/ListItem">
                            <meta itemprop="position" content="2" />
                            <a class="breadcrumbs__link" itemscope itemtype="https://schema.org/WebPage" itemprop="item"
                                itemid="/mockups" href="{{ asset('/') }}">
                                <span itemprop="name">HOME</span>
                            </a>
                            <svg width="16" height="16">
                                <use xlink:href="#arrow-breadcrumb"></use>
                            </svg>
                        </li>

                        @for ($i = 0; $i < count($category_name); $i++)
                            @if ($i == count($category_name))
                                <li class="breadcrumbs__item" itemprop="itemListElement" itemscope
                                    itemtype="https://schema.org/ListItem">
                                    <meta itemprop="position" content="5" />
                                    <span itemprop="name">
                                        @foreach ($category_name[$i] as $key => $val)
                                            {{ $key }}
                                        @endforeach
                                    </span>
                                </li>
                            @else
                                <li class="breadcrumbs__item" itemprop="itemListElement" itemscope
                                    itemtype="https://schema.org/ListItem">
                                    <meta itemprop="position" content="3" />
                                    @foreach ($category_name[$i] as $key => $val)
                                        <a class="breadcrumbs__link" itemscope itemtype="https://schema.org/WebPage"
                                            itemprop="item" itemid="/mockups/category/apparel-mockups"
                                            href="{{ asset('list?category=' . $val) }}">
                                            <span itemprop="name">
                                                {{ $key }}
                                            </span>
                                        </a>
                                    @endforeach
                                    <svg width="16" height="16">
                                        <use xlink:href="#arrow-breadcrumb"></use>
                                    </svg>
                                </li>
                            @endif
                        @endfor
                    </ol>
                </div>
            </div>
            <!--ヘッダー-->


            <div class="row">
                <!--左2/3-->
                <div class="col-md-8">
                    <div id="product-media" class="product__media">
                        <div class="swiper product__slider">

                            <div class="swiper__wrapper">
                                @foreach ($images as $image)
                                    <div class="swiper__slide">
                                        <img src="{{ asset('/storage/image/detail') }}/{{ $thumbnail_folder }}/{{ $image->image_name }}"
                                            alt="" title="" width="466" height="580">
                                    </div>
                                @endforeach
                            </div>

                            <div class="swiper__button swiper__button_prev"><svg width="18" height="18">
                                    <use xlink:href="#arrow-slider-prev"></use>
                                </svg></div>
                            <div class="swiper__button swiper__button_next"><svg width="18" height="18">
                                    <use xlink:href="#arrow-slider-next"></use>
                                </svg></div>
                        </div>

                        <div class="swiper__pagination"></div>
                        <div class="swiper product__thumbs">
                            <div class="swiper__wrapper">

                                @foreach ($images as $image)
                                    <div class="swiper__slide">
                                        <img src="{{ asset('/storage/image/detail') }}/{{ $thumbnail_folder }}/{{ $image->image_name }}"
                                            alt="" title="" width="100" height="124">
                                    </div>
                                @endforeach

                            </div>
                        </div>
                    </div>

                    <!--左２段目説明-->

                    <div class="product__description">
                        <h3 class="h4">{{ $item->head_copy }}</h4>
                            <h5>{{ $item->brand }} {{ $item->number }}</h5>
                            <div class="product__description-content clearfix">
                                <p style="padding-bottom: 20px">{!! $item->description !!}</p>
                            </div>
                    </div>
                </div>



                <!--1/3-->
                <div class="col-md-4">
                    <div class="product__section product__info">
                        <div class="product__info-box">
                            <div class="product__info-content">
                                <div class="product__card">



                                    <form action="{{ asset('/cartAdd/index') }}" method="post" id="form1">
                                        @csrf
                                        <input type="hidden" name="id" value="{{ $item->id }}" form="form1">
                                        <!-- if is err -->
                                        <div></div>
                                        <!-- if is err-->

                                        <!-- アイテムカラー -->
                                        <div class="product__files">
                                            <div class="h4">アイテムカラー</div>
                                            <div class="d-flex">
                                                <button id="1" type="button"
                                                    class="btn btn-primary part btn-send" data-bs-toggle="modal"
                                                    data-bs-target="#UnifColorModal" style="margin-right: 4px;">
                                                    色見本を開く
                                                </button>
                                                <input type="text" value="{{ old('アイテムカラー') }}"
                                                    class="radi select2 textbox-grow" id="selected_image1"
                                                    name="アイテムカラー" style="border: 1px solid #e2e5e9;" form="form1">
                                            </div>
                                        </div>
                                        <!-- アイテムカラー -->







                                        <!-- プリントを追加 -->
                                        <div class="product__files">

                                            <div class="d-flex">
                                                <button id="1" type="button"
                                                    class="btn btn-warning part btn-send w-100" data-bs-toggle="modal" data-bs-target="#AddPrintModal" style="margin-right: 4px;" form="form1">
                                                    プリントを追加
                                                </button>
                                            </div>
                                        </div>


                                        <button type="submit" class="btn tsuika" id="1"
                                            data-id='左胸' data-bs-dismiss="modal">
                                        aaaaaa
                                        </button>


                                        <!-- テンプレートが表示される場所 -->
                                        <section id="js-content"></section>



                                        <!-- サイズ -->
                                        <table width="300" class="table" id="size">
                                            <tbody>
                                                <tr>
                                                    <td>サイズ</td>
                                                    <td>ご注文枚数</td>
                                                    <td>単価</td>
                                                </tr>

                                                @foreach ($sizes as $size)
                                                    <tr>
                                                        <td width="100">{{ $size['size'] }}</td>
                                                        <td><input type="number" value="" min="0"
                                                                class="radi-s textBox" max="100" step="1"
                                                                data-price="{{ $size['price'] }}"
                                                                data-size="{{ $size['size'] }}"
                                                                name="サイズ[{{ $size['size'] }}]"
                                                                style="width:50%;display:inline-block;border: 1px solid #e2e5e9;"
                                                                form="form1">
                                                        </td>
                                                        <td>{{ number_format($size['price']) }}円</td>
                                                        <input type="hidden" name="price[{{ $size['size'] }}]"
                                                            value="{{ $size['price'] }}" form="form1">
                                                    </tr>
                                                @endforeach
                                            </tbody>
                                        </table>
                                        <!-- サイズ -->



                                        <div class="product__files">
                                            <div class="h4">選択されたアイテムカラー番号</div>
                                            <div class="d-flex">
                                                <input type="text" class="inputbox select2 textbox-grow"
                                                    id="sku" name="sku" value="{{ old('sku') }}"
                                                    readonly style="border: 1px solid #e2e5e9;" form="form1">
                                            </div>
                                        </div>

                                        <!--オプション代-->
                                        <div class="product__files">
                                            <div class="h4">オプション単価</div>
                                            <div class="d-flex">

                                                <input id="option_price" type="text"
                                                    class="inputbox select2 textbox-grow" name="オプション単価"
                                                    value="" readonly style="border: 1px solid #e2e5e9;"
                                                    form="form1">
                                            </div>
                                        </div>


                                        <!--数量-->
                                        <div class="product__files">
                                            <div class="h4">数量</div>
                                            <div class="d-flex">
                                                <input id="quantity" type="text"
                                                    class="inputbox select2 textbox-grow" name="数量"
                                                    value="" readonly style="border: 1px solid #e2e5e9;"
                                                    form="form1">
                                            </div>
                                        </div>


                                        <!--合計-->
                                        <div class="product__files">
                                            <div class="h4">合計</div>
                                            <div class="d-flex">
                                                <input id="item_price_total" type="text"
                                                    class="inputbox select2 textbox-grow" name="合計"
                                                    value="0円" readonly style="border: 1px solid #e2e5e9;"
                                                    form="form1">
                                            </div>
                                        </div>


                                        <!--要望-->

                                        <div class="product__files">
                                            <div class="h4">ご要望他</div>
                                            <div class="d-flex">
                                                <textarea id="customer_request" rows="5" cols="33" class="inputbox select2 textbox-grow" name="ご要望他"
                                                    value="" style="border: 1px solid #e2e5e9;" form="form1"></textarea>
                                            </div>
                                        </div>


                                        <div class="product__files d-flex justify-content-between">
                                            <button type="submit"
                                                class="pill pill_w100 pill_big pill_black product__actions-cart"
                                                form="form1">カートに入れる</button>
                                        </div>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <!--<div class="col-md-4">-->
        </div>


    </div>
    </div>


</main>



@include('parts.product.footer')
