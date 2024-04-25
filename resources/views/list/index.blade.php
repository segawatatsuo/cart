@include('parts.header')




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
                                    <div class="card__thumb is-loaded">
                                        <img class="card-thumb__img" width="466" height="580"
                                            src="{{ asset('storage/image/detail/') }}/{{ $list['thumbnail_folder'] }}/{{ $list['image_name'] }}" alt="">
                                    </div>
                                    <div class="card__title-wrap">
                                        <div class="card__title">{{ $list['name'] }}</div>
                                    </div>
                                </a>
                            </div>
                        </li>
                        @endforeach
      
      
                        <!--
                        <li class="product-impressions card card_objects" data-id="1863038" data-sku="133720"
                            data-category="Mockups/Packaging Mockups/Jerrycan Mockups" data-price="14.99" style="border:none;">
                            <div class="card__inner">
                                <a class="card__link-overlay js-card-popup"
                                    href="https://yellowimages.com/stock/jerrycan-mockup-133720"
                                    title="Jerrycan Mockup"></a>
                                <a class="card__link js-card-popup"
                                    href="https://yellowimages.com/stock/jerrycan-mockup-133720" title="Jerrycan Mockup">
                                    <div class="card__thumb is-loaded"
                                        data-tn1="https://yi-files.s3.eu-west-1.amazonaws.com/products/1863000/1863038/3003587-cover.jpg"
                                        data-tn2="https://yi-files.s3.eu-west-1.amazonaws.com/products/1863000/1863038/3003586-cover.jpg">
                                        <div class="card__background"
                                            style="background-image: url(&quot;https://yi-files.s3.eu-west-1.amazonaws.com/products/1863000/1863038/3003586-cover.jpg&quot;);">
                                        </div>
      
                                        <img class="card-thumb__img" width="466" height="580"
                                            src="./Mockups by Yellow Images 😋 Download Premium PSD Product Mockups 🔥 Templates_files/3003587-cover.jpg"
                                            alt="Jerrycan Mockup">
                                    </div>
      
                                    <div class="card__title-wrap">
                                        <div class="card__title">Jerrycan Mockup</div>
                                        <div class="card__type"></div>
                                    </div>
                                </a>
      
                            </div>
                        </li>
      
      
      
                        <li class="product-impressions card card_objects" data-id="1862593" data-sku="133687"
                            data-category="Mockups/Apparel Mockups/Jacket Mockups" data-price="14.99" style="border:none;">
                            <div class="card__inner">
                                <a class="card__link-overlay js-card-popup"
                                    href="https://yellowimages.com/stock/mens-full-zip-running-jacket-mockup-133687"
                                    title="Men’s Full Zip Running Jacket Mockup"></a>
                                <a class="card__link js-card-popup"
                                    href="https://yellowimages.com/stock/mens-full-zip-running-jacket-mockup-133687"
                                    title="Men’s Full Zip Running Jacket Mockup">
                                    <div class="card__thumb is-loaded"
                                        data-tn1="https://yi-files.s3.eu-west-1.amazonaws.com/products/1862000/1862593/3002984-cover.jpg"
                                        data-tn2="https://yi-files.s3.eu-west-1.amazonaws.com/products/1862000/1862593/3002983-cover.jpg">
                                        <div class="card__background"
                                            style="background-image: url(&quot;https://yi-files.s3.eu-west-1.amazonaws.com/products/1862000/1862593/3002983-cover.jpg&quot;);">
                                        </div>
      
                                        <img class="card-thumb__img" width="466" height="580"
                                            src="./Mockups by Yellow Images 😋 Download Premium PSD Product Mockups 🔥 Templates_files/3002984-cover.jpg"
                                            alt="Men’s Full Zip Running Jacket Mockup">
                                    </div>
      
                                    <div class="card__title-wrap">
                                        <div class="card__title">Men’s Full Zip Running Jacket Mockup</div>
                                        <div class="card__type"></div>
                                    </div>
                                </a>
      
                            </div>
                        </li>
      
      
                        <li class="product-impressions card card_objects" data-id="1862538" data-sku="133685"
                            data-category="Mockups/Vehicle Mockups/Car Mockups/Van Mockups" data-price="14.99" style="border:none;">
                            <div class="card__inner">
                                <a class="card__link-overlay js-card-popup"
                                    href="https://yellowimages.com/stock/panel-van-mockup-front-view-133685"
                                    title="Panel Van Mockup - Front View"></a>
                                <a class="card__link js-card-popup"
                                    href="https://yellowimages.com/stock/panel-van-mockup-front-view-133685"
                                    title="Panel Van Mockup - Front View">
                                    <div class="card__thumb is-loaded"
                                        data-tn1="https://yi-files.s3.eu-west-1.amazonaws.com/products/1862000/1862538/3002954-cover.jpg"
                                        data-tn2="https://yi-files.s3.eu-west-1.amazonaws.com/products/1862000/1862538/3002953-cover.jpg">
                                        <div class="card__background"
                                            style="background-image: url(&quot;https://yi-files.s3.eu-west-1.amazonaws.com/products/1862000/1862538/3002953-cover.jpg&quot;);">
                                        </div>
      
                                        <img class="card-thumb__img" width="466" height="580"
                                            src="./Mockups by Yellow Images 😋 Download Premium PSD Product Mockups 🔥 Templates_files/3002954-cover.jpg"
                                            alt="Panel Van Mockup - Front View">
                                    </div>
      
                                    <div class="card__title-wrap">
                                        <div class="card__title">Panel Van Mockup - Front View</div>
                                        <div class="card__type"></div>
                                    </div>
                                </a>
      
                            </div>
                        </li>
      
      
      
      
                        <li class="product-impressions card card_objects" data-id="1861986" data-sku="133634"
                            data-category="Mockups/Vehicle Mockups/Car Mockups/Van Mockups" data-price="14.99" style="border:none;">
                            <div class="card__inner">
                                <a class="card__link-overlay js-card-popup"
                                    href="https://yellowimages.com/stock/panel-van-mockup-back-view-133634"
                                    title="Panel Van Mockup - Back View"></a>
                                <a class="card__link js-card-popup"
                                    href="https://yellowimages.com/stock/panel-van-mockup-back-view-133634"
                                    title="Panel Van Mockup - Back View">
                                    <div class="card__thumb is-loaded"
                                        data-tn1="https://yi-files.s3.eu-west-1.amazonaws.com/products/1861000/1861986/3001932-cover.jpg"
                                        data-tn2="https://yi-files.s3.eu-west-1.amazonaws.com/products/1861000/1861986/3001931-cover.jpg">
                                        <div class="card__background"
                                            style="background-image: url(&quot;https://yi-files.s3.eu-west-1.amazonaws.com/products/1861000/1861986/3001931-cover.jpg&quot;);">
                                        </div>
      
                                        <img class="card-thumb__img" width="466" height="580"
                                            src="./Mockups by Yellow Images 😋 Download Premium PSD Product Mockups 🔥 Templates_files/3001932-cover.jpg"
                                            alt="Panel Van Mockup - Back View">
                                    </div>
      
                                    <div class="card__title-wrap">
                                        <div class="card__title">Panel Van Mockup - Back View</div>
                                        <div class="card__type"></div>
                                    </div>
                                </a>
      
                            </div>
                        </li>
      
      
      
                        <li class="product-impressions card card_objects" data-id="1861963" data-sku="133632"
                            data-category="Mockups/Vehicle Mockups/Bus Mockups" data-price="14.99" style="border:none;">
                            <div class="card__inner">
                                <a class="card__link-overlay js-card-popup"
                                    href="https://yellowimages.com/stock/bus-mockup-half-side-view-133632"
                                    title="Bus Mockup - Half Side View"></a>
                                <a class="card__link js-card-popup"
                                    href="https://yellowimages.com/stock/bus-mockup-half-side-view-133632"
                                    title="Bus Mockup - Half Side View">
                                    <div class="card__thumb is-loaded"
                                        data-tn1="https://yi-files.s3.eu-west-1.amazonaws.com/products/1861000/1861963/3001896-cover.jpg"
                                        data-tn2="https://yi-files.s3.eu-west-1.amazonaws.com/products/1861000/1861963/3001895-cover.jpg">
                                        <div class="card__background"
                                            style="background-image: url(&quot;https://yi-files.s3.eu-west-1.amazonaws.com/products/1861000/1861963/3001895-cover.jpg&quot;);">
                                        </div>
      
                                        <img class="card-thumb__img" width="466" height="580"
                                            src="./Mockups by Yellow Images 😋 Download Premium PSD Product Mockups 🔥 Templates_files/3001896-cover.jpg"
                                            alt="Bus Mockup - Half Side View">
                                    </div>
      
                                    <div class="card__title-wrap">
                                        <div class="card__title">Bus Mockup - Half Side View</div>
                                        <div class="card__type"></div>
                                    </div>
                                </a>
      
                            </div>
                        </li>
      
      
      
      
                        <li class="product-impressions card card_objects" data-id="1861690" data-sku="133608"
                            data-category="Mockups/Apparel Mockups/Shirt Mockups" data-price="14.99" style="border:none;">
                            <div class="card__inner">
                                <a class="card__link-overlay js-card-popup"
                                    href="https://yellowimages.com/stock/mens-shirt-mockup-133608"
                                    title="Men&#39;s Shirt Mockup"></a>
                                <a class="card__link js-card-popup"
                                    href="https://yellowimages.com/stock/mens-shirt-mockup-133608"
                                    title="Men&#39;s Shirt Mockup">
                                    <div class="card__thumb is-loaded"
                                        data-tn1="https://yi-files.s3.eu-west-1.amazonaws.com/products/1861000/1861690/3001245-cover.jpg"
                                        data-tn2="https://yi-files.s3.eu-west-1.amazonaws.com/products/1861000/1861690/3001244-cover.jpg">
                                        <div class="card__background"
                                            style="background-image: url(&quot;https://yi-files.s3.eu-west-1.amazonaws.com/products/1861000/1861690/3001244-cover.jpg&quot;);">
                                        </div>
      
                                        <img class="card-thumb__img" width="466" height="580"
                                            src="./Mockups by Yellow Images 😋 Download Premium PSD Product Mockups 🔥 Templates_files/3001245-cover.jpg"
                                            alt="Men&#39;s Shirt Mockup">
                                    </div>
      
                                    <div class="card__title-wrap">
                                        <div class="card__title">Men's Shirt Mockup</div>
                                        <div class="card__type"></div>
                                    </div>
                                </a>
      
                            </div>
                        </li>
      
      
      
      
      
      
                        <li class="product-impressions card card_objects" data-id="1861680" data-sku="133607"
                            data-category="Mockups/Packaging Mockups/Bottle Mockups" data-price="14.99" style="border:none;">
                            <div class="card__inner">
                                <a class="card__link-overlay js-card-popup"
                                    href="https://yellowimages.com/stock/amber-bottle-mockup-133607"
                                    title="Amber Bottle Mockup"></a>
                                <a class="card__link js-card-popup"
                                    href="https://yellowimages.com/stock/amber-bottle-mockup-133607"
                                    title="Amber Bottle Mockup">
                                    <div class="card__thumb is-loaded"
                                        data-tn1="https://yi-files.s3.eu-west-1.amazonaws.com/products/1861000/1861680/3001227-cover.jpg"
                                        data-tn2="https://yi-files.s3.eu-west-1.amazonaws.com/products/1861000/1861680/3001226-cover.jpg">
                                        <div class="card__background"
                                            style="background-image: url(&quot;https://yi-files.s3.eu-west-1.amazonaws.com/products/1861000/1861680/3001226-cover.jpg&quot;);">
                                        </div>
      
                                        <img class="card-thumb__img" width="466" height="580"
                                            src="./Mockups by Yellow Images 😋 Download Premium PSD Product Mockups 🔥 Templates_files/3001227-cover.jpg"
                                            alt="Amber Bottle Mockup">
                                    </div>
      
                                    <div class="card__title-wrap">
                                        <div class="card__title">Amber Bottle Mockup</div>
                                        <div class="card__type"></div>
                                    </div>
                                </a>
      
                            </div>
                        </li>
      
                        <li class="product-impressions card card_objects" data-id="1861668" data-sku="133604"
                            data-category="Mockups/Packaging Mockups/Bottle Mockups" data-price="14.99" style="border:none;">
                            <div class="card__inner">
                                <a class="card__link-overlay js-card-popup"
                                    href="https://yellowimages.com/stock/clear-bottle-mockup-133604"
                                    title="Clear Bottle Mockup"></a>
                                <a class="card__link js-card-popup"
                                    href="https://yellowimages.com/stock/clear-bottle-mockup-133604"
                                    title="Clear Bottle Mockup">
                                    <div class="card__thumb is-loaded"
                                        data-tn1="https://yi-files.s3.eu-west-1.amazonaws.com/products/1861000/1861668/3001179-cover.jpg"
                                        data-tn2="https://yi-files.s3.eu-west-1.amazonaws.com/products/1861000/1861668/3001178-cover.jpg">
                                        <div class="card__background"
                                            style="background-image: url(&quot;https://yi-files.s3.eu-west-1.amazonaws.com/products/1861000/1861668/3001178-cover.jpg&quot;);">
                                        </div>
      
                                        <img class="card-thumb__img" width="466" height="580"
                                            src="./Mockups by Yellow Images 😋 Download Premium PSD Product Mockups 🔥 Templates_files/3001179-cover.jpg"
                                            alt="Clear Bottle Mockup">
                                    </div>
      
                                    <div class="card__title-wrap">
                                        <div class="card__title">Clear Bottle Mockup</div>
                                        <div class="card__type"></div>
                                    </div>
                                </a>
                            </div>
                        </li>
      
      
      
      
                        <li class="product-impressions card card_objects" data-id="1861660" data-sku="133603"
                            data-category="Mockups/Packaging Mockups/Bottle Mockups" data-price="14.99" style="border:none;">
                            <div class="card__inner">
                                <a class="card__link-overlay js-card-popup"
                                    href="https://yellowimages.com/stock/clear-cosmetic-bottle-mockup-133603"
                                    title="Clear Cosmetic Bottle Mockup"></a>
                                <a class="card__link js-card-popup"
                                    href="https://yellowimages.com/stock/clear-cosmetic-bottle-mockup-133603"
                                    title="Clear Cosmetic Bottle Mockup">
                                    <div class="card__thumb is-loaded"
                                        data-tn1="https://yi-files.s3.eu-west-1.amazonaws.com/products/1861000/1861660/3001167-cover.jpg"
                                        data-tn2="https://yi-files.s3.eu-west-1.amazonaws.com/products/1861000/1861660/3001166-cover.jpg">
                                        <div class="card__background"
                                            style="background-image: url(&quot;https://yi-files.s3.eu-west-1.amazonaws.com/products/1861000/1861660/3001166-cover.jpg&quot;);">
                                        </div>
      
                                        <img class="card-thumb__img" width="466" height="580"
                                            src="./Mockups by Yellow Images 😋 Download Premium PSD Product Mockups 🔥 Templates_files/3001167-cover.jpg"
                                            alt="Clear Cosmetic Bottle Mockup">
                                    </div>
      
                                    <div class="card__title-wrap">
                                        <div class="card__title">Clear Cosmetic Bottle Mockup</div>
                                        <div class="card__type"></div>
                                    </div>
                                </a>
                            </div>
                        </li>
      
      
      
      
                        <li class="product-impressions card card_objects" data-id="1861651" data-sku="133601"
                            data-category="Mockups/Apparel Mockups/Shirt Mockups" data-price="14.99" style="border:none;">
                            <div class="card__inner">
                                <a class="card__link-overlay js-card-popup"
                                    href="https://yellowimages.com/stock/mens-shirt-mockup-133601"
                                    title="Men&#39;s Shirt Mockup"></a>
                                <a class="card__link js-card-popup"
                                    href="https://yellowimages.com/stock/mens-shirt-mockup-133601"
                                    title="Men&#39;s Shirt Mockup">
                                    <div class="card__thumb is-loaded"
                                        data-tn1="https://yi-files.s3.eu-west-1.amazonaws.com/products/1861000/1861651/3001137-cover.jpg"
                                        data-tn2="https://yi-files.s3.eu-west-1.amazonaws.com/products/1861000/1861651/3001136-cover.jpg">
                                        <div class="card__background"
                                            style="background-image: url(&quot;https://yi-files.s3.eu-west-1.amazonaws.com/products/1861000/1861651/3001136-cover.jpg&quot;);">
                                        </div>
      
                                        <img class="card-thumb__img" width="466" height="580"
                                            src="./Mockups by Yellow Images 😋 Download Premium PSD Product Mockups 🔥 Templates_files/3001137-cover.jpg"
                                            alt="Men&#39;s Shirt Mockup">
                                    </div>
      
                                    <div class="card__title-wrap">
                                        <div class="card__title">Men's Shirt Mockup</div>
                                        <div class="card__type"></div>
                                    </div>
                                </a>
                            </div>
                        </li>
      
      
      
      
                        <li class="product-impressions card card_objects" data-id="1861427" data-sku="133592"
                            data-category="Mockups/Apparel Mockups/Jersey Mockups" data-price="14.99" style="border:none;">
                            <div class="card__inner">
                                <a class="card__link-overlay js-card-popup"
                                    href="https://yellowimages.com/stock/soccer-jersey-mockup-133592"
                                    title="Soccer Jersey Mockup"></a>
                                <a class="card__link js-card-popup"
                                    href="https://yellowimages.com/stock/soccer-jersey-mockup-133592"
                                    title="Soccer Jersey Mockup">
                                    <div class="card__thumb is-loaded"
                                        data-tn1="https://yi-files.s3.eu-west-1.amazonaws.com/products/1861000/1861427/3000954-cover.jpg"
                                        data-tn2="https://yi-files.s3.eu-west-1.amazonaws.com/products/1861000/1861427/3000953-cover.jpg">
                                        <div class="card__background"
                                            style="background-image: url(&quot;https://yi-files.s3.eu-west-1.amazonaws.com/products/1861000/1861427/3000953-cover.jpg&quot;);">
                                        </div>
      
                                        <img class="card-thumb__img" width="466" height="580"
                                            src="./Mockups by Yellow Images 😋 Download Premium PSD Product Mockups 🔥 Templates_files/3000954-cover.jpg"
                                            alt="Soccer Jersey Mockup">
                                    </div>
      
                                    <div class="card__title-wrap">
                                        <div class="card__title">Soccer Jersey Mockup</div>
                                        <div class="card__type"></div>
                                    </div>
                                </a>
      
                            </div>
                        </li>
      
      
      
      
                        <li class="product-impressions card card_objects" data-id="1861418" data-sku="133591"
                            data-category="Mockups/Packaging Mockups/Bottle Mockups" data-price="14.99" style="border:none;">
                            <div class="card__inner">
                                <a class="card__link-overlay js-card-popup"
                                    href="https://yellowimages.com/stock/frosted-cosmetic-bottle-mockup-133591"
                                    title="Frosted Cosmetic Bottle Mockup"></a>
                                <a class="card__link js-card-popup"
                                    href="https://yellowimages.com/stock/frosted-cosmetic-bottle-mockup-133591"
                                    title="Frosted Cosmetic Bottle Mockup">
                                    <div class="card__thumb is-loaded"
                                        data-tn1="https://yi-files.s3.eu-west-1.amazonaws.com/products/1861000/1861418/3000942-cover.jpg"
                                        data-tn2="https://yi-files.s3.eu-west-1.amazonaws.com/products/1861000/1861418/3000941-cover.jpg">
                                        <div class="card__background"
                                            style="background-image: url(&quot;https://yi-files.s3.eu-west-1.amazonaws.com/products/1861000/1861418/3000941-cover.jpg&quot;);">
                                        </div>
      
                                        <img class="card-thumb__img" width="466" height="580"
                                            src="./Mockups by Yellow Images 😋 Download Premium PSD Product Mockups 🔥 Templates_files/3000942-cover.jpg"
                                            alt="Frosted Cosmetic Bottle Mockup">
                                    </div>
      
                                    <div class="card__title-wrap">
                                        <div class="card__title">Frosted Cosmetic Bottle Mockup</div>
                                        <div class="card__type"></div>
                                    </div>
                                </a>
       
                            </div>
                        </li>
      
      
      
      
                        <li class="product-impressions card card_objects" data-id="1861413" data-sku="133590"
                            data-category="Mockups/Packaging Mockups/Bottle Mockups" data-price="14.99" style="border:none;">
                            <div class="card__inner">
                                <a class="card__link-overlay js-card-popup"
                                    href="https://yellowimages.com/stock/blue-bottle-mockup-133590"
                                    title="Blue Bottle Mockup"></a>
                                <a class="card__link js-card-popup"
                                    href="https://yellowimages.com/stock/blue-bottle-mockup-133590"
                                    title="Blue Bottle Mockup">
                                    <div class="card__thumb is-loaded"
                                        data-tn1="https://yi-files.s3.eu-west-1.amazonaws.com/products/1861000/1861413/3000924-cover.jpg"
                                        data-tn2="https://yi-files.s3.eu-west-1.amazonaws.com/products/1861000/1861413/3000923-cover.jpg">
                                        <div class="card__background"
                                            style="background-image: url(&quot;https://yi-files.s3.eu-west-1.amazonaws.com/products/1861000/1861413/3000923-cover.jpg&quot;);">
                                        </div>
      
                                        <img class="card-thumb__img" width="466" height="580"
                                            src="./Mockups by Yellow Images 😋 Download Premium PSD Product Mockups 🔥 Templates_files/3000924-cover.jpg"
                                            alt="Blue Bottle Mockup">
                                    </div>
      
                                    <div class="card__title-wrap">
                                        <div class="card__title">Blue Bottle Mockup</div>
                                        <div class="card__type"></div>
                                    </div>
                                </a>
      
                            </div>
                        </li>
      
      
      
      
                        <li class="product-impressions card card_objects" data-id="1861408" data-sku="133589"
                            data-category="Mockups/Apparel Mockups/Jersey Mockups" data-price="14.99" style="border:none;">
                            <div class="card__inner">
                                <a class="card__link-overlay js-card-popup"
                                    href="https://yellowimages.com/stock/soccer-jersey-mockup-133589"
                                    title="Soccer Jersey Mockup"></a>
                                <a class="card__link js-card-popup"
                                    href="https://yellowimages.com/stock/soccer-jersey-mockup-133589"
                                    title="Soccer Jersey Mockup">
                                    <div class="card__thumb is-loaded"
                                        data-tn1="https://yi-files.s3.eu-west-1.amazonaws.com/products/1861000/1861408/3000906-cover.jpg"
                                        data-tn2="https://yi-files.s3.eu-west-1.amazonaws.com/products/1861000/1861408/3000905-cover.jpg">
                                        <div class="card__background"
                                            style="background-image: url(&quot;https://yi-files.s3.eu-west-1.amazonaws.com/products/1861000/1861408/3000905-cover.jpg&quot;);">
                                        </div>
      
                                        <img class="card-thumb__img" width="466" height="580"
                                            src="./Mockups by Yellow Images 😋 Download Premium PSD Product Mockups 🔥 Templates_files/3000906-cover.jpg"
                                            alt="Soccer Jersey Mockup">
                                    </div>
      
                                    <div class="card__title-wrap">
                                        <div class="card__title">Soccer Jersey Mockup</div>
                                        <div class="card__type"></div>
                                    </div>
                                </a>
      
                            </div>
                        </li>
      
      
      
      
                        <li class="product-impressions card card_objects" data-id="1861402" data-sku="133588"
                            data-category="Mockups/Packaging Mockups/Bottle Mockups" data-price="14.99" style="border:none;">
                            <div class="card__inner">
                                <a class="card__link-overlay js-card-popup"
                                    href="https://yellowimages.com/stock/glossy-cosmetic-bottle-mockup-133588"
                                    title="Glossy Cosmetic Bottle Mockup"></a>
                                <a class="card__link js-card-popup"
                                    href="https://yellowimages.com/stock/glossy-cosmetic-bottle-mockup-133588"
                                    title="Glossy Cosmetic Bottle Mockup">
                                    <div class="card__thumb is-loaded"
                                        data-tn1="https://yi-files.s3.eu-west-1.amazonaws.com/products/1861000/1861402/3000894-cover.jpg"
                                        data-tn2="https://yi-files.s3.eu-west-1.amazonaws.com/products/1861000/1861402/3000893-cover.jpg">
                                        <div class="card__background"
                                            style="background-image: url(&quot;https://yi-files.s3.eu-west-1.amazonaws.com/products/1861000/1861402/3000893-cover.jpg&quot;);">
                                        </div>
      
                                        <img class="card-thumb__img" width="466" height="580"
                                            src="./Mockups by Yellow Images 😋 Download Premium PSD Product Mockups 🔥 Templates_files/3000894-cover.jpg"
                                            alt="Glossy Cosmetic Bottle Mockup">
                                    </div>
      
                                    <div class="card__title-wrap">
                                        <div class="card__title">Glossy Cosmetic Bottle Mockup</div>
                                        <div class="card__type"></div>
                                    </div>
                                </a>
      
                            </div>
                        </li>
      
      
      
      
      
      
                        <li class="product-impressions card card_objects" data-id="1857639" data-sku="133283"
                            data-category="Mockups/Packaging Mockups/Bottle Mockups" data-price="14.99" style="border:none;">
                            <div class="card__inner">
                                <a class="card__link-overlay js-card-popup"
                                    href="https://yellowimages.com/stock/matte-metallic-nail-polish-bottle-mockup-133283"
                                    title="Matte Metallic Nail Polish Bottle Mockup"></a>
                                <a class="card__link js-card-popup"
                                    href="https://yellowimages.com/stock/matte-metallic-nail-polish-bottle-mockup-133283"
                                    title="Matte Metallic Nail Polish Bottle Mockup">
                                    <div class="card__thumb is-loaded"
                                        data-tn1="https://yi-files.s3.eu-west-1.amazonaws.com/products/1857000/1857639/2995481-cover.jpg"
                                        data-tn2="https://yi-files.s3.eu-west-1.amazonaws.com/products/1857000/1857639/2995480-cover.jpg">
                                        <div class="card__background"
                                            style="background-image: url(&quot;https://yi-files.s3.eu-west-1.amazonaws.com/products/1857000/1857639/2995480-cover.jpg&quot;);">
                                        </div>
      
                                        <img class="card-thumb__img" width="466" height="580"
                                            src="./Mockups by Yellow Images 😋 Download Premium PSD Product Mockups 🔥 Templates_files/2995481-cover.jpg"
                                            alt="Matte Metallic Nail Polish Bottle Mockup">
                                    </div>
      
                                    <div class="card__title-wrap">
                                        <div class="card__title">Matte Metallic Nail Polish Bottle Mockup</div>
                                        <div class="card__type"></div>
                                    </div>
                                </a>
      
                            </div>
                        </li>
      
      
      
      
                        <li class="product-impressions card card_objects" data-id="1859919" data-sku="133482"
                            data-category="Mockups/Packaging Mockups/Jar Mockups" data-price="14.99" style="border:none;">
                            <div class="card__inner">
                                <a class="card__link-overlay js-card-popup"
                                    href="https://yellowimages.com/stock/glossy-insulated-food-jar-mockup-133482"
                                    title="Glossy Insulated Food Jar Mockup"></a>
                                <a class="card__link js-card-popup"
                                    href="https://yellowimages.com/stock/glossy-insulated-food-jar-mockup-133482"
                                    title="Glossy Insulated Food Jar Mockup">
                                    <div class="card__thumb is-loaded"
                                        data-tn1="https://yi-files.s3.eu-west-1.amazonaws.com/products/1859000/1859919/2998965-cover.jpg"
                                        data-tn2="https://yi-files.s3.eu-west-1.amazonaws.com/products/1859000/1859919/2998964-cover.jpg">
                                        <div class="card__background"
                                            style="background-image: url(&quot;https://yi-files.s3.eu-west-1.amazonaws.com/products/1859000/1859919/2998964-cover.jpg&quot;);">
                                        </div>
      
                                        <img class="card-thumb__img" width="466" height="580"
                                            src="./Mockups by Yellow Images 😋 Download Premium PSD Product Mockups 🔥 Templates_files/2998965-cover.jpg"
                                            alt="Glossy Insulated Food Jar Mockup">
                                    </div>
      
                                    <div class="card__title-wrap">
                                        <div class="card__title">Glossy Insulated Food Jar Mockup</div>
                                        <div class="card__type"></div>
                                    </div>
                                </a>
                        </li>
                    -->
                    </ul>
                </div>
            </section>
        </div>
    </div>

    @include('parts.footer')