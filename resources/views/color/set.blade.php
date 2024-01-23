{{-- vendor/jeroennoten/laravel-adminlte/resources/views/page.blade.php --}}
@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
    <h1>カラーセット</h1>
@stop

@section('content')
    {{-- コンテンツ --}}

<!-- bootstrap image gallery 1 -->
<div class="container-fluid">
  <div class="row">

    @for ($val = 0; $val <= 10; $val++)
    <div class="col-sm-6 col-md-4 col-lg-3">
      <figure>
        <img src="{{ asset('images/1703390984877green.jpg') }}" class="img-thumbnail grayscale">
        <figcaption>Mountain 1</figcaption>
      </figure>
    </div>
    @endfor

  </div><!-- row -->
</div><!-- container-fluid -->

@stop

@section('css')
    {{-- ページごとCSSの指定--}}


@section('js')

@stop
