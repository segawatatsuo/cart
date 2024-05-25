@include('parts.header')

<main>
    <div class="container">
        <div class="main container-fluid">
            <div class="row bg-light text-dark py-5">
                <div class="col-md-8 offset-md-2">
                    <h2 class="fs-1 mb-5 text-center fw-bold">お問い合わせ完了</h2>
                    <div class="mx-auto">
                        <form method="get" action="http://127.0.0.1:8000">
                            <input type="hidden" name="_token" value="hTjdwkRI8QqqnHoLMxapNBKnYi8XuKSjjNIKl1eE"
                                autocomplete="off">
                            <div class="mb-3">
                                <h3 class="text-center">お問い合わせありがとうございました。</h3>
                                <p class="text-center" style="line-height:2rem">
                                    お問い合わせメールをお送りいただきありがとうございます。<br>
                                    後ほど、担当者よりご連絡をさせていただきます。<br>
                                    今しばらくお待ちくださいますようよろしくお願い申し上げます。
                                </p>
                            </div>
                            <div class="text-center pt-4 col-md-6 offset-md-3">
                                <button type="submit" class="btn btn-primary"> トップページ </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</main>

@include('parts.footer')
