@include('parts.header')

<main>
    <div class="container">
        <div class="main container-fluid">
            <div class="row bg-light text-dark py-5">
                <div class="col-md-8 offset-md-2">
                    <h2 class="fs-1 mb-5 text-center fw-bold">お問い合わせ内容</h2>

                    <form method="POST" action="{{ route('contact.send') }}">
                        @csrf

                        <input type="hidden" name="name" value="{{ $contact['name'] }}">
                        <input type="hidden" name="email" value="{{ $contact['email'] }}">
                        <input type="hidden" name="contact" value="{{ $contact['contact'] }}">


                        {{-- 名前 --}}
                        <div class="mb-3">

                            <table class="table">
                                <tbody>
                                  <tr>
                                    <th scope="row" style="width: 30%">お名前</th>
                                    <td>{{ $contact['name'] }}</td>
                                  </tr>

                                  <tr>
                                    <th scope="row">メールアドレス</th>
                                    <td>{{ $contact['email'] }}</td>
                                  </tr>

                                  <tr>
                                    <th scope="row">お問い合わせ内容</th>
                                    <td>{!! nl2br(htmlspecialchars($contact['contact'])) !!}</td>
                                    
                                  </tr>


                                </tbody>
                            </table>

                        </div>



                        <div class="text-center pt-4 col-md-6 offset-md-3">
                            <!--
                            <button type="submit" class="btn btn-primary" name='back' value="back"> 戻 る </button>
                            -->
                            <button type="submit" class="btn btn-primary"> 送 信 </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

</main>

@include('parts.footer')
