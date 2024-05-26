@include('parts.header')


<style>
.card__title {
    overflow: hidden;
    position: relative;
    text-overflow: ellipsis;
    transition: color .2s ease;
    white-space: wrap;
    width: 100%;
    height: auto;
    z-index: 5;
}
.card__title-wrap {
    color: #000;
    display: flex;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.429;
    margin: 0px 0 0 0;
    transition: color .2s ease;
    width: 100%
}
.card__title-wrap500 {
    color: #000;
    display: flex;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.429;
    margin: 0px 0 0 0;
    transition: color .2s ease;
    width: 100%
}

</style>

  <div class="container py-2">
    <div class="section-header">
      <h2 class="section-header__title">
        <!--<span class="icon-market icon-market_om section-header__icon"></span>-->
        <span class="section-ttl">商品アイテム一覧</span>
      </h2>
    </div>

    <div class="d-flex flex-column products-wrap">
            <section class="page__section" style="padding: 0;">
                <div class="d-flex flex-column products-wrap">
                    <ul
                        class="row products products-grid small-block-grid-2 medium-block-grid-3 large-block-grid-4 xlarge-block-grid-6 xxlarge-block-grid-6">
						
                        @foreach ( $lists as $list )
                        <li class="product-impressions card card_objects" data-id="" data-sku="" data-category="" data-price="" style="border:none;">
                            <div class="card__inner">
                                <a href="{{ route('product.index',['id'=>$list['id']]) }}" title="">
                                    <div class="card__thumb_item is-loaded" style="background-color: #fff;">

                                        <img class="card-thumb__img" width="466" height="580"
                                            src="{{ asset('storage/image/detail/') }}/{{ $list['thumbnail_folder'] }}/{{ $list['image_name'] }}" alt="">

                                    </div>

                                    <div class="card__title-wrap500">{{ $list['brand'] }}</div>
                                    
                                    <div class="card__title-wrap500">
                                        <div class="card__title">{{ $list['name'] }}</div>
                                    </div>
                                    <div class="card__title-wrap" style="color: #e62b4f">¥{{ number_format($list['min_price']) }}円〜</div>
                                    
            
                                    
                                </a>
                            </div>
                        </li>
                        @endforeach
      
      
                    </ul>
                </div>
            </section>
        </div>
    </div>

    @include('parts.footer')