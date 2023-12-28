{{-- vendor/jeroennoten/laravel-adminlte/resources/views/page.blade.php --}}
@extends('adminlte::page')

@section('title', 'Dashboard')

<!--
<div class="container small">
-->
@section('content_header')
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>プルダウン編集</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li class="breadcrumb-item active">プルダウン編集</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
@stop

@section('content')
    {{-- コンテンツ --}}

    <section class="content">
        <div class="container-fluid">
            <div class="row">

                <div class="col-md-6">

                    <div class="card card-primary">

                        <div class="card-header">
                            <h3 class="card-title">プルダウン名</h3>
                        </div>

                        <div class="card-body">

                            <div class="form-group">
                                <label for="name">名前</label>
                                <input type="text" class="form-control" name="name" placeholder="">
                            </div>
                            <div class="form-group">
                                <label for="inside_name">管理名</label>
                                <input type="text" class="form-control" name="inside_name" placeholder="">
                            </div>
                            <div class="form-group">
                                <label for="attribution">帰属先</label>
                                <input type="text" class="form-control" name="attribution" placeholder="">
                            </div>

                            <div class="form-group">
                                <label for="name">手入力項目1</label>
                                <input type="text" class="form-control" name="input_column1" placeholder="">
                            </div>
                            <div class="form-group">
                                <label for="name">手入力項目2</label>
                                <input type="text" class="form-control" name="input_column2" placeholder="">
                            </div>
                            <div class="form-group">
                                <label for="name">手入力項目3</label>
                                <input type="text" class="form-control" name="input_column3" placeholder="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

@stop

<!--
</div>
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

        .table td.nopm {
            padding: 0em;
            margin: 0em;
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
