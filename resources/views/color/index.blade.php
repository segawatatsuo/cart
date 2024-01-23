{{-- vendor/jeroennoten/laravel-adminlte/resources/views/page.blade.php --}}
@extends('adminlte::page')

@section('title', 'Dashboard')


@section('content_header')
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>カラー新規登録</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li class="breadcrumb-item active">カラー新規登録</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>

    {{-- コンテンツ --}}

    <section class="content">
        <div class="container-fluid" id="app">

            <!-- フラッシュメッセージ -->
            @if (session('flash_message'))
                <div class="alert alert-success">
                    {{ session('flash_message') }}
                </div>
            @endif


            <div class="row">
                <div class="col-md-6">
                    <div class="card card-primary">

                        <div class="card-header">
                            <h3 class="card-title">カラー名</h3>
                        </div>


                        <form method="POST" action="{{ route('color.store') }}" enctype="multipart/form-data">
                            @csrf

                            <div class="card-body">

                                <div class="form-group">
                                    <label for="name">名前</label>
                                    <input type="text" class="form-control" name="name">
                                </div>

                                <div class="form-group">
                                    <label for="select1a">帰属先</label>
                                    <select id="select1a" class="form-control" name="attribution">
                                        @foreach ($attributions as $attribution)
                                            <option>{{ $attribution->attribution }}</option>
                                        @endforeach
                                    </select>
                                </div>


                                <div class="form-group">
                                    <label for="name">価格</label>
                                    <input type="text" class="form-control" name="price" placeholder="">
                                </div>
                            </div>
                    </div>
                </div>


                <div class="col-md-6">
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">画像</h3>
                        </div>

                        <div class="card-body">
                            <input type="file" name="img_path" id="input_file">
                            <button>アップロード</button>
                            <div class="pt-3"><img id="image"></div>
                        </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    </section>

@stop


@section('css')
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
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script>
        $("#input_file").change(function(e) {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.addEventListener("load", function() {
                $("#image").attr("src", reader.result);
            }, false);

            if (file) {
                reader.readAsDataURL(file);
            }
        });
    </script>



@stop
