{{-- vendor/jeroennoten/laravel-adminlte/resources/views/page.blade.php --}}
@extends('adminlte::page')

@section('title', 'Dashboard')


@section('content_header')
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>SKU</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li class="breadcrumb-item active">SKU</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>

    <section class="content">
        <div class="container-fluid" id="app">
            <div class="row">
                <div class="col-md-12">

                    @if (session('successMessage'))
                        <div class="alert alert-info">
                            {{ session('successMessage') }}
                        </div>
                    @endif

                    @if($errors->has('item_number'))<span>{{ $errors->first('item_number') }}</span>@endif

                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">SKU</h3>
                        </div>

                        <div class="card-body">
                            <form method="post" action="{{ route('sku.update', ['id' => $sku->id]) }}">

                                @csrf

                                <div class="form-group">
                                    <label for="item_number">商品番号</label>
                                    <input type="text" class="form-control" id="item_number" name="item_number"
                                        value="{{ $sku->item_number }}">
                                </div>

                                <div class="form-group">
                                    <label for="maker_item_number">メーカー商品番号</label>
                                    <input type="text" class="form-control" id="maker_item_number" name="maker_item_number"
                                        value="{{ $sku->maker_item_number }}">
                                </div>

                                <div class="form-group">
                                    <label for="maker_color_number">メーカー色番号</label>
                                    <input type="text" class="form-control" id="maker_color_number" name="maker_color_number"
                                        value="{{ $sku->maker_color_number }}">
                                </div>

                                <div class="form-group">
                                    <label for="size">サイズ</label>
                                    <input type="text" class="form-control" id="size" name="size" value="{{ $sku->size }}">
                                </div>

                                <div class="form-group">
                                    <label for="color_display_name">顧客表示用色名</label>
                                    <input type="text" class="form-control" id="color_display_name" name="color_display_name"
                                        value="{{ $sku->color_display_name }}">
                                </div>


                                <div class="form-group">
                                    <label for="maker">メーカー</label>
                                    <input type="text" class="form-control" id="maker" name="maker"
                                        value="{{ $sku->maker }}">
                                </div>
                                <div class="form-group">
                                    <label for="purchase">メーカー</label>
                                    <input type="text" class="form-control" id="purchase" name="purchase"
                                        value="{{ $sku->purchase }}">
                                </div>
                                <div class="form-group">
                                    <label for="price">価格</label>
                                    <input type="text" class="form-control" id="price" name="price"
                                        value="{{ $sku->price }}">
                                </div>
                                <div class="form-group">
                                    <label for="maker_price">メーカー希望小売価格</label>
                                    <input type="text" class="form-control" id="maker_price" name="maker_price"
                                        value="{{ $sku->maker_price }}">
                                </div>
                                <div class="form-group">
                                    <label for="purchase_price">仕入価格</label>
                                    <input type="text" class="form-control" id="purchase_price" name="purchase_price"
                                        value="{{ $sku->purchase_price }}">
                                </div>

                                <div class="form-group">
                                    <label for="jan">JANコード</label>
                                    <input type="text" class="form-control" id="jan" name="jan"
                                        value="{{ $sku->jan }}">
                                </div>

                                <div class="form-group">
                                    <label for="country">原産国</label>
                                    <input type="text" class="form-control" id="country" name="country"
                                        value="{{ $sku->country }}">
                                </div>

                                <!--
                                <div class="form-group">
                                    <label for="classification">大分類</label>
                                    <input type="text" class="form-control" id="classification" name="classification"
                                        value="{{ $sku->classification }}">
                                </div>
                            -->


                                <div class="form-group">
                                    <label for="stock">在庫数</label>
                                    <input type="text" class="form-control" id="stock" name="stock" value="{{ $sku->stock }}">
                                </div>


                                <button type="submit" class="btn btn-primary">更新</button>

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

        @stop
