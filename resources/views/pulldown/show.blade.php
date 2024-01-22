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
                    <h1>プルダウン</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li class="breadcrumb-item active">プルダウン</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>

    {{-- コンテンツ --}}

    <section class="content">
        <div class="container-fluid">
            <div class="row">

                <!-- フラッシュメッセージ -->
                @if (session('flash_message'))
                    <div class="alert alert-success">
                        {{ session('flash_message') }}
                    </div>
                @endif

                <div class="col-md-6">

                    <div class="card card-primary">

                        <div class="card-header">
                            <h3 class="card-title">プルダウン名</h3>
                        </div>

                        <form method="POST" action="{{ route('pulldown.update', $post->id) }}" id="form1">
                       
                            @csrf

                            <div class="card-body">

                                <div class="form-group">
                                    <label for="name">名前</label>
                                    <input type="text" class="form-control" name="name" placeholder=""
                                        value="{{ $post->name }}">
                                </div>
                                <div class="form-group">
                                    <label for="inside_name">管理名</label>
                                    <input type="text" class="form-control" name="inside_name" placeholder=""
                                        value="{{ $post->inside_name }}">
                                </div>
                                <div class="form-group">
                                    <label for="attribution">帰属先</label>
                                    <input type="text" class="form-control" name="attribution" placeholder=""
                                        value="{{ $post->attribution }}">
                                </div>

                                <div class="form-group">
                                    <label for="name">手入力項目1</label>
                                    <input type="text" class="form-control" name="input_column1" placeholder=""
                                        value="{{ $post->input_column1 }}">
                                </div>
                                <div class="form-group">
                                    <label for="name">手入力項目2</label>
                                    <input type="text" class="form-control" name="input_column2" placeholder=""
                                        value="{{ $post->input_column2 }}">
                                </div>
                                <div class="form-group">
                                    <label for="name">手入力項目3</label>
                                    <input type="text" class="form-control" name="input_column3" placeholder=""
                                        value="{{ $post->input_column3 }}">
                                </div>
                            </div>


                    </div>
                </div>


                <div class="col-md-6">
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">プルダウン内容</h3>
                        </div>

                        <div class="card-body">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>内容</th>
                                        <th>価格</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($details as $detail)
                                        <tr>
                                            <td class="">
                                                <input type="text" name="detail[]" class="txt"
                                                    value="{{ $detail->name }}">
                                            </td>
                                            <td class="">
                                                <input type="text" name="price[]" class="txt"
                                                    value="{{ $detail->price }}">
                                            </td>
                                            <td>
                                                <input type="hidden" name="ids[]" class="txt"
                                                value="{{ $detail->id }}">
                                            </td>

                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                        <div class="card-footer">
                            <button type="submit" class="btn btn-primary mr-2" form="form1">更新</button>
                            <input type="hidden" name="id" value="{{ $post->id }}" form="form1">
                            </form>
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
