@include('parts.header')

<div id="content" class="content-area page home"><!-- margin-top: 222px  -->
    <div class="container">
        <div class="row">

          <div class="col-12">
                @foreach ($cartCollection as $data)
                    <div>

                        {{ "商品ID:".$data->id }}
                        {{ "NAME:".$data->name }}
                        {{ "PRICE:".$data->price }}
                        {{ "合計数量:".$data->quantity }}
                        {{ "合計売上：". $data->price*$data->quantity}}

                        @foreach ($data->attributes as $key => $val)
                            <p>
                                {{ $key }}
                                {{ $val }}
                            </p>
                        @endforeach
                        <form action="{{ route('cart.destroy', ['id' => $data->id]) }}" method="POST">
                            @csrf
                            <button type="submit" class="btn btn-danger">削除</button>
                        </form>
                    </div>
                @endforeach
            </div>

        </div>
    </div>
</div>

@include('parts.footer')
