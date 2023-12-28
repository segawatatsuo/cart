{{-- vendor/jeroennoten/laravel-adminlte/resources/views/page.blade.php --}}
@extends('adminlte::page')

@section('title', 'Dashboard')


@section('content_header')
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>プルダウンセット一覧</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li class="breadcrumb-item active">プルダウンセット一覧</li>
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
                            <h3 class="card-title">プルダウンセット一覧</h3>
                        </div>

                        <div class="card-body">
                            <table class="table">
                                <tbody>
                                    @foreach ($pulldown_sets as $set)
                                        <tr>
                                            <td>
                                                <a href={{ route('pulldown.set_show', $set->id) }}>{{ $set->name }}</a>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="card-tools">

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


@stop
