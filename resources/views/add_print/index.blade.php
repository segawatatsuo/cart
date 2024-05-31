@extends('adminlte::page')

@section('title', 'Dashboard')


@section('content_header')
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>プリント箇所</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li class="breadcrumb-item active">プリント箇所</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
@stop

@section('content')
    {{-- コンテンツ --}}
    <form method="POST" id="data" action="{{ route('add_print.update') }}">
        @csrf

        <section class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">

                        <!-- フラッシュメッセージ -->
                        @if (session('flash_message'))
                            <div class="alert alert-danger text-center mx-auto">
                                {{ session('flash_message') }}
                            </div>
                        @endif


                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">プリント箇所</h3>
                            </div>

                            <div class="card-body">
                                <div id="example2_wrapper" class="dataTables_wrapper dt-bootstrap4">
                                    <div class="row">
                                        <div class="col-sm-12 col-md-6"></div>
                                        <div class="col-sm-12 col-md-6"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <table id="example2"
                                                class="table table-bordered table-hover dataTable dtr-inline"
                                                aria-describedby="example2_info">
                                                <thead>
                                                    <tr>
                                                        <th class="sorting sorting_asc" tabindex="0" aria-controls=""
                                                            rowspan="1" colspan="1" aria-sort="ascending"
                                                            aria-label="ID">
                                                            ID</th>
                                                        <th class="sorting" tabindex="0" aria-controls="" rowspan="1"
                                                            colspan="1" aria-label="">印字箇所
                                                        </th>
                                                        <th class="sorting" tabindex="0" aria-controls="" rowspan="1"
                                                            colspan="1" aria-label="">
                                                            イメージ画像</th>
                                                        <th class="sorting" tabindex="0" aria-controls="" rowspan="1"
                                                            colspan="1" aria-label="">
                                                            価格</th>

                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    @foreach ($addprints as $addprint)
                                                        <tr>
                                                            <td class="dtr-control sorting_1" tabindex="0">
                                                                <input type="hidden" name="id"
                                                                    value="{{ $addprint->id }}">
                                                                {{ $addprint->id }}
                                                            </td>
                                                            <td><input type="text" class="form-control"
                                                                    name="part_name[]" value="{{ $addprint->part_name }}">
                                                            </td>
                                                            <td><input type="text" class="form-control" name="image[]"
                                                                    value="{{ $addprint->image }}"></td>
                                                            <td><input type="text" class="form-control" name="price[]"
                                                                    value="{{ $addprint->price }}"></td>

                                                        </tr>
                                                    @endforeach
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-3">
                                            <button type="submit" class="btn btn-primary register" name="register"
                                                form="data">データ更新</button>
                                        </div>
                                    </div>
                                </div>



                            </div>





                        </div>
                    </div>
                </div>
            </div>



        </section>
    </form>








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

    {{-- dropzone用に追加 --}}
    <meta name="_token" content="{{ csrf_token() }}" />
    <!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.4.0/min/dropzone.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.4.0/dropzone.js"></script>
    {{-- dropzone用に追加 --}}




    <!--dropzone -->

    <script type="text/javascript">
        Dropzone.options.dropzone = {
            maxFilesize: 12,
            renameFile: function(file) {
                var dt = new Date();
                var time = dt.getTime();
                return time + file.name;
            },
            acceptedFiles: ".jpeg,.jpg,.png,.gif",
            addRemoveLinks: true,
            timeout: 50000,
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


@stop
