<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap core CSS -->
    <!--<link href="./assets/dist/css/bootstrap.css" rel="stylesheet">-->
    <link href="{{ asset('/css/hoge.css') }}" rel="stylesheet">

    <link rel="stylesheet" href="{{ asset('/css/bootstrap.min.css') }} ">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="{{ asset('/css/swiper.min.css') }}">
    <title>Document</title>

    <style>
        html,
        body {
            margin: 0;
            padding: 0;
            width: 100%;
        }

        /*
        .container {
            position: relative;
            margin: 100px auto 60px auto;
            max-width: 1628px;
        }
        */
        .container {
            position: relative;
            margin: 0px auto 60px auto;
            max-width: 1628px;
        }


        .swiper-container {
            text-align: center;
            cursor: grab;
        }

        .swiper-container:active {
            cursor: grabbing;
        }

        .swiper-container .swiper-slide img {
            max-width: 100%;
            width: 100%;
            height: auto;
        }

        #thumbs {
            height: 10%;
            box-sizing: border-box;
            padding: 10px 0;

        }

        #thumbs .swiper-slide {
            width: 16%;
            height: auto;
            opacity: 0.3;
            cursor: grab;
        }

        #thumbs .swiper-slide:active {
            cursor: grabbing;
        }

        #thumbs .swiper-slide-active {
            opacity: 1;
        }


        .swiper-blind-left,
        .swiper-blind-right {
            position: absolute;
            width: 11.55%;
            height: 100%;
            display: block;
            top: 0;
            background: rgba(255, 255, 255, .7);
            z-index: 5;
        }

        .swiper-blind-left {
            left: 0;
        }

        .swiper-blind-right {
            right: 0;
        }

        @media (max-width: 600px) {

            .swiper-blind-left,
            .swiper-blind-right {
                display: none;
            }
        }

        .back {
            width: 100%;
            text-align: center;
            margin: 60px 0;
        }

        .back a {
            color: #2B59C3;
        }

        .back a:hover {
            color: #1CCAD8;
        }

        .swiper {
            display: block;
            list-style: none;
            margin: 0 auto;
            overflow: hidden;
            overflow: clip;
            overscroll-behavior: none;
            padding: 0;
            touch-action: pan-y;
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none
        }

        /*product__slider*/

        /*
        .product__slider {
            visibility: hidden
        }
        */

        .product__slider,
        .product__thumbs {
            width: 100%
        }

        .product__slider .swiper__slide,
        .product__thumbs .swiper__slide {
            border-radius: 16px;
            margin: 0 12px 0 0
        }

        .product__slider .swiper__slide:last-child,
        .product__thumbs .swiper__slide:last-child {
            margin-right: 0
        }

        .product__slider {
            border-radius: 16px;
            height: 580px;
            margin: 0 0 12px;
            overflow: hidden
        }

        .product__slider .swiper__slide img {
            height: 100%;
            width: auto
        }

        @media only screen and (max-width:1280px) {
            .product__slider {
                height: 454px
            }
        }

        @media only screen and (max-width:768px) {
            .product__slider {
                height: 406px
            }
        }

        @media only screen and (max-width:768px) {
            .product__slider {
                height: 406px
            }

            .product__slider .swiper__slide {
                margin: 0 8px 0 0
            }

            .product__thumbs {
                display: none
            }

            .product .swiper__pagination {
                display: flex
            }

            .product__media+.product__description {
                margin: 20px 0 0
            }

            .product__section {
                margin-bottom: 40px
            }

            .product .comments__form .pill,
            .product__related>.pill {
                height: 56px;
                padding: 0 25px
            }

        }

        @media only screen and (max-width:641px) {
            .product__card {
                padding: 24px 20px
            }

            .product .h1 {
                font-size: 28px;
                line-height: 1.3;
                margin-bottom: 2px
            }

            .product__top {
                margin: 0 0 10px
            }

            .product__slider {
                margin: 0 0 5px
            }
        }

        @media only screen and (max-width:480px) {

            .product__slider {
                height: auto
            }

            .product__slider .swiper__slide {
                margin: 0 10px 0 0;
                width: 100%
            }

            .product__slider .swiper__slide img {
                height: auto;
                width: 100%
            }

            .product__banner br {
                display: none
            }

            .product__banner-action {
                margin-top: 12px
            }

            .socials {
                left: auto;
                right: 20px
            }

            .socials__menu {
                left: auto;
                margin: 0 8px 0 0;
                right: 100%
            }

            .spinner__wrap .preloader-spinner {
                left: 20px;
                right: auto;
                top: 20px
            }

        }


        /*swiper__wrapper*/
        .swiper,
        .swiper__wrapper {
            position: relative;
            z-index: 1
        }

        .swiper__wrapper {
            display: flex;
            height: 100%;
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
            transition: -webkit-transform .2s ease;
            transition: transform .2s ease;
            transition: transform .2s ease, -webkit-transform .2s ease;
            width: 100%;
            will-change: transform
        }

        /*swiper__slide*/
        .swiper__slide {
            display: block;
            flex: 0 0 auto;
            height: 100%;
            overflow: hidden;
            position: relative;
            transition-property: -webkit-transform;
            transition-property: transform;
            transition-property: transform, -webkit-transform;
            width: auto
        }

        .swiper__slide-invisible-blank {
            visibility: hidden
        }

        .product__slider .swiper__slide,
        .product__thumbs .swiper__slide {
            border-radius: 16px;
            margin: 0 12px 0 0
        }

        .product__slider .swiper__slide:last-child,
        .product__thumbs .swiper__slide:last-child {
            margin-right: 0
        }

        .product__slider .swiper__slide img {
            height: 100%;
            width: auto
        }

        .product__thumbs .swiper__slide {
            border-radius: 8px;
            cursor: pointer
        }

        .product__thumbs .swiper__slide:before {
            border: 2px solid #4040ff;
            border-radius: 8px;
            bottom: 0;
            content: "";
            display: block;
            left: 0;
            opacity: 0;
            pointer-events: none;
            position: absolute;
            right: 0;
            top: 0;
            transition: opacity .1s ease;
            z-index: 2
        }

        .product__thumbs .swiper__slide_thumb-active:before {
            opacity: 1
        }

        @media only screen and (max-width:768px) {
            .product__slider {
                height: 406px
            }

            .product__slider .swiper__slide {
                margin: 0 8px 0 0
            }

            .product__thumbs {
                display: none
            }

            .product .swiper__pagination {
                display: flex
            }

            .product__media+.product__description {
                margin: 20px 0 0
            }

            .product__section {
                margin-bottom: 40px
            }

            .product .comments__form .pill,
            .product__related>.pill {
                height: 56px;
                padding: 0 25px
            }

        }

        @media only screen and (max-width:480px) {
            .product__slider {
                height: auto
            }

            .product__slider .swiper__slide {
                margin: 0 10px 0 0;
                width: 100%
            }

            .product__slider .swiper__slide img {
                height: auto;
                width: 100%
            }

            .product__banner br {
                display: none
            }

            .product__banner-action {
                margin-top: 12px
            }

            .socials {
                left: auto;
                right: 20px
            }

            .socials__menu {
                left: auto;
                margin: 0 8px 0 0;
                right: 100%
            }

            .spinner__wrap .preloader-spinner {
                left: 20px;
                right: auto;
                top: 20px
            }

        }
    </style>
</head>

<body>
    <div class="mfp-wrap mfp-auto-cursor mfp-zoom-in mfp-product mfp-ready" tabindex="-1" style="overflow: hidden;">
        <div class="mfp-container mfp-ajax-holder mfp-s-ready">
            <div class="mfp-content">
                <div id="product-wrapper" class="product-wrapper mfp-with-anim">

                    <div class="container">

                        <div id="product" class="product product_objects" data-id="" data-sku=""
                            data-status="publish" data-title="">



                            <div class="row">
                                <div class="product__top">
                                    <h1 class="h1" style="padding-left: 40px">wundou p175 タフドライ長袖Ｔシャツ</h1>

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
                                            <a class="breadcrumbs__link" itemscope=""
                                                itemtype="https://schema.org/WebPage" itemprop="item"
                                                itemid="/all/objects" href="https://uniformlab.jp/all/objects">
                                                <span itemprop="name">uniform lab</span>
                                            </a>
                                            <meta itemprop="position" content="2">
                                            <svg width="16" height="16">
                                                <use xlink:href="#arrow-breadcrumb"></use>
                                            </svg>
                                        </li>

                                        <li class="breadcrumbs__item" itemprop="itemListElement" itemscope=""
                                            itemtype="https://schema.org/ListItem">
                                            <a class="breadcrumbs__link" itemscope=""
                                                itemtype="https://schema.org/WebPage" itemprop="item"
                                                itemid="/all/objects/" href="https://uniformlab.jp/">
                                                <span itemprop="name">Apparel</span>
                                            </a>
                                            <meta itemprop="position" content="3">
                                            <svg width="16" height="16">
                                                <use xlink:href="#arrow-breadcrumb"></use>
                                            </svg>
                                        </li>

                                        <li class="breadcrumbs__item" itemprop="itemListElement" itemscope=""
                                            itemtype="https://schema.org/ListItem">
                                            <a class="breadcrumbs__link" itemscope=""
                                                itemtype="https://schema.org/WebPage" itemprop="item" itemid=""
                                                href="https://uniformlab.jp/">
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

                            <div class="product__section product__main">

                                <div class="row">


                                    <!-- 左側外枠-->
                                    <div class="col-md-8 col-sm-12" style="padding-right: 40px;">


                                        <!-- 左側内側1-->
                                        <div class="col" style="padding: 0;">

                                            <div id="slider" class="swiper-container product__slider">
                                                <div class="swiper-wrapper">
                                                    <div class="swiper-slide"><img
                                                            src="{{ asset('images/top-images/wundou_p175_web/p175_00.png') }}"
                                                            alt="" width="466" height="580"
                                                            itemprop="image"></div>
                                                    <div class="swiper-slide"><img
                                                            src="{{ asset('images/top-images/wundou_p175_web/p175_01.png') }}"
                                                            alt="" width="466" height="580"
                                                            itemprop="image"></div>
                                                    <div class="swiper-slide"><img
                                                            src="{{ asset('images/top-images/wundou_p175_web/p175_03.png') }}"
                                                            alt="" width="466" height="580"
                                                            itemprop="image"></div>
                                                    <div class="swiper-slide"><img
                                                            src="{{ asset('images/top-images/wundou_p175_web/p175_11.png') }}"
                                                            alt="" width="466" height="580"
                                                            itemprop="image"></div>
                                                    <div class="swiper-slide"><img
                                                            src="{{ asset('images/top-images/wundou_p175_web/p175_34.png') }}"
                                                            alt="" width="466" height="580"
                                                            itemprop="image"></div>
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
                                                            src="{{ asset('images/top-images/wundou_p175_web/p175_00.png') }}"
                                                            alt=""></div>
                                                    <div class="swiper-slide"><img
                                                            src="{{ asset('images/top-images/wundou_p175_web/p175_01.png') }}"
                                                            alt=""></div>
                                                    <div class="swiper-slide"><img
                                                            src="{{ asset('images/top-images/wundou_p175_web/p175_03.png') }}"
                                                            alt=""></div>
                                                    <div class="swiper-slide"><img
                                                            src="{{ asset('images/top-images/wundou_p175_web/p175_11.png') }}"
                                                            alt=""></div>
                                                    <div class="swiper-slide"><img
                                                            src="{{ asset('images/top-images/wundou_p175_web/p175_34.png') }}"
                                                            alt=""></div>
                                                </div>
                                            </div>
                                        </div>


                                        <!-- 左側内側2-->
                                        <div class="col" style="padding: 0;">
                                            <div class="product__description">
                                                <h3 class="h2">製品説明</h3>

                                                <div class="product__description-content clearfix">
                                                    <p><strong>スポーツ向け長袖ドライTシャツ</strong><br>
                                                        しっかりとしたメッシュ素材で丈夫。袖口はフライス編みで伸縮性があり動きやすく着替えが楽なシャツです。吸汗速乾で丈夫な素材、激しい動きが伴うスポーツや着用頻度の高い部活動等にも向いており、スライディングなどの動きにより怪我が伴いやすいスポーツの練習着にもおすすめです。
                                                        もちろん子供から大人まで豊富なサイズ展開、そして豊富なカラーパターンをラインアップしています。</p>

                                                </div>
                                            </div>
                                        </div>







                                        <!-- 左側内側3 おすすめ-->
                                        <br>
                                        <div class="col" style="padding:0;">

                                            <div class="product__description">
                                                <h3 class="h2">おすすめアイテム</h3>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-3 col-sm-6 col-xs-6">
                                                    <img class="img-fluid""
                                                        src="{{ asset('images/recommends/p950.jpg') }}"
                                                        alt="">
                                                    <div class="card__title-wrap">
                                                        <div class="card__title">p950 アウトドアデオドラントロングスリーブシャツ</div>
                                                        <div class="card__type"></div>
                                                    </div>
                                                </div>

                                                <div class="col-md-3 col-sm-6 col-xs-6">
                                                    <img class="img-fluid"
                                                        src="{{ asset('images/recommends/p4610.jpg') }}"
                                                        alt="">
                                                    <div class="card__title-wrap">
                                                        <div class="card__title">p4610 アウトドアウインドブレーカージャケット</div>
                                                        <div class="card__type"></div>
                                                    </div>
                                                </div>

                                                <div class="col-md-3 col-sm-6 col-xs-6">
                                                    <img class="img-fluid"
                                                        src="{{ asset('images/recommends/p3510.jpg') }}"
                                                        alt="">
                                                    <div class="card__title-wrap">
                                                        <div class="card__title">p3510 ラグビーシャツ</div>
                                                        <div class="card__type"></div>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 col-sm-6 col-xs-6">
                                                    <img class="img-fluid"
                                                        src="{{ asset('images/recommends/p1610.jpg') }}"
                                                        alt="">
                                                    <div class="card__title-wrap">
                                                        <div class="card__title">p1610 バレーボールシャツ</div>
                                                        <div class="card__type"></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-3 col-sm-6 col-xs-6">
                                                    <img class="img-fluid"
                                                        src="{{ asset('images/recommends/p1810.jpg') }}"
                                                        alt="">
                                                    <div class="card__title-wrap">
                                                        <div class="card__title">p1810 ベーシックバスケットシャツ</div>
                                                        <div class="card__type"></div>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 col-sm-6 col-xs-6">
                                                    <img class="img-fluid"
                                                        src="{{ asset('images/recommends/p1930.jpg') }}"
                                                        alt="">
                                                    <div class="card__title-wrap">
                                                        <div class="card__title">p1930 ベーシックロングスリーブサッカーシャツ</div>
                                                        <div class="card__type"></div>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 col-sm-6 col-xs-6">
                                                    <img class="img-fluid"
                                                        src="{{ asset('images/recommends/p1910.jpg') }}"
                                                        alt="">
                                                    <div class="card__title-wrap">
                                                        <div class="card__title">p1910 ベーシックサッカーシャツ</div>
                                                        <div class="card__type"></div>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 col-sm-6 col-xs-6">
                                                    <img class="img-fluid"
                                                        src="{{ asset('images/recommends/p1940.jpg') }}"
                                                        alt="">
                                                    <div class="card__title-wrap">
                                                        <div class="card__title">p1940 サッカーゲームシャツ</div>
                                                        <div class="card__type"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>











                                    <!--右側-->
                                    <div class="col-md-4 col-sm-12" style="padding: 0;">
                                        <div class="product__section product__info">
                                            <div class="product__info-box">
                                                <div class="product__info-content">
                                                    <div class="product__card">
                                                        <form action="/cart/index" method="get">
                                                            <!--値段-->
                                                            <h2 class="h2 d-flex justify-content-between">
                                                                <span>価格</span>
                                                                <span id="item_price_total"></span>
                                                                <input id="item_price_total" class="" name="小計" value="0円" readonly>
                                                            </h2>

                                                            <div class="product__actions">
                                                                <!--カートに入れるボタン-->
                                                                <a id="product-addtocart" rel="nofollow"
                                                                    href=""
                                                                    class="pill pill_w100 pill_big pill_black product__actions-cart">
                                                                    <span>カートに入れる</span>
                                                                </a>
                                                                <button type="submit"
                                                                    class="pill pill_w100 pill_big pill_black product__actions-cart">送信</button>
                                                            </div>

                                                            <div class="product__files">
                                                                <div class="h4">マーキング左片胸</div>
                                                                <select class="option_select" name="マーキング左片胸">
                                                                    <option data-price="0" selected>なし</option>
                                                                    <option data-price="550">1色 (15cm×15cm以内)550</option>
                                                                    <option data-price="1100">フルカラー(15cm×15cm以内)1100</option>
                                                                </select>
                                                            </div>

                                                            <div class="product__files">
                                                                <div class="h4">左片胸色名</div>
                                                                <input type="text" id="selected_image1"
                                                                    class="select2">
                                                                <button id="1" type="button"
                                                                    class="btn btn-primary part"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#simpleModal">
                                                                    色見本を開く
                                                                </button>
                                                            </div>

                                                            <div class="product__files">
                                                                <div class="h4">左片胸に入れる文字</div>
                                                                <input type="text" class="select2" id=''>
                                                            </div>

                                                            <div class="product__files">
                                                                <div class="h4">マーキング右片胸</div>
                                                                <select class="option_select">
                                                                    <option data-price="0" selected>なし
                                                                    </option>
                                                                    <option data-price="550">1色
                                                                        (15cm×15cm以内)¥550</option>
                                                                    <option data-price="1100">フルカラー
                                                                        (15cm×15cm以内)¥1100
                                                                    </option>
                                                                </select>
                                                            </div>

                                                            <div class="product__files">
                                                                <div class="h4">右片胸色名</div>
                                                                <input type="text" id="selected_image2"
                                                                    class="select2">
                                                                <button id="2" type="button"
                                                                    class="btn btn-primary part"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#simpleModal">
                                                                    色見本を開く
                                                                </button>
                                                            </div>

                                                            <div class="product__files">
                                                                <div class="h4">右片胸に入れる文字</div>
                                                                <input type="text" class="select2">
                                                            </div>

                                                            <div class="product__files">
                                                                <div class="h4">マーキング胸中央</div>
                                                                <select class="option_select">
                                                                    <option data-price="0" selected>なし
                                                                    </option>
                                                                    <option data-price="550">1色
                                                                        (15cm×15cm以内)¥550</option>
                                                                    <option data-price="880">1色
                                                                        (15cm×35cm以内)¥880</option>
                                                                    <option data-price="1100">フルカラー
                                                                        (15cm×15cm以内)1100</option>
                                                                    <option data-price="1650">フルカラー
                                                                        (15cm×35cm以内)¥1650</option>
                                                                </select>
                                                            </div>
                                                        </form>
                                                    </div>






                                                    <!--
                                                    <div id="product-licenses-tiff-with-layers"
                                                        class="round-group product__licenses-item"><label
                                                            class="round-group__item">
                                                            <input type="radio" name="product"
                                                                id="variant-standard-license-tiff-with-layers"
                                                                value="{&quot;variation_id&quot;:1805805,&quot;product_id&quot;:1805798,&quot;attribute&quot;:{&quot;attribute_pa_file-type&quot;:&quot;tiff-with-layers&quot;,&quot;attribute_pa_dimensions&quot;:&quot;6000x6000px&quot;,&quot;attribute_pa_license&quot;:&quot;standard-license&quot;}}"
                                                                data-attributes="{&quot;exclusivity&quot;:&quot;Yes&quot;,&quot;filesize_descr&quot;:&quot;150.35&amp;nbsp;MB&quot;,&quot;pa_dimensions_descr&quot;:&quot;6000x6000px&quot;,&quot;pa_file-type&quot;:&quot;tiff-with-layers&quot;,&quot;pa_file-type_descr&quot;:&quot;TIFF, PSD Mockup&quot;,&quot;pa_license_descr_full&quot;:&quot;&lt;a href=\&quot;\/licenses\&quot;&gt;Standard License&lt;\/a&gt;&quot;,&quot;price&quot;:14.99}"
                                                                checked="">

                                                            <label class="d-flex"
                                                                for="variant-standard-license-tiff-with-layers">
                                                                <span>Standard License</span>
                                                                <span id="product-price" class="ml-auto">$14.99</span>
                                                            </label>
                                                        </label>

                                                        <label class="round-group__item">
                                                            <input type="radio" name="product"
                                                                id="variant-enhanced-license-tiff-with-layers"
                                                                value="{&quot;variation_id&quot;:1805804,&quot;product_id&quot;:1805798,&quot;attribute&quot;:{&quot;attribute_pa_file-type&quot;:&quot;tiff-with-layers&quot;,&quot;attribute_pa_dimensions&quot;:&quot;6000x6000px&quot;,&quot;attribute_pa_license&quot;:&quot;enhanced-license&quot;}}"
                                                                data-attributes="{&quot;exclusivity&quot;:&quot;Yes&quot;,&quot;filesize_descr&quot;:&quot;150.35&amp;nbsp;MB&quot;,&quot;pa_dimensions_descr&quot;:&quot;6000x6000px&quot;,&quot;pa_file-type&quot;:&quot;tiff-with-layers&quot;,&quot;pa_file-type_descr&quot;:&quot;TIFF, PSD Mockup&quot;,&quot;pa_license_descr_full&quot;:&quot;&lt;a href=\&quot;\/licenses\&quot;&gt;Enhanced License&lt;\/a&gt;&quot;,&quot;price&quot;:79.99}">

                                                            <label class="d-flex"
                                                                for="variant-enhanced-license-tiff-with-layers">
                                                                <span>Enhanced License</span>
                                                                <span id="product-price" class="ml-auto">$79.99</span>
                                                            </label>
                                                        </label>
                                                    </div>
                                                    <div id="product-licenses-jpg"
                                                        class="round-group product__licenses-item"
                                                        style="display: none;"><label class="round-group__item">
                                                            <input type="radio" name="product"
                                                                id="variant-standard-license-jpg"
                                                                value="{&quot;variation_id&quot;:1805803,&quot;product_id&quot;:1805798,&quot;attribute&quot;:{&quot;attribute_pa_file-type&quot;:&quot;jpg&quot;,&quot;attribute_pa_dimensions&quot;:&quot;6000x6000px&quot;,&quot;attribute_pa_license&quot;:&quot;standard-license&quot;}}"
                                                                data-attributes="{&quot;exclusivity&quot;:&quot;Yes&quot;,&quot;filesize_descr&quot;:&quot;8.01&amp;nbsp;MB&quot;,&quot;pa_dimensions_descr&quot;:&quot;6000x6000px&quot;,&quot;pa_file-type&quot;:&quot;jpg&quot;,&quot;pa_file-type_descr&quot;:&quot;JPG image&quot;,&quot;pa_license_descr_full&quot;:&quot;&lt;a href=\&quot;\/licenses\&quot;&gt;Standard License&lt;\/a&gt;&quot;,&quot;price&quot;:4.99}">

                                                            <label class="d-flex" for="variant-standard-license-jpg">
                                                                <span>Standard License</span>
                                                                <span id="product-price" class="ml-auto">$4.99</span>
                                                            </label>
                                                        </label><label class="round-group__item">
                                                            <input type="radio" name="product"
                                                                id="variant-enhanced-license-jpg"
                                                                value="{&quot;variation_id&quot;:1805802,&quot;product_id&quot;:1805798,&quot;attribute&quot;:{&quot;attribute_pa_file-type&quot;:&quot;jpg&quot;,&quot;attribute_pa_dimensions&quot;:&quot;6000x6000px&quot;,&quot;attribute_pa_license&quot;:&quot;enhanced-license&quot;}}"
                                                                data-attributes="{&quot;exclusivity&quot;:&quot;Yes&quot;,&quot;filesize_descr&quot;:&quot;8.01&amp;nbsp;MB&quot;,&quot;pa_dimensions_descr&quot;:&quot;6000x6000px&quot;,&quot;pa_file-type&quot;:&quot;jpg&quot;,&quot;pa_file-type_descr&quot;:&quot;JPG image&quot;,&quot;pa_license_descr_full&quot;:&quot;&lt;a href=\&quot;\/licenses\&quot;&gt;Enhanced License&lt;\/a&gt;&quot;,&quot;price&quot;:24.99}">

                                                            <label class="d-flex" for="variant-enhanced-license-jpg">
                                                                <span>Enhanced License</span>
                                                                <span id="product-price" class="ml-auto">$24.99</span>
                                                            </label>
                                                        </label>
                                                    </div>

                                                    <div class="grey text-center">Enterprise and more <a
                                                            href=https://uniformlab.jp/contact-us">Contact
                                                            us</a>
                                                    </div>
                                                -->
                                                </div>

                                            </div>



                                            <!--
                                            <div class="product__card product__specs">
                                                <h2 class="h3">Product Specifications</h2>
                                                <div id="product-specs" class="table">
                                                    <div class="table__row product-id is-static">
                                                        <div class="table__cell product__specs-title">ID:</div>
                                                        <div class="table__cell product__specs-value">128592
                                                        </div>
                                                    </div>
                                                    <div class="table__row pa_file-type_descr">
                                                        <div class="table__cell product__specs-title">File
                                                            type:<svg width="16" height="16"
                                                                class="gray tooltip tooltipstered"
                                                                data-options="{&quot;contentAsHTML&quot;: true, &quot;side&quot;: &quot;right&quot;, &quot;interactive&quot;: true, &quot;trackOrigin&quot;: true, &quot;trigger&quot;: &quot;custom&quot;, &quot;triggerOpen&quot;: { &quot;click&quot;: true }, &quot;triggerClose&quot;: { &quot;click&quot;: true, &quot;scroll&quot;: false }}">
                                                                <use xlink:href="#icon-info"></use>
                                                            </svg></div>
                                                        <div class="table__cell product__specs-value">TIFF, PSD
                                                            Mockup
                                                        </div>
                                                    </div>
                                                    <div class="table__row pa_dimensions_descr">
                                                        <div class="table__cell product__specs-title">
                                                            Dimensions:</div>
                                                        <div class="table__cell product__specs-value">
                                                            6000x6000px</div>
                                                    </div>
                                                    <div class="table__row filesize_descr">
                                                        <div class="table__cell product__specs-title">Size:
                                                        </div>
                                                        <div class="table__cell product__specs-value">
                                                            150.35&nbsp;MB
                                                        </div>
                                                    </div>
                                                    <div class="table__row d3dformats d-none">
                                                        <div class="table__cell product__specs-title">Formats:
                                                        </div>
                                                        <div class="table__cell product__specs-value">-</div>
                                                    </div>
                                                    <div class="table__row d3dgeometry d-none">
                                                        <div class="table__cell product__specs-title">Geometry:
                                                        </div>
                                                        <div class="table__cell product__specs-value">-</div>
                                                    </div>
                                                    <div class="table__row d3dpolygons d-none">
                                                        <div class="table__cell product__specs-title">Polygons:
                                                        </div>
                                                        <div class="table__cell product__specs-value">-</div>
                                                    </div>
                                                    <div class="table__row d3dvertices d-none">
                                                        <div class="table__cell product__specs-title">Vertices:
                                                        </div>
                                                        <div class="table__cell product__specs-value">-</div>
                                                    </div>
                                                    <div class="table__row d3dmaterial d-none">
                                                        <div class="table__cell product__specs-title">
                                                            Materials:
                                                        </div>
                                                        <div class="table__cell product__specs-value">-</div>
                                                    </div>
                                                    <div class="table__row d3dtextures d-none">
                                                        <div class="table__cell product__specs-title">Textures:
                                                        </div>
                                                        <div class="table__cell product__specs-value">-</div>
                                                    </div>
                                                    <div class="table__row d3duv_mapped d-none">
                                                        <div class="table__cell product__specs-title">
                                                            UV&nbsp;Mapped:
                                                        </div>
                                                        <div class="table__cell product__specs-value">-</div>
                                                    </div>
                                                    <div class="table__row pa_license_descr_full">
                                                        <div class="table__cell product__specs-title">License:
                                                        </div>
                                                        <div class="table__cell product__specs-value"><a
                                                                href="https://uniformlab.jp/licenses">Standard
                                                                License</a></div>
                                                    </div>
                                                    <div class="table__row restrict_descr d-none">
                                                        <div class="table__cell product__specs-title">Editorial
                                                            use:<svg width="16" height="16"
                                                                class="gray tooltip tooltipstered"
                                                                data-options="{&quot;contentAsHTML&quot;: true, &quot;side&quot;: &quot;right&quot;, &quot;interactive&quot;: true, &quot;trackOrigin&quot;: true, &quot;trigger&quot;: &quot;custom&quot;, &quot;triggerOpen&quot;: { &quot;click&quot;: true }, &quot;triggerClose&quot;: { &quot;click&quot;: true, &quot;scroll&quot;: false }}">
                                                                <use xlink:href="#icon-info"></use>
                                                            </svg></div>
                                                        <div class="table__cell product__specs-value">-</div>
                                                    </div>
                                                    <div class="table__row exclusivity">
                                                        <div class="table__cell product__specs-title">
                                                            Exclusivity:</div>
                                                        <div class="table__cell product__specs-value">Yes</div>
                                                    </div>
                                                    <div class="table__row product-category is-static">
                                                        <div class="table__cell product__specs-title">Category:
                                                        </div>
                                                        <div class="table__cell product__specs-value"><a
                                                                href="https://uniformlab.jp/all/objects"
                                                                class="fcat">Object Mockups</a>, <a
                                                                href="https://uniformlab.jp/all/objects/"
                                                                class="fcat">Apparel Mockups</a>, <a
                                                                href="https://uniformlab.jp/all/objects/"
                                                                class="fcat" itemprop="category">ユニフォームラボ</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        -->




                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>






    <!--モーダル-->
    <div class="modal fade" id="simpleModal" tabindex="-1" aria-hidden="true" style="z-index: 2147483647;">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">色見本</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="閉じる"></button>
                </div>

                <div class="modal-body">
                    <form>

                        <div class="row">

                            <div class="col-sm-6 col-md-3">
                                <div class="card">
                                    <img class="card-img-top" src="{{ asset('colors/mk10.jpg') }}" alt="">
                                    <button type="submit" class="btn select" id="1" data-id='mk10'
                                        data-bs-dismiss="modal">mk10を選択</button>
                                </div>
                            </div>

                            <div class="col-sm-6 col-md-3">
                                <div class="card">
                                    <img class="card-img-top" src="{{ asset('colors/me41.jpg') }}" alt="">
                                    <button type="submit" class="btn select" id="1" data-id='me41'
                                        data-bs-dismiss="modal">me41を選択</button>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-3">
                                <div class="card">
                                    <img class="card-img-top" src="{{ asset('colors/mj03.jpg') }}" alt="">
                                    <button type="submit" class="btn select" id="1" data-id='mj03'
                                        data-bs-dismiss="modal">mj03を選択</button>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-3">
                                <div class="card">
                                    <img class="card-img-top" src="{{ asset('colors/me55.jpg') }}" alt="">
                                    <button type="submit" class="btn select" id="1" data-id='me55'
                                        data-bs-dismiss="modal">me55を選択</button>
                                </div>
                            </div>
                        </div>



                        <div class="row">
                            <div class="col-sm-6 col-md-3">
                                <div class="card">
                                    <img class="card-img-top" src="{{ asset('colors/mj09.jpg') }}" alt="">
                                    <button type="submit" class="btn select" id="1" data-id='mj09'
                                        data-bs-dismiss="modal">mj09を選択</button>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-3">
                                <div class="card">
                                    <img class="card-img-top" src="{{ asset('colors/mj48.jpg') }}" alt="">
                                    <button type="submit" class="btn select" id="1" data-id='mj48'
                                        data-bs-dismiss="modal">mj48を選択</button>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-3">
                                <div class="card">
                                    <img class="card-img-top" src="{{ asset('colors/mk18.jpg') }}" alt="">
                                    <button type="submit" class="btn select" id="1" data-id='mk18'
                                        data-bs-dismiss="modal">mk18を選択</button>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-3">
                                <div class="card">
                                    <img class="card-img-top" src="{{ asset('colors/mk33.jpg') }}" alt="">
                                    <button type="submit" class="btn select" id="1" data-id='mk33'
                                        data-bs-dismiss="modal">mk33を選択</button>
                                </div>
                            </div>
                        </div>
                </div>
                </form>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">閉じる</button>
                </div>
            </div>
        </div>
    </div>
    <!--モーダル-->




    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.1/js/swiper.min.js"></script>

    <!--Jquery-->
    <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4="
        crossorigin="anonymous"></script>

    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"></script>



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

            //alert(parts_id);

            var image_name = $(this).data('id'); //data-idを取得。画像名が入っている
            var id = $(this).attr("id") //id=*を取得。1か2か

            //代入先を動的に作成
            var img = {}; //
            img[parts_id] = "#selected_image" + parts_id; //代入先id名 #selected1 #selected2

            var idNo = {}; //
            idNo[parts_id] = "#selected_id" + parts_id; //代入先id名 #selected1 #selected2

            //alert(img[id]);
            $(img[id]).text(image_name); //代入先 selected_image1
            $(img[parts_id]).val(image_name);
            $(idNo[id]).text(id); //代入先
        });
    </script>

    <script>
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
                $("#item_price_total").val(total + "円");

            });
        });
    </script>


</body>

</html>
