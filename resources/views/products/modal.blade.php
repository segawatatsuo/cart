<!--プリントを追加するモーダル-->

<div class="modal fade" id="AddPrintModal" tabindex="-1" aria-hidden="true" style="z-index: 2147483647;">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">プリントを追加</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="閉じる"></button>
            </div>

            <div class="modal-body">
                <form action="{{ asset('/cartAdd/index') }}" method="post">
                    <div class="container">
                        <div class="row">
                            @foreach ($add_print as $addp)
                                <div class="col-6 col-sm-4 col-md-3 col-lg-3">
                                    <div class="card " style="border: 0; padding:0">
                                        <button type="submit" class="btn addprint" id= addprint_times;
                                            data-id='{{ $addp->part_name }}' data-bs-dismiss="modal">
                                            <img class="card-img-top" src="{{ asset('storage') }}/{{ $addp->image }}"
                                                alt="">
                                            <div>{{ $addp->part_name }}</div>
                                        </button>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    </div>
                </form>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">閉じる</button>
            </div>
        </div>
    </div>
</div>
<!--プリントを追加するモーダル-->



<!--書体モーダル-->
<div class="modal fade" id="FontSelectModal" tabindex="-1" aria-hidden="true" style="z-index: 2147483647;">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">書体見本</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="閉じる"></button>
            </div>

            <div class="modal-body">
                <form action="{{ asset('/cartAdd/index') }}" method="post">
                    <div class="container">
                        <div class="row">
                            @foreach ($font_array as $font)
                                <div class="col-6 col-sm-4 col-md-3 col-lg-3">
                                    <div class="card " style="border: 0; padding:0">
                                        <button type="submit" class="btn font" id= $addprint_times
                                            data-id='{{ $font->name }}' data-bs-dismiss="modal">
                                            <img class="card-img-top"
                                                src="{{ asset('storage') }}{{ $font->path }}/{{ $font->name }}"
                                                alt="">
                                            <div>{{ $font->name }}</div>
                                        </button>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    </div>
                </form>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">閉じる</button>
            </div>
        </div>
    </div>
</div>
<!--書体モーダル-->


<!--文字色モーダル-->
<div class="modal fade" id="ColorSelectModal" tabindex="-1" aria-hidden="true" style="z-index: 2147483647;">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">文字色見本</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="閉じる"></button>
            </div>

            <div class="modal-body">
                <form action="{{ asset('/cartAdd/index') }}" method="post">
                    <div class="container">
                        <div class="row">
                            @foreach ($color_array as $color)
                                <div class="col-6 col-sm-4 col-md-3 col-lg-3">
                                    <div class="card " style="border: 0; padding:0">
                                        <button type="submit" class="btn select fontcolor" id= $addprint_times
                                            data-id='{{ $color->display_name }}' data-bs-dismiss="modal">
                                            <img class="card-img-top"
                                                src="{{ asset('storage') }}{{ $color->path }}/{{ $color->name }}"
                                                alt="">
                                            <div>{{ $color->display_name }}</div>
                                        </button>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    </div>
                </form>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">閉じる</button>
            </div>
        </div>
    </div>
</div>
<!--文字色モーダル-->


<!--縁取りスタイルを追加するモーダル-->
<div class="modal fade" id="FuchiDoriModal" tabindex="-1" aria-hidden="true" style="z-index: 2147483647;">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">縁取りスタイル</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="閉じる"></button>
            </div>

            <div class="modal-body">
                <form action="{{ asset('/cartAdd/index') }}" method="post">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div class="card" style="border: 0; padding:0">

                                    <button type="submit" class="btn fuchidori d-block mx-auto fuchidori" id= $addprint_times
                                        data-id='縁取りなし' data-bs-dismiss="modal">
                                        <img class="card-img-top"
                                            src="{{ asset('storage') }}/image/fuchidori/fuchinashi.png"
                                            alt="縁取りなし">
                                        <div>縁取りなし</div>
                                    </button>

                                    <button type="submit" class="btn fuchidori d-block mx-auto fuchidori" id= $addprint_times
                                        data-id='中抜き縁取り' data-bs-dismiss="modal">
                                        <img class="card-img-top"
                                            src="{{ asset('storage') }}/image/fuchidori/nakanuki.png" alt="中抜き縁取り">
                                        <div>中抜き縁取り</div>
                                    </button>

                                    <button type="submit" class="btn fuchidori d-block mx-auto fuchidori" id= $addprint_times
                                        data-id='中抜き縁取り2色' data-bs-dismiss="modal">
                                        <img class="card-img-top"
                                            src="{{ asset('storage') }}/image/fuchidori/nakanuki-2.png"
                                            alt="中抜き縁取り2色">
                                        <div>中抜き縁取り2色</div>
                                    </button>

                                    <button type="submit" class="btn fuchidori d-block mx-auto fuchidori" id= $addprint_times
                                        data-id='2重縁取り' data-bs-dismiss="modal">
                                        <img class="card-img-top"
                                            src="{{ asset('storage') }}/image/fuchidori/nijyu.png" alt="2重縁取り">
                                        <div>2重縁取り</div>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">閉じる</button>
            </div>
        </div>
    </div>
</div>
<!--縁取りスタイルを追加するモーダル-->









<!--ふち文字色モーダル-->
<div class="modal fade" id="ColorSelectFontModal" tabindex="-1" aria-hidden="true" style="z-index: 2147483647;">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">文字縁色見本</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="閉じる"></button>
            </div>

            <div class="modal-body">
                <form action="{{ asset('/cartAdd/index') }}" method="post">
                    <div class="container">
                        <div class="row">
                            @foreach ($color_array as $color)
                                <div class="col-6 col-sm-4 col-md-3 col-lg-3">
                                    <div class="card " style="border: 0; padding:0">
                                        <button type="submit" class="btn fontcolor_fuchidori" id= $addprint_times
                                            data-id='{{ $color->display_name }}' data-bs-dismiss="modal">
                                            <img class="card-img-top"
                                                src="{{ asset('storage') }}{{ $color->path }}/{{ $color->name }}"
                                                alt="">
                                            <div>{{ $color->display_name }}</div>
                                        </button>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    </div>
                </form>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">閉じる</button>
            </div>
        </div>
    </div>
</div>
<!--ふち文字色モーダル-->







<!--ユニフォームカラーモーダル-->
<div class="modal fade" id="UnifColorModal" tabindex="-1" aria-hidden="true" style="z-index: 2147483647;">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">アイテムカラー</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div class="modal-body">
                <form action="{{ asset('/cartAdd/index') }}" method="post">
                    <div class="row">
                        @foreach ($colors as $key => $data)
                            <div class="col-6 col-sm-4 col-md-3 col-lg-3">
                                <div class="card" style="border: 0; padding:0">
                                    <button type="submit" class="btn select item_color" id= $addprint_times
                                        data-id='{{ $data->color_display_name }}' data-bs-dismiss="modal"
                                        data-sku='{{ $data->image_name }}'>
                                        <img class="card-img-top"
                                            src="{{ asset('/storage/image/detail') . '/' . $item->number . '/' . $data->image_name }}"
                                            alt="">
                                        <div>{{ $data->color_display_name }}</div>
                                    </button>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </form>
            </div>
            <!--ユニフォームカラーモーダル-->

            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">閉じる</button>
            </div>
        </div>
    </div>
</div>
<!--ユニフォームカラーモーダル-->
