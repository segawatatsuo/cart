{{-- vendor/jeroennoten/laravel-adminlte/resources/views/page.blade.php --}}
@extends('adminlte::page')

@section('title', 'Dashboard')


@section('content_header')
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>商品一覧</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li class="breadcrumb-item active">商品一覧</li>
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
                            <h3 class="card-title">登録されている商品一覧</h3>
                        </div>

                        <div class="card-body">
                            <table class="table">
                                <tbody>
                                    @foreach ($list as $line)
                                        <tr>
                                            <td>
                                                <a href={{ route('item.show', $line->id) }}>
                                                    {{ $line->name }}</a>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="card-tools">
                        {{ $list->links('pagination::bootstrap-4') }}
                    </div>
                </div>
            @stop
        </div>
</section>


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
