<footer class="pt-4 pt-md-5 pre-footer">
  <div class="row">
    <div class="col-12 col-md">
      <!--<img class="mb-2" src="./image/logo/logo.jpg" alt="" width="193" height="14">-->
      <h5>UNIFORMLAB</h5>
      <small class="d-block mb-3">&copy; 2010–2024</small>
    </div>
    <div class="col-6 col-md">
      <h5>お支払い</h5>
      <ul class="list-unstyled text-small">
        <li class="mb-1">■クレジットカード決済</li>
        <li class="mb-1">■銀行振込（前払い）</li>
        <li class="mb-1">■郵便振替（前払い）</li>
        <li class="mb-1">■コンビニ後払い</li>
        <li class="mb-1">※限度額：累計残高で110,000円迄(税込み)他店舗含む</li>
      </ul>
    </div>
    <div class="col-6 col-md">
      <h5>送料・配送について</h5>
      <ul class="list-unstyled text-small">
        <li class="mb-1">■佐川急便・郵便局にて配送いたします</li>
        <li class="mb-1">■【送料】全国一律770円（税込）※離島・沖縄県は送料が加算される場合がございます。</li>
        <li class="mb-1">■※11,000円以上のご注文で送料無料。</li>
      </ul>
    </div>
    <div class="col-6 col-md">
      <h5>運営会社</h5>
      <ul class="list-unstyled text-small">
        <li class="mb-1">■株式会社ディーキャスト</li>
        <li class="mb-1">■〒116-0001</li>
        <li class="mb-1">■東京都荒川区町屋7-13-12</li>
        <li class="mb-1"><a class="link-same-color" tel:08022829131">■TEL:080-2282-9131　(直通）</a></li>
        <li class="mb-1"><a class="link-same-color" tel:0364582577">■TEL:03-6458-2577</a></li>
        <li class="mb-1">■FAX:03-6240-8066</li>
        <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">■店舗運営責任者/店舗セキュリティ責任者 出水　文虎</a></li>
        <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">■特定商取引に関する法律に基づく表記</a></li>
        <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">■お問い合わせ</a></li>
      </ul>
    </div>
  </div>
</footer>
<div class="footer"></div>
</div>

<script src="{{ asset('/assets/dist/js/bootstrap.bundle.min.js')}}"></script>
<!--slickスライダー-->
<!-- jQuery -->
<script src="{{ asset('/assets/dist/js/jquery.min.js')}}"></script>
<!-- slickのJavaScript -->
<script src="{{ asset('/assets/dist/js/slick.min.js')}}"></script>

<script src="{{ asset('/assets/dist/js/home.js')}}"></script>
<script src="{{ asset('/assets/dist/js/swiper.js')}}"></script><!--app.js-->
<script src="{{ asset('/assets/dist/js/app.js')}}"></script><!--app.js-->
<script src="{{ asset('/assets/dist/js/bootstrap.bundle.v5.0.0-beta1.min.js')}}"></script>
<script src="{{ asset('/assets/dist/css/app-head.js')}}"></script>
<!--font-awesome.min.css-->
<!--
<link rel="stylesheet" href="./assets/dist/css/fontawesome/font-awesome.min.css">
<link rel="stylesheet" href="./assets/dist/css/swiper/swiper.min.css">
<link rel="stylesheet" href="./assets/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="./assets/dist/css/swiper/for_swiper.css">
-->



<!--プリントを追加するモーダル-->
<div class="modal fade" id="ColorSelectModal" tabindex="-1" aria-hidden="true" style="z-index: 2147483647;">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">プリントを追加する</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="閉じる"></button>
      </div>

      <div class="modal-body">
        <form action="{{ asset('/cartAdd/index') }}" method="post">
          <div class="container">
            <div class="row">
              @foreach ( $color_array as $color )
              <div class="col-6 col-sm-4 col-md-3 col-lg-3">
                <div class="card " style="border: 0; padding:0">
                  <button type="submit" class="btn select" id="1" data-id='{{ $color->display_name }}' data-bs-dismiss="modal">
                    <img class="card-img-top" src="{{ asset('storage') }}{{ $color->path }}/{{ $color->name }}" alt="">
                    <div>{{ $color->display_name }}</div>
                  </button>
                </div>
              </div>
              @endforeach
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
<!--プリントを追加するモーダル-->



<!--色モーダル-->
<div class="modal fade" id="ColorSelectModal" tabindex="-1" aria-hidden="true" style="z-index: 2147483647;">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">色見本</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="閉じる"></button>
      </div>

      <div class="modal-body">
        <form action="{{ asset('/cartAdd/index') }}" method="post">
          <div class="container">
            <div class="row">
              @foreach ( $color_array as $color )
              <div class="col-6 col-sm-4 col-md-3 col-lg-3">
                <div class="card " style="border: 0; padding:0">
                  <button type="submit" class="btn select" id="1" data-id='{{ $color->display_name }}' data-bs-dismiss="modal">
                    <img class="card-img-top" src="{{ asset('storage') }}{{ $color->path }}/{{ $color->name }}" alt="">
                    <div>{{ $color->display_name }}</div>
                  </button>
                </div>
              </div>
              @endforeach
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

<!--書体モーダル-->
<div class="modal fade" id="FontSelectModal" tabindex="-1" aria-hidden="true" style="z-index: 2147483647;">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">書体見本</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="閉じる"></button>
      </div>

      <div class="modal-body">
        <form action="{{ asset('/cartAdd/index') }}" method="post">
          <div class="container">
            <div class="row">
              @foreach ( $font_array as $font )
              <div class="col-6 col-sm-4 col-md-3 col-lg-3">
                <div class="card " style="border: 0; padding:0">
                  <button type="submit" class="btn select" id="1" data-id='{{ $font->name }}' data-bs-dismiss="modal">
                    <img class="card-img-top" src="{{ asset('storage') }}{{ $font->path }}/{{ $font->name }}" alt="">
                    <div>{{ $font->name }}</div>
                  </button>
                </div>
              </div>
              @endforeach
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
<!--書体モーダル-->


<!--ユニフォームカラーモーダル-->
<div class="modal fade" id="UnifColorModal" tabindex="-1" aria-hidden="true" style="z-index: 2147483647;">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">アイテムカラー</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div class="modal-body">
        <form action="{{ asset('/cartAdd/index') }}" method="post">
          <div class="row">
            @foreach ($colors as $key => $data)
            <div class="col-6 col-sm-4 col-md-3 col-lg-3">
              <div class="card" style="border: 0; padding:0">
                <button type="submit" class="btn select item_color" id="1" data-id='{{ $data->color_display_name }}' data-bs-dismiss="modal"
                  data-sku='{{ $data->image_name }}'>
                  <img class="card-img-top"
                  src="{{ asset('/storage/image/detail').'/'.$item->number .'/'.$data->image_name}}" alt="">
                  <div>{{ $data->color_display_name }}</div>
                </button>
              </div>
            </div>
            @endforeach
          </div>
        </form>
      </div>
      <!--ユニフォームカラーモーダル-->

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">閉じる</button>
      </div>
    </div>
  </div>
</div>
<!--ユニフォームカラーモーダル-->





<!--
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://iiyama.sakura.ne.jp/cart/css/swiper.min.css">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
<link rel="stylesheet" href="https://iiyama.sakura.ne.jp/cart/css/swiper.min.css">
<link rel="stylesheet" href="https://iiyama.sakura.ne.jp/cart/css/for_swiper.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.1/js/swiper.min.js"></script>
<script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4="
crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
-->







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


$('.del-goods').click(function() {
    var sku = $(this).data('sku'); //data-skuを取得。SKU番号が入っている
    alert(sku);
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
    if ($('#selected_image1').text() == '') {
        alert('アイテムカラーを選択してください');
    } else {
        var itemNo = "";
        var color = "";
        itemNo = $('#itemNo').text();
        color = $('#selected_image1').text();

        $.ajax({
            url: './product/get_size?itemNo=' + itemNo + '&color=' + color,
            type: 'GET',
            dataType: "json",
        }).done(function(data) {
            var data_stringify = JSON.stringify(
                data
            ); 
            var data_json = JSON.parse(data_stringify);

            
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
  $(document).ready(function () {
    $("#item_price").val(item_price + "円");
    //var sku = $(this).data('sku'); //data-skuを取得。SKU番号が入っている
    //$('#sku').val(sku); //SKUをテキストボックスに代入
  });
  $(document).ready(function () {
    var num;
    num = item_price + option_price;
    num.toLocaleString(); //3桁区切りの文字列に変換
    $("#item_price_total").val(num + "円");
  });

  //オプション代
  $(function () {
    $("select").change(function () {
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
  $(document).ready(function () {
    //$("#Button1").click(function() {
    $(".product__info-content").change(function () {
      //数量*単価の配列
      var inputText = $(".textBox").map(function (index, el) {
        //return $(this).val();
        return $(this).val() * $(this).data('price'); //数量*単価
      });
      //数量合計だけの配列
      var countSum = $(".textBox").map(function (index, el) {
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