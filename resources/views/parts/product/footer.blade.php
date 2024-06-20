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
                <li class="mb-1">■店舗運営責任者/店舗セキュリティ責任者
                    出水　文虎</a></li>
                <li class="mb-1"><a class="link-grey text-decoration-none" href="tokutei">■特定商取引に関する法律に基づく表記</a></li>
                <li class="mb-1"><a class="link-grey text-decoration-none" href="privacy">■プライバシーポリシー</a></li>
                <li class="mb-1"><a class="link-grey text-decoration-none" href="contact">■お問い合わせ</a></li>
            </ul>
        </div>
    </div>
</footer>
<div class="footer"></div>
</div>

{{-- 
<script src="{{ asset('/assets/dist/js/bootstrap.bundle.min.js') }}"></script>
 --}}
<!-- collapse -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous">
</script>

<!--slickスライダー-->
<!-- jQuery -->
<script src="{{ asset('/assets/dist/js/jquery.min.js') }}"></script>
<!-- slickのJavaScript -->
<script src="{{ asset('/assets/dist/js/slick.min.js') }}"></script>

<script src="{{ asset('/assets/dist/js/home.js') }}"></script>
<script src="{{ asset('/assets/dist/js/swiper.js') }}"></script><!--app.js-->
<script src="{{ asset('/assets/dist/js/app.js') }}"></script><!--app.js-->
<script src="{{ asset('/assets/dist/css/app-head.js') }}"></script>

<!--3桁区切り-->
<script src="{{ asset('/assets/dist/js/jquery.maskMoney.js') }}"></script>

{{-- dropzone用に追加 --}}
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.4.0/min/dropzone.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.4.0/dropzone.js"></script>
{{-- dropzone用に追加 --}}


<!--プリントを追加するモーダル-->

<div class="modal fade" id="AddPrintModal" tabindex="-1" aria-hidden="true" style="z-index: 2147483647;">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">プリントを追加</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="閉じる"></button>
            </div>

            <div class="modal-body">
                <form action="{{ asset('/cartAdd/index') }}" method="post">
                    <div class="container">
                        <div class="row">
                            @foreach ($add_print as $addp)
                                <div class="col-6 col-sm-4 col-md-3 col-lg-3">
                                    <div class="card " style="border: 0; padding:0">
                                        <button type="submit" class="btn addprint" id = "addprint"
                                            data-parts='{{ $addp->part_name }}' data-bs-dismiss="modal"
                                            data-price="{{ $addp->price }}">
                                            <img class="card-img-top" src="{{ asset('storage') }}/{{ $addp->image }}"
                                                alt="">
                                            <div>{{ $addp->part_name }}</div>
                                            <div>加工費用：{{ number_format($addp->price) }}円</div>
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
                            @foreach ($font_array as $font)
                                <div class="col-6 col-sm-4 col-md-3 col-lg-3">
                                    <div class="card " style="border: 0; padding:0">
                                        <button type="submit" class="btn font" id=1 data-parts='{{ $font->name }}'
                                            data-bs-dismiss="modal">
                                            <img class="card-img-top"
                                                src="{{ asset('storage') }}{{ $font->path }}/{{ $font->name }}"
                                                alt="">
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


<!--文字色モーダル-->
<div class="modal fade" id="ColorSelectModal" tabindex="-1" aria-hidden="true" style="z-index: 2147483647;">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">文字色見本</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="閉じる"></button>
            </div>

            <div class="modal-body">
                <form action="{{ asset('/cartAdd/index') }}" method="post">
                    <div class="container">
                        <div class="row">
                            @foreach ($color_array as $color)
                                <div class="col-6 col-sm-4 col-md-3 col-lg-3">
                                    <div class="card " style="border: 0; padding:0">
                                        <button type="submit" class="btn select fontcolor" id=1
                                            data-parts='{{ $color->display_name }}' data-bs-dismiss="modal">
                                            <img class="card-img-top"
                                                src="{{ asset('storage') }}{{ $color->path }}/{{ $color->name }}"
                                                alt="">
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
<!--文字色モーダル-->


<!--縁取りスタイルを追加するモーダル-->
<div class="modal fade" id="FuchiDoriModal" tabindex="-1" aria-hidden="true" style="z-index: 2147483647;">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">縁取りスタイル</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="閉じる"></button>
            </div>

            <div class="modal-body">
                <form action="{{ asset('/cartAdd/index') }}" method="post">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div class="card" style="border: 0; padding:0">

                                    <button type="submit" class="btn fuchidori d-block mx-auto fuchidori" id=1
                                        data-parts='縁取りなし' data-bs-dismiss="modal">
                                        <img class="card-img-top"
                                            src="{{ asset('storage') }}/image/fuchidori/fuchinashi.png"
                                            alt="縁取りなし">
                                        <div>縁取りなし</div>
                                    </button>

                                    <button type="submit" class="btn fuchidori d-block mx-auto fuchidori" id=1
                                        data-parts='中抜き縁取り' data-bs-dismiss="modal">
                                        <img class="card-img-top"
                                            src="{{ asset('storage') }}/image/fuchidori/nakanuki.png" alt="中抜き縁取り">
                                        <div>中抜き縁取り</div>
                                    </button>

                                    <button type="submit" class="btn fuchidori d-block mx-auto fuchidori" id=1
                                        data-parts='中抜き縁取り2色' data-bs-dismiss="modal">
                                        <img class="card-img-top"
                                            src="{{ asset('storage') }}/image/fuchidori/nakanuki-2.png"
                                            alt="中抜き縁取り2色">
                                        <div>中抜き縁取り2色</div>
                                    </button>

                                    <button type="submit" class="btn fuchidori d-block mx-auto fuchidori" id=1
                                        data-parts='2重縁取り' data-bs-dismiss="modal">
                                        <img class="card-img-top"
                                            src="{{ asset('storage') }}/image/fuchidori/nijyu.png" alt="2重縁取り">
                                        <div>2重縁取り</div>
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
<!--縁取りスタイルを追加するモーダル-->









<!--ふち文字色モーダル-->
<div class="modal fade" id="ColorSelectFontModal" tabindex="-1" aria-hidden="true" style="z-index: 2147483647;">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">文字縁色見本</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="閉じる"></button>
            </div>

            <div class="modal-body">
                <form action="{{ asset('/cartAdd/index') }}" method="post">
                    <div class="container">
                        <div class="row">
                            @foreach ($color_array as $color)
                                <div class="col-6 col-sm-4 col-md-3 col-lg-3">
                                    <div class="card " style="border: 0; padding:0">
                                        <button type="submit" class="btn fontcolor_fuchidori" id=1
                                            data-parts='{{ $color->display_name }}' data-bs-dismiss="modal">
                                            <img class="card-img-top"
                                                src="{{ asset('storage') }}{{ $color->path }}/{{ $color->name }}"
                                                alt="">
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
<!--ふち文字色モーダル-->







<!--ユニフォームカラーモーダル-->
<div class="modal fade" id="UnifColorModal" tabindex="-1" aria-hidden="true" style="z-index: 2147483647;">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">アイテムカラー選択</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div class="modal-body">
                <form action="{{ asset('/cartAdd/index') }}" method="post">
                    <div class="row">
                        @foreach ($colors as $key => $data)
                            <div class="col-6 col-sm-4 col-md-3 col-lg-3">
                                <div class="card" style="border: 0; padding:0">
                                    {{-- 
                                    <button type="submit" class="btn select item_color" id=1
                                        data-parts='{{ $data->color_display_name }}' data-bs-dismiss="modal"
                                        data-sku='{{ $data->image_name }}'>
                                        <img class="card-img-top"
                                            src="{{ asset('/storage/image/detail') . '/' . $item->number . '/' . $data->image_name }}"
                                            alt="">
                                        <div>{{ $data->color_display_name }}</div>
                                    </button>
                                     --}}
                                    <button type="submit" class="btn select item_color" id=1
                                        data-id='{{ $data->color_display_name }}' data-bs-dismiss="modal"
                                        data-sku='{{ $data->image_name }}'>
                                        <img class="card-img-top"
                                            src="{{ asset('/storage/image/detail') . '/' . $item->number . '/' . $data->image_name }}"
                                            alt="">
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


<script>
    //ページを開いたらセッション変数(addprint_times)を毎回初期化
    $(document).ready(function() {
        sessionStorage.clear();
    });
</script>



{{-- dropzone --}}
<!--ファイル名を変更する場合に使うオプション -->
<script type="text/javascript">
    Dropzone.options.dropzone = {
        maxFilesize: 4,
        renameFile: function(file) {
            var dt = new Date();
            var time = dt.getTime();
            return time + file.name; //日時＋fileName
        },
        acceptedFiles: ".jpeg,.jpg,.png,.gif,.webp",
        addRemoveLinks: true,
        timeout: 50000,
        dictFileTooBig: "ファイルが大きすぎます。(@{{ filesize }}MB). 最大サイズ: @{{ maxFilesize }}MB.",
        dictInvalidFileType: "画像ファイルのみアップロードが可能です。",
        dictMaxFilesExceeded: "ファイルは4ファイルまで追加が可能です。",
        dictDefaultMessage: "ここへファイルをドラッグ＆ドロップするとアップロードされます。<br>最大4ファイルまでアップ可能です。<br><br>（もしくはここをクリックするとファイル選択ウインドウが表示されますのでそこで選択してもアップ可能です）",


        removedfile: function(file) {
            var name = file.upload.filename;
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
                },
                type: 'POST',
                url: 'http://127.0.0.1:8000/image/delete',
                data: {
                    filename: name
                },
                success: function(data) {
                    console.log("File has been successfully removed!!");
                },
                error: function(e) {
                    console.log(e);
                }
            });
            var fileRef;
            return (fileRef = file.previewElement) != null ?
                fileRef.parentNode.removeChild(file.previewElement) : void 0;
        },

        success: function(file, response) {
            console.log(response);
        },
        error: function(file, response) {
            return false;
        }
    };
</script>
{{-- dropzone --}}


<script>
    var parts_id;
    //パーツ選択のボタン
    $('.part').on('click', function() {
        parts_id = $(this).attr("id");
    });
    //Tシャツの色とSKU
    $('.item_color').click(function() {
        var sku = $(this).data('sku'); //data-sku
        var id = $(this).data('id'); //色名日本語
        $('#sku').val(sku); //SKUをテキストボックスに代入
        $('#selected_image1').val(id); //色名をテキストボックスに代入
    });

    $('.del-goods').click(function() {
        var sku = $(this).data('sku'); //data-skuを取得。SKU番号が入っている
    });
</script>

<!--プリントを追加 -->
<script>
    $('.tsuika').click(function() {
        //セッション変数から何回目のプリント箇所追加になるか調べる
        var addprint_times = sessionStorage.getItem('addprint_times');
        if (addprint_times == null) {
            sessionStorage.setItem('addprint_times', 1); //初めてなら1
            addprint_times = sessionStorage.getItem('addprint_times');
        } else {
            sessionStorage.setItem('addprint_times', Number(addprint_times) + 1);
            addprint_times = sessionStorage.getItem('addprint_times');
        }

        //テンプレートを読み込み
        if (addprint_times == 1) {
            var template = document.getElementById("js-template1");
        } else if (addprint_times == 2) {
            var template = document.getElementById("js-template2");
        } else if (addprint_times == 3) {
            var template = document.getElementById("js-template3");
        } else if (addprint_times == 4) {
            var template = document.getElementById("js-template4");
        } else if (addprint_times == 5) {
            var template = document.getElementById("js-template5");
        } else if (addprint_times == 6) {
            var template = document.getElementById("js-template6");
        } else if (addprint_times == 7) {
            var template = document.getElementById("js-template7");
        } else if (addprint_times == 8) {
            var template = document.getElementById("js-template8");
        } else if (addprint_times == 9) {
            var template = document.getElementById("js-template9");
        } else if (addprint_times == 10) {
            var template = document.getElementById("js-template10");
        } else if (addprint_times == 11) {
            var template = document.getElementById("js-template11");
        }

        // 定義したtemplate要素を複製する
        const content = template.content.cloneNode(true);
        // #js-contentに追加
        document.getElementById("js-content").appendChild(content);
    });
</script>


<script>
    var block;
    //1.プリントを追加を押したら
    $(function() {
        $('.addprint').click(function(e) {
            $('#AddPrintModal').modal({}, e.target);
        });
    });
    //2.モーダルを開いたら(temp.blade.php)
    $('#AddPrintModal').on('show.bs.modal', function(event) {
        var button = $(event.relatedTarget);
        block = button.data('block'); // data-block 1番、２番などをグローバル変数に代入
        //alert(block);
    });
    //3.モーダルのパーツボタンをクリックしたら関連するinputに右袖などを入れる
    $('#addprint.btn').click('show.bs.modal', function(event) {
        var image_name = $(this).data('parts'); //右袖など選択パーツ名がidに入っている
        var target;

        target = "#addprint" + block; //代入先id名 #addprint1
        $(target).val(image_name);

        var price = $(this).data('price');
        target = "#print_price" + block; //代入先id名 #addprint1

        //3桁区切り表示(toLocaleString)
        $(target).val(price);
        //$(target).val(Number(price).toLocaleString());

        //加工単価の合計(temp.blade.php)
        var calculated_total_sum = 0;
        $(".processing_cost").each(function() {
            var get_textbox_value = $(this).val();
            //3桁区切りカンマを取り除く
            get_textbox_value = get_textbox_value.replace(/,/g, '');
            get_textbox_value = parseInt(get_textbox_value, 10);

            if ($.isNumeric(get_textbox_value)) {
                calculated_total_sum += parseInt(get_textbox_value);
            }
        });
        //3桁区切り表示(toLocaleString)
        $("#option_price").val(calculated_total_sum);
        //$("#option_price").val(Number(calculated_total_sum).toLocaleString());


        //すでに数量を入れた後で再度追加された場合に合計を再計算
        var calculated_total_sum = 0;
        $("#size .textBox").each(function() {
            var get_textbox_value = $(this).val(); //数量があるところは数量、ないところは空欄
            var get_price = $(this).data('price'); //一覧全部の単価を拾ってくる

            //get_price = get_price.replace(/,/g, '');
            //get_price = parseInt(get_price, 10);

            if ($.isNumeric(get_textbox_value)) {
                calculated_total_sum += parseInt(get_textbox_value) * parseInt(get_price);
            }
        });

        var kazu = parseInt($("#quantity").val());
        var price = $("#option_price").val();
        price = price.replace(/,/g, '');
        price = parseInt(price, 10);

        calculated_total_sum += (kazu * price);

        if (Number.isNaN(calculated_total_sum)) {
            $("#item_price_total").val('');
        } else {
            $("#item_price_total").val(calculated_total_sum);
        }
    });
</script>



<script>
    //書体(フォント)
    $('.font').click(function() {
        var image_name = $(this).data('parts'); //data-partsを取得。画像名が入っている
        var id = $(this).attr("id") //id=*を取得。

        var target;
        //target = "#font" + id; //代入先id名 #addprint1 
        target = "#font" + block; //代入先id名 #addprint1 
        $(target).val(image_name);
    });
</script>


<script>
    //フォントカラー
    $('.fontcolor').click(function() {
        var image_name = $(this).data('parts'); //data-partsを取得。画像名が入っている
        var id = $(this).attr("id") //id=*を取得。

        var target;
        //target = "#fontcolor" + id; //代入先id名 #addprint1 
        target = "#fontcolor" + block; //代入先id名 #addprint1 

        $(target).val(image_name);
    });
</script>



<script>
    //縁取りスタイル
    $('.fuchidori').click(function() {
        var image_name = $(this).data('parts'); //data-partsを取得。画像名が入っている
        var id = $(this).attr("id") //id=*を取得。
        var target;
        //target = "#fuchidori" + parts_id; //代入先id名 #addprint1
        target = "#fuchidori" + block;
        hide_target = "#hide"+ block;
        var replace_text = '#fontcolor_fuchidori' + block;

        $(target).val(image_name);

        if (image_name == '縁取りなし' || image_name == '中抜き縁取り') {
            $(replace_text).val("");
            $(hide_target).hide();
        } else if (document.getElementById("fontcolor_fuchidori1") == null) {
            $(hide_target).show();
        } else {
            $(hide_target).show();
        }

    });
</script>


<script>
    //文字縁取りカラー
    $('.fontcolor_fuchidori').click(function() {

        var image_name = $(this).data('parts'); //data-partsを取得。画像名が入っている

        var id = $(this).attr("id") //id=*を取得。1か2か3か..(何番めのプルダウンかNo)

        var target;
        //target = "#fontcolor_fuchidori" + parts_id; //#fontcolor_fuchidori1
        target = "#fontcolor_fuchidori" + block; //#fontcolor_fuchidori1

        $(target).val(image_name);
    });
</script>



<script>
    //モーダル画面でボタンの縁取りを(.fuchidori)を押したら
    $('.fuchidori').click(function() {
        var image_name = $(this).data('parts'); //data-partsを取得。中抜き縁取りなど
        $('#fuchdori5').val(image_name); //textの#fuchdori5に中抜き縁取りを入れる

        if (image_name == '縁取りなし' || image_name == '中抜き縁取り') {
            $('.mojifuchicolor').hide();
            $('#selected_image4').val("");
        } else if (document.getElementById("mojifuchicolor") == null) {
            $('.mojifuchicolor').show();
        }
    });
</script>

<!--数量合計-->
<script>
    $("#size").on('input', '.textBox', function() {
        var calculated_total_sum = 0;
        $("#size .textBox").each(function() {
            var get_textbox_value = $(this).val();
            if ($.isNumeric(get_textbox_value)) {
                calculated_total_sum += parseInt(get_textbox_value);
            }
        });
        $("#quantity").val(calculated_total_sum);

        var calculated_total_sum = 0;
        $("#size .textBox").each(function() {
            var get_textbox_value = $(this).val(); //数量があるところは数量、ないところは空欄
            var get_price = $(this).data('price'); //一覧全部の単価を拾ってくる

            //get_price = get_price.replace(/,/g, '');
            //get_price = parseInt(get_price, 10);

            if ($.isNumeric(get_textbox_value)) {
                calculated_total_sum += parseInt(get_textbox_value) * parseInt(get_price);
            }
        });


        //var option_price=parseInt($("#option_price").val());
        //option_price = option_price.replace(/,/g, '');
        //option_price = parseInt(option_price, 10);
        if ($("#option_price").val() >= 1) {
            calculated_total_sum += (parseInt($("#quantity").val()) * parseInt($("#option_price").val()));
        } else {
            calculated_total_sum += (parseInt($("#quantity").val()));
        }
        $("#item_price_total").val(calculated_total_sum);

    });
</script>

{{-- テンプレート --}}
@include('products.temp')



<script>
    //モーダル画面でボタンのselectクラスを押したら(書体、文字カラー)
    $('.select').click(function() {

        var image_name = $(this).data('parts'); //data-partsを取得。画像名が入っている。data-parts='{{ $font->name }}'
        var id = $(this).attr("id") //id=*を取得。1か2か3か..(何番めのプルダウンかNo)

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
            //num.toLocaleString(); //3桁区切りの文字列に変換
            $("#item_price_total").val(num + "円");
            //$("#item_price_total").val(item_price + total + "円");
        });
    });
</script>


<!-- ユニフォームの枚数＊単価で総合計 -->
<script type="text/javascript">
    $(document).ready(function() {

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
            //Number(totalAmount).toLocaleString(); //3桁区切りの文字列に変換
            $("#item_price_total").val(totalAmount + "円");

        })
    })
</script>


</body>

</html>
