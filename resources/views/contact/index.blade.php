@include('parts.header')

<main>
    <div class="container">
        <div class="main container-fluid">
            <div class="row bg-light text-dark py-5">
                <div class="col-md-8 offset-md-2">
                    <h2 class="fs-1 mb-5 text-center fw-bold">お問い合わせ</h2>
                    <form method="POST" action="{{ route('contact.confirm') }}">
                        @csrf

                        {{-- 名前 --}}
                        <div class="mb-3">
                            <input id="name" type="text" class="form-control @error('name') is-invalid @enderror"
                                name="name" value="{{ old('name') }}" autofocus placeholder ="お名前（必須）">
                            @error('name')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>


                        {{-- メールアドレス --}}
                        <div class="mb-3">
                            <input id="email" type="text" class="form-control @error('email') is-invalid @enderror"
                                name="email" value="{{ old('email') }}" autofocus placeholder ="メールアドレス（必須）">
                            @error('email')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>


                        {{-- contact --}}
                        <div class="mb-4">
                            <textarea id="contact" class="form-control  @error('contact') is-invalid @enderror" name="contact" cols="30" rows="10" placeholder="お問い合わせ内容（必須）">{{ old('contact') }}</textarea>
                            @error('contact')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                        </div>

                        <div class="text-center pt-4 col-md-6 offset-md-3">
                            <button type="submit" class="btn btn-primary">お問い合わせ内容の確認へ</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

</main>

@include('parts.footer')
