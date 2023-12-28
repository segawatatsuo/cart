{{-- vendor/jeroennoten/laravel-adminlte/resources/views/page.blade.php --}}
@extends('adminlte::page')

@section('title', 'Dashboard')


@section('content_header')
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>カテゴリー新規登録</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li class="breadcrumb-item active">カテゴリー新規登録</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>

    {{-- コンテンツ --}}

    <section class="content">
        <div class="container-fluid" id="app">
            <div class="row">

                <div class="col-md-6">

                    <div class="card card-primary">

                        <div class="card-header">
                            <h3 class="card-title">カテゴリー作成</h3>
                        </div>

                        <div class="card-body">

                            <form method="POST" action="category/store">
                                @csrf
                                <!-- Begin page content -->
                                <main role="main" class="flex-shrink-0">
                                    <div class="container">

                                        <fieldset>

                                            <!--
                                                    <div class="form-group">
                                                        <label for="slug">スラッグ(英語名)</label>
                                                        <input type="text" class="form-control" name="slug" id="slug" value="">
                                                    </div>
                                                    -->
                                            <div class="form-group">
                                                <label for="parent_category">親カテゴリ</label>
                                                <select class="form-control" id="parent_name" name="parent_name">

                                                    @foreach ($flatCategory as $category)
                                                        <option value="{{ $category->id }}">{{ $category->name }}</option>
                                                    @endforeach


                                                </select>
                                            </div>

                                            <div class="form-group">
                                                <label for="category_name">カテゴリ名</label>
                                                <input type="text" class="form-control" name="category_name"
                                                    id="category_name" value="">
                                                <input type="checkbox" name="tops" value="tops">トップカテゴリーにする
                                            </div>

                                            <!--
                                                    <div class="form-group">
                                                        <label for="explanation">説明</label>
                                                        <input type="text" class="form-control" name="explanation" id="explanation" value="">
                                                    </div>
                                                    -->

                                            <input type="submit" value="保存" class="btn btn-primary">
                                        </fieldset>
                                    </div>
                                </main>
                            </form>
                        </div>
                    </div>
                </div>


                <div class="col-md-6">
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">カテゴリー</h3>
                        </div>
                        <div class="card-body">
                            @each('layouts.partials.project', $categories, 'project', 'partials.projects-none')
                        </div>
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

        ul,li {
            list-style: none;
        }
    </style>

@stop

@section('js')

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://unpkg.com/vue@3.1.1/dist/vue.global.prod.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"></script>

    <script>
        Vue.createApp({
            data() {
                return {
                    params: {
                        name: '',
                        inside_name: '',
                        //明細部分
                        ingredients: [],
                        prices: []
                    }
                }
            },
            methods: {
                addIngredient() {

                    this.params.ingredients.push('');
                    this.params.prices.push('');

                },
                removeIngredient(removingIndex) {

                    this.params.ingredients.splice(removingIndex, 1);
                    this.params.prices.splice(removingIndex, 1);
                },
                onSubmit() {

                    if (confirm('保存します。よろしいですか？')) {

                        const url = '{{ route('pulldown.store2') }}';

                        axios.post(url, this.params)
                            .then(response => {

                                if (response.data.result === true) {

                                    alert('保存が完了しました。');

                                }

                            })
                            .catch(error => {

                                // TODO: ここでエラー処理をする
                                console.log(error.response.data);
                                alert('入力エラーがありました');

                            });

                    }

                }
            }
        }).mount('#app');
    </script>

@stop
