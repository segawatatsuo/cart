@extends('adminlte::page')

@section('title', 'Dashboard')


@section('content_header')
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>プライバシーポリシー</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li class="breadcrumb-item active">プライバシーポリシー</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
@stop

@section('content')
    {{-- コンテンツ --}}
    <form method="POST" id="data" action="{{ route('company.privacy.update') }}">
        @csrf
        <section class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card card-primary">
                            <div class="card-header">
                                <h3 class="card-title">プライバシーポリシー</h3>
                            </div>
                            <div class="card-body col-md-12">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="form-group" style="padding-top:20px;">
                                            <textarea class="form-control ckeditor" id="privacy" placeholder="" name="privacy">{{ $privacy->privacy }}</textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="row">
                            <div class="col-3">


                                <button type="submit" class="btn btn-primary register" name="register"
                                    form="data">データ登録</button>
                            </div>
                        </div>
                    </div>
    </form>


    </div>
    </div>
    </section>

@stop



@section('css')
    <style>
        ul,
        li {
            list-style: none;
        }
    </style>

@stop

@section('js')

    <script src="https://cdn.jsdelivr.net/npm/sortablejs@1.13.0/Sortable.min.js"></script>
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
    </script>
    <!-- CKEditor -->
    <script src="//cdn.ckeditor.com/4.14.1/standard/ckeditor.js"></script>

    <script>
        //CKEDITOR.config.width=600;
        CKEDITOR.config.height=500;
        </script>




 


@stop
