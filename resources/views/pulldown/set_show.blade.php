{{-- vendor/jeroennoten/laravel-adminlte/resources/views/page.blade.php --}}
@extends('adminlte::page')

@section('title', 'Dashboard')


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


    <section class="content">
        <div class="container-fluid" id="app">
            <div class="row">
                <div class="col-md-12">
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">プルダウン</h3>
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                                <div class="row">

                                    <div class="form-group">
                                        <label for="name">プルダウンのセット名</label>
                                        <input type="text" name="setname" class="form-control"
                                            value="{{ $name }}">
                                    </div>

                                    <div class="col-6 pt-3 pb-3">
                                        <label for="name">プルダウン</label>
                                        <div id="LeftSide" class="list-group col sortable">
                                            @if(is_array($left))
                                            @php $n=1; @endphp
                                            @foreach ($left as $item)
                                                <div class="list-group-item" data-id="{{ $item->id ?? 'No category, deleted ?' }}">{{ $item->name ?? 'No category name' }}</div>
                                                @php $n+=1; @endphp
                                            @endforeach
                                            @endif
                                        </div>
                                    </div>
                
                                    <div class="col-6 pt-3 pb-3">
                                        <label for="name">セット内容(ここにドラッグしてください)</label>
                                        <div id="RightSide" class="list-group col sortable">
                                            @if(is_array($right))
                                            @php $n=1; @endphp
                                            @foreach ($right as $item)
                                                <div class="list-group-item" data-id="{{ $item->id ?? 'No category, deleted ?' }}">{{ $item->name ?? 'No category name' }}</div>
                                                @php $n+=1; @endphp
                                            @endforeach
                                            @endif
                                        </div>

                                        <div id="p1" class="pt-3">
                                            <input type="hidden" name="record_id" class="record_id" value="{{ $record_id }}">
                                            <button type="button" class="btn btn-primary changebtn">保存する</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    </section>


@stop

@section('css')
    {{-- ページごとCSSの指定 --}}

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

    <script>
        document.getElementById("p1").style.display = "none";
    </script>
    <script>
        new Sortable(RightSide, {
            group: 'shared', // set both lists to same group
            animation: 80,
            dropOnEmpty: false,
            onSort: function(evt, ui) {
                var currentSortable = evt.to[Object.keys(evt.to)[0]];
                var fromSortable = evt.from[Object.keys(evt.from)[0]];

                var order = currentSortable.toArray();
                var from = fromSortable.toArray();
                var name = currentSortable.el.id; //移動した先のID名
                //console.log(name);
                //console.log(order);
                var serializedArray = JSON.stringify(order);
                localStorage.setItem('RightSide', serializedArray);

                p1.style.display = "block";

                $.ajax({
                    // DBのソート順を更新する処理
                });
            },
        });

        new Sortable(LeftSide, {
            group: 'shared',
            animation: 80,
            dropOnEmpty: false,
            onSort: function(evt, ui) {
                var currentSortable = evt.to[Object.keys(evt.to)[0]];
                var fromSortable = evt.from[Object.keys(evt.from)[0]];

                var order = currentSortable.toArray();
                var from = fromSortable.toArray();
                var name = fromSortable.el.id; //移動した先のID名
                //console.log(name);
                //console.log(from);
                var serializedArray = JSON.stringify(from);
                localStorage.setItem('LeftSide', serializedArray);

                $.ajax({
                    // DBのソート順を更新する処理
                });
            },
        });


        $('.changebtn').on('click', function() {

            var record_id = $('.record_id').val(); //レコードID
            var setname = $('input[name="setname"]').val(); //セット名

            if (setname == null || setname == "") {
                alert("プルダウンのセット名を入力してください");
                return;
            }
            var serializedArray = localStorage.getItem('LeftSide');
            var leftside = JSON.parse(serializedArray);
            var serializedArray = localStorage.getItem('RightSide');
            var rightside = JSON.parse(serializedArray);

            var obj = {
                "record_id": record_id,
                "leftside": leftside,
                "rightside": rightside,
                "setname": setname,
            };
            var test = JSON.stringify(obj);
            //{"leftside":["0","2","3","4","5","6"],"rightside":["0","1"]}
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $("[name='csrf-token']").attr("content")
                },
                //url: "/pulldown_set/update",
                url: {{ url('/pulldown_set/update') }},
                method: "post",
                dataType: "text",
                data: obj,
                data: {
                    "record_id": record_id,
                    "leftside": leftside,
                    "rightside": rightside,
                    "setname": setname,
                }
            }).done(function(res) {
                console.log(res);
                alert("保存しました");
            }).fail(function() {
                alert('通信エラー');
            });
        });
    </script>

@stop
