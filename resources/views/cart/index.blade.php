<?php
/*
foreach ($_POST as $key => $value) {
  print($key."=>".$value);
  print("<br>");
}
*/
//$option=$_POST;
?>

<div>
        @foreach($cartCollection as $data)
          <div>
           {{ $data->id }}
           {{ $data->name }}
           {{ $data->price }}
           {{ $data->quantity }}

           @foreach($data->attributes as $key=>$val)
           <p>
            {{ $key }}
            {{ $val }}
           </p>
           @endforeach
           <form action="{{ route('cart.destroy', ['name'=>$data->name]) }}" method="POST">
            @csrf
            <button type="submit" class="btn btn-danger">削除</button>
          </form>
          </div>
        @endforeach
</div>

