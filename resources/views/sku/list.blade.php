{{-- vendor/jeroennoten/laravel-adminlte/resources/views/page.blade.php --}}
@extends('adminlte::page')

@section('title', 'Dashboard')


@section('content_header')
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>SKU一覧</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li class="breadcrumb-item active">SKU一覧</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>


    <section class="content">
        <div class="container-fluid" id="app">
            <div class="row">
                <div class="col-md-12">
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">登録されているSKU一覧</h3>
                        </div>

                        <div class="card-body">

                            <form method="post" action="{{ 'search' }}" class="form-inline"
                                style="padding-bottom: 2px">
                                @csrf
                                <div class="form-group">
                                    <input type="search" class="form-control mr-1" id="keyword" name="keyword"
                                        placeholder="検索" value="{{-- $keyword --}}">
                                    <button type="submit" class="btn btn-primary">検索</button>
                                </div>
                            </form>

                            <form method="post" action="sku_import" enctype="multipart/form-data">
                                @csrf
                                <div style="padding-bottom: 2px"><input type="file" name="excel_file"></div>
                                <div style="padding-bottom: 20px"><input type="submit" value="インポート"></div>
                            </form>

                            @if (session('successMessage'))
                                <div class="alert alert-info">
                                    {{ session('successMessage') }}
                                </div>
                            @endif


                            @if ($errors->any())
                                <div class="alert alert-danger">
                                    <p>エクセルを確認してください</p>
                                    <ul>
                                        @foreach ($errors->all() as $error)
                                            <li>{{ $error }}</li>
                                        @endforeach
                                    </ul>
                                </div>
                            @endif


                            <table class="table">
                                <tbody>
                                    <tr>
                                        <th>
                                            選択
                                            <input type="checkbox" name="all_check" id="all">
                                        </th>
                                        <th>商品番号</th>
                                        <th>JANコード</th>
                                        <th>メーカー</th>
                                        <th>仕入れ先</th>
                                        <th>メーカー商品番号</th>
                                        <th>メーカー色番号</th>
                                        <th>サイズ</th>
                                        <th>顧客表示用色名</th>
                                        <th>原産国</th>
                                        <th>大分類</th>
                                        <th>販売価格</th>
                                        <th>希望小売価格</th>
                                        <th>仕入れ価格</th>
                                        <th>在庫数</th>
                                    </tr>
                                    @foreach ($list as $line)
                                        <tr>
                                            <td>
                                                <input type="checkbox" name="chk_todo[]" class="check"
                                                    value="{{ $line->id }}">
                                            </td>
                                            <td>
                                                <a href={{ route('sku.show', $line->id) }}>{{ $line->item_number }}</a>
                                            </td>

                                            <td>{{ $line->jan }}</td>
                                            <td>
                                                {{ $line->maker }}</a>
                                            </td>

                                            <td>
                                                {{ $line->purchase }}</a>
                                            </td>

                                            <td>
                                                {{ $line->maker_item_number }}</a>
                                            </td>

                                            <td>
                                                {{ $line->maker_color_number }}
                                            </td>
                                            <td>
                                                {{ $line->size }}
                                            </td>
                                            <td>
                                                {{ $line->color_display_name }}
                                            </td>

                                            <td>{{ $line->country }}</td>
                                            <td>{{ $line->classification }}</td>

                                            <td>{{ number_format($line->price) }}</td>
                                            <td>{{ number_format($line->maker_price) }}</td>
                                            <td>{{ number_format($line->purchase_price) }}</td>

                                            <td>
                                                {{ $line->stock }}
                                            </td>

                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>

                            <a id="chkdel" href="javascript:void(0);" class="black">削除</a>

                            <div style="padding-bottom: 2px"><a
                                    href="{{ route('sku.excel') }}">テンプレートをダウンロード</a>
                            </div>

                            <form method="post" action="sku_export" style="padding-bottom: 2px">
                                @csrf
                                <input type="submit" value="全件ダウンロード">
                            </form>
                        </div>
                    </div>


                    <div class="card-tools">
                        {{ $list->links('pagination::bootstrap-4') }}
                    </div>
                </div>
            </div>
        @stop

        <!--
        If this happens, the black bar on the left side will be cut off.
        </div>
        </section>
        -->

        @section('css')
            {{-- ページごとCSSの指定
            <link rel="stylesheet" href="/css/xxx.css">
            --}}
            <style>
                .txt {
                    display: inline-block;
                    width: 100%;
                    border: 1px solid #ffffff;
                    box-sizing: border-box;
                    padding: 1px 10px;
                }
                .table td {
                    width: 5%;
                }
            </style>
        @stop

        @section('js')
            <script>
                $("#btn3").click(function() {
                    var data = [];
                    var tr = $("table tbody tr td input:text"); //tbody以下の全行を取得
                    for (var i = 0, l = tr.length; i < l; i++) {
                        var cells = tr.eq(i).children(); //1行目から順にtbody内の列を取得
                        for (var j = 0, m = cells.length; j < m; j++) {
                            if (typeof data[i] == "undefined")
                                data[i] = [];
                            data[i][j] = cells.eq(j).text(); //i行目j列の文字列を取得
                        }
                    }
                    alert(data);
                });
            </script>

            <script>
                $('#all').on('click', function() {
                    $('input[name="chk_todo[]"]').prop('checked', this.checked);
                });

                $('input[name="chk_todo[]"]').on('click', function() {
                    if ($('.check :checked').length == $('.check input').length) {
                        $('#all').prop('checked', true);
                    } else {
                        $('#all').prop('checked', false);
                    }
                });
            </script>

            <meta name="csrf-token" content="{{ csrf_token() }}">
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
            <script>
                $(function() {
                    $("#chkdel").click(function() {
                        /// チェックされたvalue値を配列として取得
                        var vals = $('[class="check"]:checked').map(function() {
                            return $(this).val();
                        }).get();
                        //console.log(vals);
                        //console.log(vals.length)
                        if (vals.length == 0) {
                            alert('チェックされていません');
                            return false; //処理中断
                        }
                        var deleteConfirm = confirm('チェックを削除してよろしいですか？');
                        if (deleteConfirm == true) {
                            $.ajaxSetup({
                                headers: {
                                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
                                },
                            });
                            $.ajax({
                                    type: "POST",
                                    //url: "/sku/del_multi",
                                    url: "{{ url('/sku/del_multi') }}",
                                    dataType: "text",
                                    data: {
                                        id: vals,
                                    },
                                })
                                .done(function(results) {
                                    console.log("results : " + results);
                                    window.location.href = "{{ url('/sku/list') }}"; //削除後に画面を遷移
                                })
                                .fail(function(jqXHR, textStatus, errorThrown) {
                                    alert('失敗');
                                    console.log("ajax通信に失敗しました");
                                    console.log("jqXHR          : " + jqXHR.status); // HTTPステータスが取得
                                    console.log("textStatus     : " + textStatus); // タイムアウト、パースエラー
                                    console.log("errorThrown    : " + errorThrown.message); // 例外情報
                                    console.log("URL            : " + url);
                                });
                        }
                    });
                });
            </script>
            <script>
                $(function() {
                    $('#upfiles').on('change', function(e) {
                        console.log($(this).get(0).files.length);
                        console.log($(this)[0].files.length);
                        console.log(e.target.files.length);
                    });
                });
            </script>
        @stop
