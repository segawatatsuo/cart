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

                                    <form action="{{ asset('/cartAdd/index') }}" method="post" id="form1>
                                        @csrf
                                        <input type="hidden" name="id" value="{{ $item->id }}">
                                        <!-- if is err -->
                                        <div>
                                        </div>
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
                                            {{-- <div class="h4">プリントを追加</div> --}}
                                            <div class="d-flex">
                                                <button id="1" type="button"
                                                    class="btn btn-warning part btn-send w-100" data-bs-toggle="modal"
                                                    data-bs-target="#AddPrintModal" style="margin-right: 4px;" form="form1">
                                                    プリントを追加
                                                </button>
                                            </div>
                                        </div>


                                        <!--以下プリントを追加要素 -->
                                        <div id="wrap">

                                            <hr style="border-width: thick;">

                                            <div class="product__files">
                                                <div class="d-flex">
                                                    <button id="1" type="button"
                                                        class="btn btn-primary part btn-send w-50"
                                                        data-bs-toggle="modal" data-bs-target="#AddPrintModal"
                                                        style="margin-right: 4px;">
                                                        プリント箇所
                                                    </button>
                                                    <input type="text" value=""
                                                        class="radi select2 textbox-grow" id="addprint1"
                                                        name="" style="border: 1px solid #e2e5e9;" form="form1">
                                                </div>
                                            </div>
                                            <!-- プリントを追加 -->

                                            <!-- プリントを追加が実行されたら下記を表示する -->
                                            <div class="product__files">
                                                <!--<div class="h4">書体見本を開く</div>-->
                                                <div class="d-flex">
                                                    <button id="2" type="button"
                                                        class="btn btn-primary part btn-send w-50"
                                                        data-bs-toggle="modal" data-bs-target="#FontSelectModal"
                                                        style="margin-right: 4px;">
                                                        書体(フォント)
                                                    </button>
                                                    <input type="text" value=""
                                                        class="radi select2 textbox-grow" id="selected_image2"
                                                        name="" style="border: 1px solid #e2e5e9;" form="form1">
                                                </div>
                                            </div>

                                            <div class="product__files">
                                                <!--<div class="h4">文字カラーを開く</div>-->
                                                <div class="d-flex">
                                                    <button id="3" type="button"
                                                        class="btn btn-primary part btn-send w-50"
                                                        data-bs-toggle="modal" data-bs-target="#ColorSelectModal"
                                                        style="margin-right: 4px;">
                                                        文字カラー
                                                    </button>
                                                    <input type="text" value=""
                                                        class="radi select2 textbox-grow" id="selected_image3"
                                                        name="" style="border: 1px solid #e2e5e9;" form="form1">
                                                </div>
                                            </div>

                                            <div class="product__files" id="fuchidori_style">
                                                <!--<div class="h4">文字縁カラーを開く</div>-->
                                                <div class="d-flex">
                                                    <button id="5" type="button"
                                                        class="btn btn-primary part btn-send w-50"
                                                        data-bs-toggle="modal" data-bs-target="#FuchiDoriModal"
                                                        style="margin-right: 4px;">
                                                        縁取りスタイル
                                                    </button>
                                                    <input type="text" value=""
                                                        class="radi select2 textbox-grow" id="fuchdori5"
                                                        name="" style="border: 1px solid #e2e5e9;" form="form1">
                                                </div>
                                            </div>

                                            <div class="product__files mojifuchicolor">
                                                <!--<div class="h4">文字縁カラーを開く</div>-->
                                                <div class="d-flex">
                                                    <button id="4" type="button"
                                                        class="btn btn-primary part btn-send w-50"
                                                        data-bs-toggle="modal" data-bs-target="#ColorSelectModal"
                                                        style="margin-right: 4px;">
                                                        文字縁カラー
                                                    </button>
                                                    <input type="text" value=""
                                                        class="radi select2 textbox-grow" id="selected_image4"
                                                        name="" style="border: 1px solid #e2e5e9;" form="form1">
                                                </div>
                                            </div>

                                            <div class="product__files" id="textbox">
                                                <div class="d-flex">
                                                    <!--縁取りはid=5 -->
                                                    <button id="5" type="button"
                                                        class="btn btn-primary part w-25" data-bs-toggle=""
                                                        data-bs-target="" style="margin-right: 4px;">
                                                        テキスト
                                                    </button>
                                                    <!--縁取りはid=selected_image5 -->
                                                    <input type="text" value=""
                                                        class="radi select2 textbox-grow" id="selected_image5"
                                                        name="" style="border: 1px solid #e2e5e9;" form="form1">
                                                </div>
                                            </div>






                                            <div class="product__files" id="textbox">
                                                <p>
                                                    <a class="btn btn-primary w-100" data-bs-toggle="collapse"
                                                        href="#image-upload" role="button" aria-expanded="false"
                                                        aria-controls="collapseExample">
                                                        画像をアップロード
                                                    </a>
                                                </p>
                                           
                                                <div class="collapse" id="image-upload">
                                                    <div class="">
                                                        <h1>画像を上げた時点でDBに登録される</h1>
                                                        <form method="post" action="{{ url('user/upload') }}"
                                                            enctype="multipart/form-data" class="dropzone"
                                                            id="dropzone" id="form2">
                                                            @csrf
                                                            <div class="dz-default dz-message">
                                                                <button class="dz-button" type="button" form="form2">
                                                                    ファイルをドラッグ＆ドロップまたはここをクリック(タップ)して画像選択してください。
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>











                                            <div class="product__files">
                                                <div class="d-flex">
                                                    <button id="6" type="button"
                                                        class="btn btn-secondary part btn-send w-100 delete"
                                                        data-bs-toggle="modal" data-bs-target=""
                                                        style="margin-right: 4px;">
                                                        プリントを削除
                                                    </button>
                                                </div>
                                            </div>

                                        </div><!--#wrapはここまでにする -->







                                        <!-- プリントを追加が実行されたら下記を表示する -->
                                        <!-- プルダウン カウンターでid番号を作成。1は上のアイテムカラーで使用済みなので2から開始 -->
                                        {{-- 
                                        @php $n=2; @endphp
                                        @foreach ($selecters as $select)
                                            <div class="product__files">
                                                <div class="h4">{{ $select->name }}</div>

                                                <!--カラー選択ボタンを使用する場合 ColorSelectModal -->
                                                @if ($select->with_color_button == 'with_color_button')
                                                    <!--button id="2"とid="selected_image2"のように一致させる -->
                                                    <div class="d-flex">
                                                        <button id="{{ $n }}" type="button"
                                                            class="btn btn-primary part btn-send"
                                                            data-bs-toggle="modal" data-bs-target="#ColorSelectModal"
                                                            style="margin-right: 4px;">
                                                            色見本を開く
                                                        </button>
                                                        <input type="text" value=""
                                                            class="radi select2 textbox-grow"
                                                            id="selected_image{{ $n }}"
                                                            name="{{ $select->name }}"
                                                            style="border: 1px solid #e2e5e9;">
                                                    </div>
                                                    <!--書体を表示 FontSelectModal-->
                                                @elseif($select->with_font_button == 'with_font_button')
                                                    <div class="d-flex">
                                                        <button id="{{ $n }}" type="button"
                                                            class="btn btn-primary part btn-send"
                                                            data-bs-toggle="modal" data-bs-target="#FontSelectModal"
                                                            style="margin-right: 4px;">
                                                            色見本を開く
                                                        </button>
                                                        <input type="text" value=""
                                                            class="radi select2 textbox-grow"
                                                            id="selected_image{{ $n }}"
                                                            name="{{ $select->name }}"
                                                            style="border: 1px solid #e2e5e9;">
                                                    </div>

                                                    <!--文字入力欄だったらモーダル項目不要-->
                                                @elseif($select->with_color_button == 'character_input')
                                                    <!-- character_input-->
                                                    <div class="d-flex">
                                                        <input type="text" value=""
                                                            name="{{ $select->name }}"
                                                            class="inputbox select2 textbox-grow"
                                                            style="border: 1px solid #e2e5e9;">
                                                    </div>
                                                @else
                                                    <!--プルダウンだったら-->
                                                    <select class="option_select form-select"
                                                        name="{{ $select->name }}">
                                                        @foreach ($select->pulldown_detail as $data)
                                                            <option data-price="{{ $data->price }}">
                                                                {{ $data->name }}@if ($data->price != 0)
                                                                    ¥{{ $data->price }}
                                                                @endif
                                                            </option>
                                                        @endforeach
                                                    </select>
                                                @endif

                                            </div>
                                            @php $n+=1; @endphp
                                        @endforeach
                                        --}}





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
                                                                style="width:50%;display:inline-block;border: 1px solid #e2e5e9;" form="form1">
                                                        </td>
                                                        <td>{{ number_format($size['price']) }}円</td>
                                                        <input type="hidden" name="price[{{ $size['size'] }}]"
                                                            value="{{ $size['price'] }}">
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
                                                    value="" readonly style="border: 1px solid #e2e5e9;" form="form1">
                                            </div>
                                        </div>


                                        <!--数量-->
                                        <div class="product__files">
                                            <div class="h4">数量</div>
                                            <div class="d-flex">
                                                <input id="quantity" type="text"
                                                    class="inputbox select2 textbox-grow" name="数量"
                                                    value="" readonly style="border: 1px solid #e2e5e9;" form="form1">
                                            </div>
                                        </div>


                                        <!--合計-->
                                        <div class="product__files">
                                            <div class="h4">合計</div>
                                            <div class="d-flex">
                                                <input id="item_price_total" type="text"
                                                    class="inputbox select2 textbox-grow" name="合計"
                                                    value="0円" readonly style="border: 1px solid #e2e5e9;" form="form1">
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
                                                class="pill pill_w100 pill_big pill_black product__actions-cart">カートに入れる</button>
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