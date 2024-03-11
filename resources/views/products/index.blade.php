@include('parts.header')

<div id="content" class="content-area page home"><!-- margin-top: 222px  -->

    <div class="container">
        <div class="row">
            <div class="product__top">

                <h1 class="h1">{{ $item->number . ' ' . $item->maker . ' ' . $item->name }}</h1>

                <ol class="breadcrumbs" itemscope="" itemtype="https://schema.org/BreadcrumbList">
                    <li class="breadcrumbs__item" itemprop="itemListElement" itemscope=""
                        itemtype="https://schema.org/ListItem">
                        <a class="breadcrumbs__link" itemprop="item" href="https://uniformlab.jp/">
                            <svg class="breadcrumbs__logo" width="16" height="16">
                                <use xlink:href="#logo"></use>
                            </svg>
                            <meta itemprop="name" content="">
                        </a>
                        <meta itemprop="position" content="1">
                        <svg width="16" height="16">
                            <use xlink:href="#arrow-breadcrumb"></use>
                        </svg>
                    </li>

                    <li class="breadcrumbs__item" itemprop="itemListElement" itemscope=""
                        itemtype="https://schema.org/ListItem">
                        <a class="breadcrumbs__link" itemscope="" itemtype="https://schema.org/WebPage"
                            itemprop="item" itemid="/all/objects" href="https://uniformlab.jp/all/objects">
                            <span itemprop="name">uniform lab</span>
                        </a>
                        <meta itemprop="position" content="2">
                        <svg width="16" height="16">
                            <use xlink:href="#arrow-breadcrumb"></use>
                        </svg>
                    </li>

                    <li class="breadcrumbs__item" itemprop="itemListElement" itemscope=""
                        itemtype="https://schema.org/ListItem">
                        <a class="breadcrumbs__link" itemscope="" itemtype="https://schema.org/WebPage"
                            itemprop="item" itemid="/all/objects/" href="https://uniformlab.jp/">
                            <span itemprop="name">Apparel</span>
                        </a>
                        <meta itemprop="position" content="3">
                        <svg width="16" height="16">
                            <use xlink:href="#arrow-breadcrumb"></use>
                        </svg>
                    </li>

                    <li class="breadcrumbs__item" itemprop="itemListElement" itemscope=""
                        itemtype="https://schema.org/ListItem">
                        <a class="breadcrumbs__link" itemscope="" itemtype="https://schema.org/WebPage"
                            itemprop="item" itemid="" href="https://uniformlab.jp/">
                            <span itemprop="name">ユニフォームラボ</span>
                        </a>
                        <meta itemprop="position" content="4">
                        <svg width="16" height="16">
                            <use xlink:href="#arrow-breadcrumb"></use>
                        </svg>
                    </li>

                    <li class="breadcrumbs__item" itemprop="itemListElement" itemscope=""
                        itemtype="https://schema.org/ListItem">
                        <span itemprop="name">ユニフォームラボ</span>
                        <meta itemprop="position" content="5">
                    </li>
                </ol>
            </div><!--end of <div class="product__top">-->
        </div><!--end of div class-->
    </div>

    <div class="product__section product__main">

        <div class="row">
            <!-- 左側外枠-->
            <div class="col-md-8 col-12" style="padding-right: 40px;">
                <!-- 左側内側1-->
                <div class="col" style="padding: 0;">

                    <div id="slider" class="swiper-container product__slider">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide"><img
                                    src="{{ asset('images/top-images/wundou_p175_web/p175_00.png') }}" alt=""
                                    width="466" height="580" itemprop="image"></div>
                            <div class="swiper-slide"><img
                                    src="{{ asset('images/top-images/wundou_p175_web/p175_01.png') }}" alt=""
                                    width="466" height="580" itemprop="image"></div>
                            <div class="swiper-slide"><img
                                    src="{{ asset('images/top-images/wundou_p175_web/p175_03.png') }}" alt=""
                                    width="466" height="580" itemprop="image"></div>
                            <div class="swiper-slide"><img
                                    src="{{ asset('images/top-images/wundou_p175_web/p175_11.png') }}" alt=""
                                    width="466" height="580" itemprop="image"></div>
                            <div class="swiper-slide"><img
                                    src="{{ asset('images/top-images/wundou_p175_web/p175_34.png') }}" alt=""
                                    width="466" height="580" itemprop="image"></div>
                        </div>

                        <div class="swiper-pagination"></div><!-- ページネーションを表示する場合 -->
                        <div class="swiper-button-prev"></div><!-- 前後の矢印 -->
                        <div class="swiper-button-next"></div><!-- 前後の矢印 -->
                        <div class="swiper-blind-left"></div>
                        <div class="swiper-blind-right"></div>

                    </div>

                    <div id="thumbs" class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide"><img
                                    src="{{ asset('images/top-images/wundou_p175_web/p175_00.png') }}" alt="">
                            </div>
                            <div class="swiper-slide"><img
                                    src="{{ asset('images/top-images/wundou_p175_web/p175_01.png') }}" alt="">
                            </div>
                            <div class="swiper-slide"><img
                                    src="{{ asset('images/top-images/wundou_p175_web/p175_03.png') }}" alt="">
                            </div>
                            <div class="swiper-slide"><img
                                    src="{{ asset('images/top-images/wundou_p175_web/p175_11.png') }}" alt="">
                            </div>
                            <div class="swiper-slide"><img
                                    src="{{ asset('images/top-images/wundou_p175_web/p175_34.png') }}"
                                    alt="">
                            </div>
                        </div>
                    </div>
                </div>


                <!-- 左側内側2-->
                <div class="col" style="padding: 0 0 40px 0;">
                    <div class="product__description">
                        <h3 class="h2"></h3>

                        <div class="product__description-content clearfix">
                            <p><strong>{{ $item->head_copy }}</strong><br>
                                {{ $item->description }}
                                ( <span
                                    id="itemNo">{{ $item->number }}</span>{{ ' ' . $item->maker . ' ' . $item->name }}
                                )
                            </p>

                        </div>
                    </div>
                </div>


                <div class="d-none d-md-block">
                    <!-- 左側内側3 おすすめ-->
                    <br>
                    <div class="col" style="padding:0;">
                        <div class="product__description">
                            <h3 class="h2">おすすめアイテム</h3>
                        </div>

                        <div class="row">
                            <div class="col-3 col-md-3 col-sm-6">
                                <img class="img-fluid"" src="{{ asset('images/recommends/p950.jpg') }}"
                                    alt="">
                                <div class="card__title-wrap">
                                    <div class="card__title">p950 アウトドアデオドラントロングスリーブシャツ</div>
                                    <div class="card__type"></div>
                                </div>
                            </div>

                            <div class="col-3 col-md-3 col-sm-6">
                                <img class="img-fluid" src="{{ asset('images/recommends/p4610.jpg') }}"
                                    alt="">
                                <div class="card__title-wrap">
                                    <div class="card__title">p4610 アウトドアウインドブレーカージャケット</div>
                                    <div class="card__type"></div>
                                </div>
                            </div>

                            <div class="col-3 col-md-3 col-sm-6">
                                <img class="img-fluid" src="{{ asset('images/recommends/p3510.jpg') }}"
                                    alt="">
                                <div class="card__title-wrap">
                                    <div class="card__title">p3510 ラグビーシャツ</div>
                                    <div class="card__type"></div>
                                </div>
                            </div>
                            <div class="col-3 col-md-3 col-sm-6">
                                <img class="img-fluid" src="{{ asset('images/recommends/p1610.jpg') }}"
                                    alt="">
                                <div class="card__title-wrap">
                                    <div class="card__title">p1610 バレーボールシャツ</div>
                                    <div class="card__type"></div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-3 col-md-3 col-sm-6">
                                <img class="img-fluid" src="{{ asset('images/recommends/p1810.jpg') }}"
                                    alt="">
                                <div class="card__title-wrap">
                                    <div class="card__title">p1810 ベーシックバスケットシャツ</div>
                                    <div class="card__type"></div>
                                </div>
                            </div>
                            <div class="col-3 col-md-3 col-sm-6">
                                <img class="img-fluid" src="{{ asset('images/recommends/p1930.jpg') }}"
                                    alt="">
                                <div class="card__title-wrap">
                                    <div class="card__title">p1930 ベーシックロングスリーブサッカーシャツ</div>
                                    <div class="card__type"></div>
                                </div>
                            </div>
                            <div class="col-3 col-md-3 col-sm-6">
                                <img class="img-fluid" src="{{ asset('images/recommends/p1910.jpg') }}"
                                    alt="">
                                <div class="card__title-wrap">
                                    <div class="card__title">p1910 ベーシックサッカーシャツ</div>
                                    <div class="card__type"></div>
                                </div>
                            </div>
                            <div class="col-3 col-md-3 col-sm-6">
                                <img class="img-fluid" src="{{ asset('images/recommends/p1940.jpg') }}"
                                    alt="">
                                <div class="card__title-wrap">
                                    <div class="card__title">p1940 サッカーゲームシャツ</div>
                                    <div class="card__type"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <!--右側-->
            <div class="col-md-4 col-12" style="padding: 0;">
                <div class="product__section product__info">
                    <div class="product__info-box">
                        <div class="product__info-content">

                            <div class="product__card">
                                <form action="{{ asset('cartAdd/index') }}" method="post">
                                    @csrf
                                    <input type="hidden" name="id" value="{{ $item->id }}">
                                    <!-- if is err -->
                                    <div>
                                        @if ($errors->any())
                                            <div class="alert alert-danger">
                                                <ul>
                                                    @foreach ($errors->all() as $error)
                                                        <li>{{ $error }}</li>
                                                    @endforeach
                                                </ul>
                                            </div>
                                        @endif
                                    </div>
                                    <!-- if is err-->

                                    <!-- アイテムカラー -->
                                    <div class="product__files">
                                        <div class="h4">アイテムカラー</div>
                                        <div class="d-flex justify-content-between">
                                            <input type="text" value="{{ old('アイテムカラー') }}" class="select2" id="selected_image1"
                                                name="アイテムカラー" style="margin-right: 4px;">
                                                
                                            <button id="1" type="button" class="btn btn-primary part"
                                                data-bs-toggle="modal" data-bs-target="#UnifColorModal">
                                                色見本を開く
                                            </button>
                                        </div>
                                    </div>

                                    <div class="product__files">
                                        <div class="h4">マーキング左片胸</div>
                                        <select class="option_select" name="マーキング左片胸">
                                            <option data-price="0" selected>なし</option>
                                            <option data-price="550">1色 (15cm×15cm以内)¥550</option>
                                            <option data-price="1100">フルカラー(15cm×15cm以内)¥1100</option>
                                        </select>
                                    </div>

                                    <!-- 左片胸色名 -->
                                    <div class="product__files">
                                        <div class="h4">左片胸色名</div>
                                        <div class="d-flex justify-content-between">
                                            <input type="text" value="{{ old('左片胸色名') }}" data-price="0" id="selected_image2"
                                                class="select2" name="左片胸色名" style="margin-right: 4px;">

                                            <button id="2" type="button" class="btn btn-primary part"
                                                data-bs-toggle="modal" data-bs-target="#ColorSelectModal">
                                                色見本を開く
                                            </button>
                                        </div>
                                    </div>
                                    <div class="product__files">
                                        <div class="h4">左片胸に入れる文字</div>
                                        <input type="text" class="select2" name="左片胸に入れる文字" value="{{ old('左片胸に入れる文字') }}">
                                    </div>

                                    <!-- マーキング右片胸 -->
                                    <div class="product__files">
                                        <div class="h4">マーキング右片胸</div>
                                        <select class="option_select" name="マーキング右片胸">
                                            <option data-price="0" selected>なし</option>
                                            <option data-price="550">1色(15cm×15cm以内)¥550</option>
                                            <option data-price="1100">フルカラー(15cm×15cm以内)¥1100</option>
                                        </select>
                                    </div>
                                    <div class="product__files">
                                        <div class="h4">右片胸色名</div>
                                        <div class="d-flex justify-content-between">
                                            <input type="text" id="selected_image3" class="select2"
                                                name="右片胸色名" value="{{ old('右片胸色名') }}" style="margin-right: 4px;">

                                            <button id="3" type="button" class="btn btn-primary part"
                                                data-bs-toggle="modal" data-bs-target="#ColorSelectModal">
                                                色見本を開く
                                            </button>
                                        </div>
                                    </div>
                                    <div class="product__files">
                                        <div class="h4">右片胸に入れる文字</div>
                                        <input type="text" class="select2" name="右片胸に入れる文字" value="{{ old('右片胸に入れる文字') }}">
                                    </div>

                                    <!-- マーキング胸中央 -->
                                    <div class="product__files">
                                        <div class="h4">マーキング胸中央</div>
                                        <select class="option_select" name="マーキング胸中央">
                                            <option data-price="0" selected>なし
                                            </option>
                                            <option data-price="550">1色(15cm×15cm以内)¥550</option>
                                            <option data-price="880">1色(15cm×35cm以内)¥880</option>
                                            <option data-price="1100">フルカラー(15cm×15cm以内)¥1100</option>
                                            <option data-price="1650">フルカラー(15cm×35cm以内)¥1650</option>
                                        </select>
                                    </div>

                                    <!-- サイズ -->
                                    <table width="300" class="table" id="size">
                                        <tbody>
                                            <tr>
                                                <td>サイズ</td>
                                                <td>ご注文枚数</td>
                                                <td>単価</td>
                                            </tr>
                                            @foreach ($sizes as $data)
                                                <tr>
                                                    <td width="100">{{ $data->size }}</td>
                                                    <td><input type="number" value="" min="0"
                                                            class="textBox" max="100" step="1"
                                                            data-price="{{ $data->price }}"
                                                            data-size="{{ $data->size }}"
                                                            name="サイズ[{{ $data->size }}]"
                                                            style="width:50%;display:inline-block;">
                                                    </td>
                                                    <td>{{ number_format($data->price) }}円</td>
                                                    <input type="hidden" name="price[{{ $data->size }}]"
                                                        value="{{ $data->price }}">
                                                </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                    <!-- サイズ -->


                                    <h2 class="h2 d-flex justify-content-between">
                                        <span>SKU</span>
                                        <input id="sku" class="" name="SKU" value="" readonly>
                                    </h2>


                                    <!--オプション代-->
                                    <h2 class="h2 d-flex justify-content-between">
                                        <span>オプション単価</span>
                                        <input id="option_price" class="" name="オプション単価" value="0円"
                                            readonly>
                                    </h2>

                                    <h2 class="h2 d-flex justify-content-between">
                                        <span>数量</span>
                                        <input id="quantity" class="" name="数量" value="" readonly>
                                    </h2>

                                    <h2 class="h2 d-flex justify-content-between">
                                        <span>合計</span>
                                        <input id="item_price_total" class="" name="合計" value="0円"
                                            readonly>
                                    </h2>

                                    <div class="product__actions">
                                        <button type="submit"
                                            class="pill pill_w100 pill_big pill_black product__actions-cart">送信</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div><!--<div id="content" class="content-area page home">-->


@include('parts.footer')





<!--色モーダル-->
<div class="modal fade" id="ColorSelectModal" tabindex="-1" aria-hidden="true" style="z-index: 2147483647;">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">色見本</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="閉じる"></button>
            </div>

            <div class="modal-body">
                <form>
                    <div class="container">
                        <div class="row">
                            <div class="col-6 col-sm-4 col-md-3 col-lg-3">
                                <div class="card " style="border: 0; padding:0">
                                    <button type="submit" class="btn select" id="1" data-id='mk10'
                                        data-bs-dismiss="modal">
                                        <img class="card-img-top" src="{{ asset('images/colors/mk10.jpg') }}"
                                            alt="">
                                        <div>mk10</div>
                                    </button>
                                </div>
                            </div>

                            <div class="col-6 col-sm-4 col-md-3 col-lg-3">
                                <div class="card " style="border: 0; padding:0">
                                    <button type="submit" class="btn select" id="1" data-id='me41'
                                        data-bs-dismiss="modal">
                                        <img class="card-img-top" src="{{ asset('images/colors/me41.jpg') }}"
                                            alt="">
                                        <div>me41</div>
                                    </button>
                                </div>
                            </div>

                            <div class="col-6 col-sm-4 col-md-3 col-lg-3">
                                <div class="card " style="border: 0; padding:0">
                                    <button type="submit" class="btn select" id="1" data-id='mj03'
                                        data-bs-dismiss="modal">
                                        <img class="card-img-top" src="{{ asset('images/colors/mj03.jpg') }}"
                                            alt="">
                                        <div>mj03</div>
                                    </button>
                                </div>
                            </div>

                            <div class="col-6 col-sm-4 col-md-3 col-lg-3">
                                <div class="card " style="border: 0; padding:0">
                                    <button type="submit" class="btn select" id="1" data-id='me55'
                                        data-bs-dismiss="modal">
                                        <img class="card-img-top" src="{{ asset('images/colors/me55.jpg') }}"
                                            alt="">
                                        <div>me55</div>
                                    </button>
                                </div>
                            </div>
                        </div>



                        <div class="row">
                            <div class="col-6 col-sm-4 col-md-3 col-lg-3">
                                <div class="card " style="border: 0; padding:0">
                                    <button type="submit" class="btn select" id="1" data-id='mj09'
                                        data-bs-dismiss="modal">
                                        <img class="card-img-top" src="{{ asset('images/colors/mj09.jpg') }}"
                                            alt="">
                                        <div>mj09</div>
                                    </button>
                                </div>
                            </div>

                            <div class="col-6 col-sm-4 col-md-3 col-lg-3">
                                <div class="card " style="border: 0; padding:0">
                                    <button type="submit" class="btn select" id="1" data-id='mj48'
                                        data-bs-dismiss="modal">
                                        <img class="card-img-top" src="{{ asset('images/colors/mj48.jpg') }}"
                                            alt="">
                                        <div>mj48</div>
                                    </button>
                                </div>
                            </div>

                            <div class="col-6 col-sm-4 col-md-3 col-lg-3">
                                <div class="card " style="border: 0; padding:0">
                                    <button type="submit" class="btn select" id="1" data-id='mk18'
                                        data-bs-dismiss="modal">
                                        <img class="card-img-top" src="{{ asset('images/colors/mk18.jpg') }}"
                                            alt="">
                                        <div>mk18</div>
                                    </button>
                                </div>
                            </div>

                            <div class="col-6 col-sm-4 col-md-3 col-lg-3">
                                <div class="card " style="border: 0; padding:0">
                                    <button type="submit" class="btn select" id="1" data-id='mk33'
                                        data-bs-dismiss="modal">
                                        <img class="card-img-top" src="{{ asset('images/colors/mk33.jpg') }}"
                                            alt="">
                                        <div>mk33</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">閉じる</button>
            </div>
        </div>
    </div>
</div>
<!--色モーダル-->




<!--ユニフォームカラーモーダル-->
<div class="modal fade" id="UnifColorModal" tabindex="-1" aria-hidden="true" style="z-index: 2147483647;">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">アイテムカラー</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal">✖️</button>
            </div>

            <div class="modal-body">
                <form>
                    <div class="row">
                        @foreach ($colors as $color)
                            <div class="col-6 col-sm-4 col-md-3 col-lg-3">
                                <div class="card" style="border: 0; padding:0">
                                    <button type="submit" class="btn select" id="1"
                                        data-id = '{{ $color->color_display_name }}' data-bs-dismiss="modal"
                                        data-sku = '{{ pathinfo($color->image_name, PATHINFO_FILENAME) }}'>
                                        <img class="card-img-top"
                                            src="{{ asset('storage/image/detail/p175/' . $color->image_name) }}"
                                            alt="">
                                        <div>{{ $color->color_display_name }}</div>
                                    </button>
                                </div>
                            </div>
                        @endforeach
                    </div>
            </div>
            </form>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">閉じる</button>
            </div>
        </div>
    </div>
</div>
<!--ユニフォームカラーモーダル-->






<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="{{ asset('/css/swiper.min.css') }}">
<!--<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">-->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
<link href="{{ asset('/css/hoge.css') }}" rel="stylesheet">
<link rel="stylesheet" href="{{ asset('/css/swiper.min.css') }}">
<link rel="stylesheet" href="{{ asset('/css/for_swiper.css') }}">
<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.1/js/swiper.min.js"></script>

<!--Jquery-->
<script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4="
    crossorigin="anonymous"></script>

<!-- Bootstrap JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"></script>


<!--検索窓がはみ出す-->
<style>
    .tt-menu {
        padding: 0;
    }
</style>


<script>
    var slider = new Swiper('#slider', {
        slidesPerView: 3,
        autoplay: 5000,
        loop: true, // 最後のスライドまで到達した場合、最初に戻らずに続けてスライド可能にするか。
        loopedSlides: 6,
        centeredSlides: true,
        disableOnInteraction: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: '1.3',
        breakpoints: {
            600: {
                slidesPerView: 1
            }
        },
        spaceBetween: 20,
    })

    //連動したいサムネイルのスライダー
    var thumbs = new Swiper('#thumbs', {
        centeredSlides: true,
        spaceBetween: 10,
        loop: true,
        slidesPerView: "auto",
        touchRatio: 0.2,
        slideToClickedSlide: true
    });
    slider.params.control = thumbs;
    thumbs.params.control = slider;

    //クリックされた画像名を変数に入れて別枠に表示
    $(".swiper-button-next").click(function() {
        var currentActiveSlide = $('.swiper-slide-active img').attr('src');
        $('#main_image img').attr('src', currentActiveSlide);
    });

    $(".swiper-button-prev").click(function() {
        var currentActiveSlide = $('.swiper-slide-active img').attr('src');
        $('#main_image img').attr('src', currentActiveSlide);
    });

    //サムネイルの動きに対応させ、クリックされた時とマウスが動いた時の２種類を用意した
    $(".swiper-slide").click(function() {
        var currentActiveSlide = $('.swiper-slide-active img').attr('src');
        $('#main_image img').attr('src', currentActiveSlide);
    });
    $(".swiper-slide").mouseover(function() {
        var currentActiveSlide = $('.swiper-slide-active img').attr('src');
        $('#main_image img').attr('src', currentActiveSlide);
    });
</script>


<script>
    var parts_id;
    //パーツ選択のボタン
    $('.part').on('click', function() {
        parts_id = $(this).attr("id");
        //alert(parts_id);
    });
    //モーダル画面で画像ボタンのselectクラスを押したら
    $('.select').click(function() {
        
        var image_name = $(this).data('id'); //data-idを取得。画像名が入っている
        var id = $(this).attr("id") //id=*を取得。1か2か3か..(何番めのプルダウンかNo)
        
        var sku = $(this).data('sku'); //data-skuを取得。SKU番号が入っている
        $('#sku').val(sku);//SKUをテキストボックスに代入

        //代入先を動的に作成
        var img = {}; //
        img[parts_id] = "#selected_image" + parts_id; //代入先id名 #selected1 #selected2

        var idNo = {}; //
        idNo[parts_id] = "#selected_id" + parts_id; //代入先id名 #selected1 #selected2

        $(img[id]).text(image_name); //代入先 selected_image1
        $(img[parts_id]).val(image_name);
        $(idNo[id]).text(id); //代入先





    });
</script>

<!-- Json 使わなくなった-->
<script>
    $('#サイズ').click(function() {
        //alert($('#selected_image1').val());
        if ($('#selected_image1').text() == '') {
            alert('アイテムカラーを選択してください');
        } else {
            var itemNo = "";
            var color = "";
            itemNo = $('#itemNo').text();
            color = $('#selected_image1').text();

            $.ajax({
                url: './product/get_size?itemNo=' + itemNo + '&color=' + color,
                //url: './product/hoge?itemNo=p175&color=black',
                type: 'GET',
                dataType: "json",
            }).done(function(data) {
                // 取得成功
                //取得jsonデータ
                var data_stringify = JSON.stringify(
                    data
                ); //[{"size":"110"},{"size":"120"},{"size":"130"},{"size":"140"},{"size":"150"},{"size":"S"},{"size":"M"},{"size":"L"},{"size":"XL"},{"size":"XXL"}]
                var data_json = JSON.parse(data_stringify);

                //プルダウンがある場合全部削除しておかないと2重3重になる
                var formElement = document.getElementById('サイズ');
                while (formElement.lastChild) {
                    formElement.removeChild(formElement.lastChild);
                }

                for (var i = 0; i < data_json.length; i++) {
                    let opt = document.createElement("option");
                    opt.value = data_json[i]["size"]; //value値
                    opt.text = data_json[i]["size"]; //テキスト値
                    document.getElementById("サイズ").appendChild(opt);
                }

            }).fail(function(data) {
                // 取得失敗
                alert('データ取得出来ませんでした。');
            });
        }
    });
</script>


<!--金額の計算 -->
<script>
    //アイテム代
    var item_price = 0;
    var option_price = 0;
    var quantity = 0; //数量
    var item_price_total = 0; //小計＊数量
    //HTML読み込み時
    $(document).ready(function() {
        $("#item_price").val(item_price + "円");
        
        var sku = $(this).data('sku'); //data-skuを取得。SKU番号が入っている
        $('#sku').val(sku);//SKUをテキストボックスに代入
    });
    $(document).ready(function() {
        var num;
        num = item_price + option_price;
        num.toLocaleString(); //3桁区切りの文字列に変換
        $("#item_price_total").val(num + "円");
    });

    //オプション代
    $(function() {
        $("select").change(function() {
            var data_array = [];
            for (var i = 0; i < $(".option_select").length; i++) {
                var item_select = $(".option_select").eq(i).find("option:selected").data("price");
                data_array.push(item_select);
            }
            var total = 0;
            for (var j = 0; j < data_array.length; j++) {
                total += data_array[j];
            }
            $("#option_price").val(total + "円");

            var num;
            num = item_price + option_price;
            num.toLocaleString(); //3桁区切りの文字列に変換
            $("#item_price_total").val(num + "円");
            //$("#item_price_total").val(item_price + total + "円");
        });
    });
</script>


<!-- ユニフォームの枚数＊単価で総合計 -->
<script type="text/javascript">
    $(document).ready(function() {
        //$("#Button1").click(function() {
        $(".product__info-content").change(function() {
            //数量*単価の配列
            var inputText = $(".textBox").map(function(index, el) {
                //return $(this).val();
                return $(this).val() * $(this).data('price'); //数量*単価
            });
            //数量合計だけの配列
            var countSum = $(".textBox").map(function(index, el) {
                return $(this).val();
            });
            //ユニフォーム金額合計(枚数*単価)
            var sumTotal = 0;
            for (i = 0; i < inputText.length; i++) {
                sumTotal += Math.trunc(inputText[i]);
            }
            //枚数合計
            var totalQuantity = 0;
            for (i = 0; i < countSum.length; i++) {
                totalQuantity += Math.trunc(countSum[i]);
            }
            //オプション単価
            var optionUnitPrice = $('#option_price').val();
            optionUnitPrice = optionUnitPrice.replace('円', '');

            //枚数
            $("#quantity").val(totalQuantity);

            //総合計金額
            var totalAmount = 0;
            totalAmount = sumTotal + (totalQuantity * optionUnitPrice);
            Number(totalAmount).toLocaleString(); //3桁区切りの文字列に変換
            $("#item_price_total").val(totalAmount + "円");

            //$("#item_price_total").val(totalAmount + "円");
        })
    })
</script>

</body>

</html>
