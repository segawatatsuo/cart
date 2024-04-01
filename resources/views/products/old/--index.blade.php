@include('parts.noyellow')



<div class="main">
  <div class="container">
    <ul class="breadcrumb">
        <li><a href="index.html">Home</a></li>
        <li><a href="">Store</a></li>
        <li class="active">Cool green dress with red bell</li>
    </ul>


      <!-- BEGIN CONTENT -->
      <div class="col-md-9 col-sm-7">
        <div class="product-page">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <div class="product-main-image">
                <img src="assets/pages/img/products/model7.jpg" alt="Cool green dress with red bell" class="img-responsive" data-BigImgsrc="assets/pages/img/products/model7.jpg">
              </div>
              <div class="product-other-images">
                <a href="assets/pages/img/products/model3.jpg" class="fancybox-button" rel="photos-lib"><img alt="Berry Lace Dress" src="assets/pages/img/products/model3.jpg"></a>
                <a href="assets/pages/img/products/model4.jpg" class="fancybox-button" rel="photos-lib"><img alt="Berry Lace Dress" src="assets/pages/img/products/model4.jpg"></a>
                <a href="assets/pages/img/products/model5.jpg" class="fancybox-button" rel="photos-lib"><img alt="Berry Lace Dress" src="assets/pages/img/products/model5.jpg"></a>
              </div>
            </div>
            <div class="col-md-6 col-sm-6">
              <h1>Cool green dress with red bell</h1>
              <div class="price-availability-block clearfix">
                <div class="price">
                  <strong><span>$</span>47.00</strong>
                  <em>$<span>62.00</span></em>
                </div>
                <div class="availability">
                  Availability: <strong>In Stock</strong>
                </div>
              </div>
              <div class="description">
                <p>Lorem ipsum dolor ut sit ame dolore  adipiscing elit, sed nonumy nibh sed euismod laoreet dolore magna aliquarm erat volutpat 
Nostrud duis molestie at dolore.</p>
              </div>
              <div class="product-page-options">
                <div class="pull-left">
                  <label class="control-label">Size:</label>
                  <select class="form-control input-sm">
                    <option>L</option>
                    <option>M</option>
                    <option>XL</option>
                  </select>
                </div>
                <div class="pull-left">
                  <label class="control-label">Color:</label>
                  <select class="form-control input-sm">
                    <option>Red</option>
                    <option>Blue</option>
                    <option>Black</option>
                  </select>
                </div>
              </div>
              <div class="product-page-cart">
                <div class="product-quantity">
                    <input id="product-quantity" type="text" value="1" readonly class="form-control input-sm">
                </div>
                <button class="btn btn-primary" type="submit">Add to cart</button>
              </div>
              <div class="review">
                <input type="range" value="4" step="0.25" id="backing4">
                <div class="rateit" data-rateit-backingfld="#backing4" data-rateit-resetable="false"  data-rateit-ispreset="true" data-rateit-min="0" data-rateit-max="5">
                </div>
                <a href="javascript:;">7 reviews</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="javascript:;">Write a review</a>
              </div>
              <ul class="social-icons">
                <li><a class="facebook" data-original-title="facebook" href="javascript:;"></a></li>
                <li><a class="twitter" data-original-title="twitter" href="javascript:;"></a></li>
                <li><a class="googleplus" data-original-title="googleplus" href="javascript:;"></a></li>
                <li><a class="evernote" data-original-title="evernote" href="javascript:;"></a></li>
                <li><a class="tumblr" data-original-title="tumblr" href="javascript:;"></a></li>
              </ul>
            </div>

            <div class="product-page-content">
              <ul id="myTab" class="nav nav-tabs">
                <li><a href="#Description" data-toggle="tab">Description</a></li>
                <li><a href="#Information" data-toggle="tab">Information</a></li>
                <li class="active"><a href="#Reviews" data-toggle="tab">Reviews (2)</a></li>
              </ul>
              <div id="myTabContent" class="tab-content">
                <div class="tab-pane fade" id="Description">
                  <p>Lorem ipsum dolor ut sit ame dolore  adipiscing elit, sed sit nonumy nibh sed euismod laoreet dolore magna aliquarm erat sit volutpat Nostrud duis molestie at dolore. Lorem ipsum dolor ut sit ame dolore  adipiscing elit, sed sit nonumy nibh sed euismod laoreet dolore magna aliquarm erat sit volutpat Nostrud duis molestie at dolore. Lorem ipsum dolor ut sit ame dolore  adipiscing elit, sed sit nonumy nibh sed euismod laoreet dolore magna aliquarm erat sit volutpat Nostrud duis molestie at dolore. </p>
                </div>
                <div class="tab-pane fade" id="Information">
                  <table class="datasheet">
                    <tr>
                      <th colspan="2">Additional features</th>
                    </tr>
                    <tr>
                      <td class="datasheet-features-type">Value 1</td>
                      <td>21 cm</td>
                    </tr>
                    <tr>
                      <td class="datasheet-features-type">Value 2</td>
                      <td>700 gr.</td>
                    </tr>
                    <tr>
                      <td class="datasheet-features-type">Value 3</td>
                      <td>10 person</td>
                    </tr>
                    <tr>
                      <td class="datasheet-features-type">Value 4</td>
                      <td>14 cm</td>
                    </tr>
                    <tr>
                      <td class="datasheet-features-type">Value 5</td>
                      <td>plastic</td>
                    </tr>
                  </table>
                </div>
                <div class="tab-pane fade in active" id="Reviews">
                  <!--<p>There are no reviews for this product.</p>-->
                  <div class="review-item clearfix">
                    <div class="review-item-submitted">
                      <strong>Bob</strong>
                      <em>30/12/2013 - 07:37</em>
                      <div class="rateit" data-rateit-value="5" data-rateit-ispreset="true" data-rateit-readonly="true"></div>
                    </div>                                              
                    <div class="review-item-content">
                        <p>Sed velit quam, auctor id semper a, hendrerit eget justo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis vel arcu pulvinar dolor tempus feugiat id in orci. Phasellus sed erat leo. Donec luctus, justo eget ultricies tristique, enim mauris bibendum orci, a sodales lectus purus ut lorem.</p>
                    </div>
                  </div>
                  <div class="review-item clearfix">
                    <div class="review-item-submitted">
                      <strong>Mary</strong>
                      <em>13/12/2013 - 17:49</em>
                      <div class="rateit" data-rateit-value="2.5" data-rateit-ispreset="true" data-rateit-readonly="true"></div>
                    </div>                                              
                    <div class="review-item-content">
                        <p>Sed velit quam, auctor id semper a, hendrerit eget justo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis vel arcu pulvinar dolor tempus feugiat id in orci. Phasellus sed erat leo. Donec luctus, justo eget ultricies tristique, enim mauris bibendum orci, a sodales lectus purus ut lorem.</p>
                    </div>
                  </div>

                  <!-- BEGIN FORM-->
                  <form action="#" class="reviews-form" role="form">
                    <h2>Write a review</h2>
                    <div class="form-group">
                      <label for="name">Name <span class="require">*</span></label>
                      <input type="text" class="form-control" id="name">
                    </div>
                    <div class="form-group">
                      <label for="email">Email</label>
                      <input type="text" class="form-control" id="email">
                    </div>
                    <div class="form-group">
                      <label for="review">Review <span class="require">*</span></label>
                      <textarea class="form-control" rows="8" id="review"></textarea>
                    </div>
                    <div class="form-group">
                      <label for="email">Rating</label>
                      <input type="range" value="4" step="0.25" id="backing5">
                      <div class="rateit" data-rateit-backingfld="#backing5" data-rateit-resetable="false"  data-rateit-ispreset="true" data-rateit-min="0" data-rateit-max="5">
                      </div>
                    </div>
                    <div class="padding-top-20">                  
                      <button type="submit" class="btn btn-primary">Send</button>
                    </div>
                  </form>
                  <!-- END FORM--> 
                </div>
              </div>
            </div>

            <div class="sticker sticker-sale"></div>
          </div>
        </div>
      </div>
      <!-- END CONTENT -->
    </div>
    <!-- END SIDEBAR & CONTENT -->

    <!-- BEGIN SIMILAR PRODUCTS -->
    <div class="row margin-bottom-40">
      <div class="col-md-12 col-sm-12">
        <h2>Most popular products</h2>
        <div class="owl-carousel owl-carousel4">
          <div>
            <div class="product-item">
              <div class="pi-img-wrapper">
                <img src="assets/pages/img/products/k1.jpg" class="img-responsive" alt="Berry Lace Dress">
                <div>
                  <a href="assets/pages/img/products/k1.jpg" class="btn btn-default fancybox-button">Zoom</a>
                  <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
                </div>
              </div>
              <h3><a href="shop-item.html">Berry Lace Dress</a></h3>
              <div class="pi-price">$29.00</div>
              <a href="javascript:;" class="btn btn-default add2cart">Add to cart</a>
              <div class="sticker sticker-new"></div>
            </div>
          </div>
          <div>
            <div class="product-item">
              <div class="pi-img-wrapper">
                <img src="assets/pages/img/products/k2.jpg" class="img-responsive" alt="Berry Lace Dress">
                <div>
                  <a href="assets/pages/img/products/k2.jpg" class="btn btn-default fancybox-button">Zoom</a>
                  <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
                </div>
              </div>
              <h3><a href="shop-item.html">Berry Lace Dress2</a></h3>
              <div class="pi-price">$29.00</div>
              <a href="javascript:;" class="btn btn-default add2cart">Add to cart</a>
            </div>
          </div>
          <div>
            <div class="product-item">
              <div class="pi-img-wrapper">
                <img src="assets/pages/img/products/k3.jpg" class="img-responsive" alt="Berry Lace Dress">
                <div>
                  <a href="assets/pages/img/products/k3.jpg" class="btn btn-default fancybox-button">Zoom</a>
                  <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
                </div>
              </div>
              <h3><a href="shop-item.html">Berry Lace Dress3</a></h3>
              <div class="pi-price">$29.00</div>
              <a href="javascript:;" class="btn btn-default add2cart">Add to cart</a>
            </div>
          </div>
          <div>
            <div class="product-item">
              <div class="pi-img-wrapper">
                <img src="assets/pages/img/products/k4.jpg" class="img-responsive" alt="Berry Lace Dress">
                <div>
                  <a href="assets/pages/img/products/k4.jpg" class="btn btn-default fancybox-button">Zoom</a>
                  <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
                </div>
              </div>
              <h3><a href="shop-item.html">Berry Lace Dress4</a></h3>
              <div class="pi-price">$29.00</div>
              <a href="javascript:;" class="btn btn-default add2cart">Add to cart</a>
              <div class="sticker sticker-sale"></div>
            </div>
          </div>
          <div>
            <div class="product-item">
              <div class="pi-img-wrapper">
                <img src="assets/pages/img/products/k1.jpg" class="img-responsive" alt="Berry Lace Dress">
                <div>
                  <a href="assets/pages/img/products/k1.jpg" class="btn btn-default fancybox-button">Zoom</a>
                  <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
                </div>
              </div>
              <h3><a href="shop-item.html">Berry Lace Dress5</a></h3>
              <div class="pi-price">$29.00</div>
              <a href="javascript:;" class="btn btn-default add2cart">Add to cart</a>
            </div>
          </div>
          <div>
            <div class="product-item">
              <div class="pi-img-wrapper">
                <img src="assets/pages/img/products/k2.jpg" class="img-responsive" alt="Berry Lace Dress">
                <div>
                  <a href="assets/pages/img/products/k2.jpg" class="btn btn-default fancybox-button">Zoom</a>
                  <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
                </div>
              </div>
              <h3><a href="shop-item.html">Berry Lace Dress6</a></h3>
              <div class="pi-price">$29.00</div>
              <a href="javascript:;" class="btn btn-default add2cart">Add to cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END SIMILAR PRODUCTS -->
  </div>
</div>










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
                                    <button type="submit" class="btn select item_color" id="1"
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

    $('.item_color').click(function() {
        var sku = $(this).data('sku'); //data-skuを取得。SKU番号が入っている
        $('#sku').val(sku); //SKUをテキストボックスに代入

    });

    //モーダル画面で画像ボタンのselectクラスを押したら
    $('.select').click(function() {

        var image_name = $(this).data('id'); //data-idを取得。画像名が入っている
        var id = $(this).attr("id") //id=*を取得。1か2か3か..(何番めのプルダウンかNo)

        //var sku = $(this).data('sku'); //data-skuを取得。SKU番号が入っている
        //$('#sku').val(sku); //SKUをテキストボックスに代入

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

        //var sku = $(this).data('sku'); //data-skuを取得。SKU番号が入っている
        //$('#sku').val(sku); //SKUをテキストボックスに代入
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
