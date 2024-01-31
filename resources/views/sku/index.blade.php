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

             
                            <form method="post" action="sku_import" enctype="multipart/form-data">
                                @csrf
                                <div style="padding-bottom: 2px"><input type="file" name="excel_file"></div>
                                <div style="padding-bottom: 2px"><input type="submit" value="インポート"></div>
                                <div style="padding-bottom: 2px"><a
                                        href="/sku_excel_template/sku_template.xlsx">テンプレートをダウンロード</a></div>
                            </form>



                            <table class="table">
                                <tbody>
                                    <tr>
                                        <th>商品番号</th>
                                        <th>メーカー商品番号</th>
                                        <th>メーカー色番号</th>
                                        <th>サイズ</th>
                                        <th>顧客表示用色名</th>
                                        <th>在庫数</th>
                                    </tr>

                                </tbody>
                            </table>

                            <form method="post" action="sku_export" style="padding-bottom: 2px">
                                @csrf
                                <input type="submit" value="ダウンロード">
                            </form>

                        </div>
                    </div>


                    <div class="card-tools">
                        {{-- $list->links('pagination::bootstrap-4') --}}
                    </div>
                </div>
            </div>
        @stop

        <!--
                これがあると左横の黒バーが途切れる
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

        @stop
