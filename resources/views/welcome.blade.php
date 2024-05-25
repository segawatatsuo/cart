@include('parts.header')

<style>
	.soccerball{
    width: 40px;
    height: 40px;
    background-image: url(http://127.0.0.1:8000/storage/image/ball/soccerball.png);
	background-image: url(https://uniformlab.jp/cart/public/storage/image/ball/soccerball.png);
    background-size: cover;
    background-repeat: no-repeat;
  }
  .volleyball{
    width: 40px;
    height: 40px;
    background-image: url(http://127.0.0.1:8000/storage/image/ball/volleyball.png);
	background-image: url(https://uniformlab.jp/cart/public/storage/image/ball/volleyball.png);
    background-size: cover;
    background-repeat: no-repeat;
  }
  .basketball{
    width: 40px;
    height: 40px;
    background-image: url(http://127.0.0.1:8000/storage/image/ball/basketball.png);
	background-image: url(https://uniformlab.jp/cart/public/storage/image/ball/basketball.png);
    background-size: cover;
    background-repeat: no-repeat;
  }
  .baseball{
    width: 40px;
    height: 40px;
    background-image: url(http://127.0.0.1:8000/storage/image/ball/baseball.png);
	background-image: url(https://uniformlab.jp/cart/public/storage/image/ball/baseball.png);
    background-size: cover;
    background-repeat: no-repeat;
  }

</style>

    <!-- TOP -->
	<div class="container py-3">
		<div class="top">
		  <h1 class="text-body-emphasis">オリジナルデザインのチームウェアを作ろう<br>
			<span class="grey">1枚から低価格で製作します</span>
		  </h1>
		</div>
	</div>
	<!-- TOP -->
	
	  <!--slide show-->
	  <div class="home-slider-wrap">
		<div class="container">
		  <div id="home-slider" class="swiper home-slider swiper_initialized swiper_horizontal swiper_backface-hidden">
			<div class="swiper__wrapper" style="transform: translate3d(0px, 0px, 0px);">
			  <div class="d-flex column swiper__slide swiper__slide_active" id="main-om-cat-banner">
				<div class="tile home-slider__tile home-slider__tile_om">
				  <div class="tile__suptitle">オリジナル各種競技Tシャツ</div>
	
				  <div class="tile__title">各種競技用 <br>チームTシャツ / <span id="mockups-cats" class="home-slider__cats"><span
						id="om-main-slider-ap-title" class=" is-active" style="color: #FFA803;">Soccker</span><span
						id="om-main-slider-pk-title" class="" style="color: #F8434A;">Volleyball</span><span
						id="om-main-slider-vh-title" class="" style="color: #7A18FF;">Basketball</span><span
						id="om-main-slider-dv-title" class="" style="color: #3ED5F8;">Baseball</span></span></div>
	
				  <div class="tile__text">チーム専用のオリジナルデザインTシャツ作成できます。<br>練習用、応援用に最適！</div>
				  <div class="home-slider__middle">
					<p><span>¥623〜</span></p>
					<p>カラー、サイズ、素材からお選びください。 <br>デザイン自由！</p>
					<div class="d-flex home-slider__bullets">
					  <!--
						<div class="home-slider__bullet is-active" style="color: #FFA803;"
						data-url="/mockups/category/apparel-mockups"></div>
						<div class="home-slider__bullet" style="color: #F8434A;"
						data-url="/mockups/category/packaging-mockups"></div>
						<div class="home-slider__bullet" style="color: #7A18FF;" data-url="/mockups/category/vehicle-mockups">
					  </div>
					  <div class="home-slider__bullet" style="color: #3ED5F8;" data-url="/mockups/category/device-mockups">
					  -->
						<div class="home-slider__bullet is-active soccerball"
						data-url=""></div>

					  <div class="home-slider__bullet volleyball" style="color: #F8434A;"
						data-url="/mockups/category/packaging-mockups"></div>

					  
						<div class="home-slider__bullet basketball" style="color: #7A18FF;" data-url="/mockups/category/vehicle-mockups">
					  </div>
					  
					  <div class="home-slider__bullet baseball" style="color: #3ED5F8;" data-url="/mockups/category/device-mockups">
					  </div>
					</div>
				  </div>


				  <div class="home-slider__mockups">

					<img id="om-main-slider-ap-img" class="tile__image home-slider__image home-slider__image_dv" width="271"
					  height="302" draggable="false" loading="lazy"
					  src="{{ asset('storage/image/top_banner/READY_TO_USE/soccer.png') }}"
					  srcset="{{ asset('storage/image/top_banner/READY_TO_USE/soccer.png') }}"
					  alt="サッカー">

					<img id="om-main-slider-pk-img" class="tile__image home-slider__image home-slider__image_dv d-none"
					  width="271" height="302" draggable="false" loading="lazy"
					  src="{{ asset('storage/image/top_banner/READY_TO_USE/volleyball.png') }}"
					  srcset="{{ asset('storage/image/top_banner/READY_TO_USE/volleyball.png') }}"
					  alt="バレーボール">

					<img id="om-main-slider-vh-img" class="tile__image home-slider__image home-slider__image_dv d-none"
					  width="271" height="302" draggable="false" loading="lazy"
					  src="{{ asset('storage/image/top_banner/READY_TO_USE/basket.png') }}"
					  srcset="{{ asset('storage/image/top_banner/READY_TO_USE/basket.png') }}"
					  alt="バスケットボール">
					
					  <img id="om-main-slider-dv-img" class="tile__image home-slider__image home-slider__image_dv d-none"
					  width="271" height="302" draggable="false" loading="lazy"
					  src="{{ asset('storage/image/top_banner/READY_TO_USE/baseball.png') }}"
					  srcset="{{ asset('storage/image/top_banner/READY_TO_USE/baseball.png') }}"
					  alt="野球">
				  </div>
	
				  <a id="mockups-button" class="pill pill_black"
					href="">こちら</a>
				  <a id="mockups-overlay" class="home-slider__link"
					href=""
					aria-label="Explore Object Mockups"></a>
				</div>
			  </div>


			  
			  <div class="d-flex column swiper__slide swiper__slide_next" id="provisual-main-slider">
				<a href="" class="tile home-slider__tile home-slider__tile_provisual" target="_blank">
				  <div class="tile__suptitle">オリジナルイベントTシャツ</div>
	
				  <div class="tile__title">学生必見!! <br>イベントTシャツ</Table></div>
	
				  <div class="tile__text" style="color: white">クラT、部活T、体育祭<br>文化祭、サークル、各種イベント</div>
				  <div class="pill pill_black">こちら</div>
				  <img class="tile__image" width="259" height="350" draggable="false"
					src="{{ asset('storage/image/top_banner/classt/classt.png') }}"
					srcset="{{ asset('storage/image/top_banner/classt/classt.png') }}"
					alt="ProVisual.app is now available!" loading="lazy">
				</a>
			  </div>



			  <div class="d-flex column swiper__slide" id="png-main-slider">
				<a href="" class="tile home-slider__tile home-slider__tile_png">
				  <div class="tile__suptitle">Spin. Rotate. Create.</div>
	
				  <div class="tile__title">PNG Images 360° <br>and Static</div>
	
				  <div class="tile__text">High quality PNG images with <br>perfect transparency</div>
				  <div class="pill pill_black pill_round">
					<svg width="24" height="24">
					  <use xlink:href="#arrow-right"></use>
					</svg>
				  </div>
	
				  <img class="tile__image" width="270" height="304" draggable="false"
					src=""
					srcset="{{ asset('storage/image/top_banner/Baseball-Jersey-Front-Three-Quarters.png') }}"
					alt="" loading="lazy">
				</a>
			  </div>


			  
			  <div class="d-flex column swiper__slide" id="cs-main-slider">
				<a href="" class="tile home-slider__tile home-slider__tile_cs">
				  <div class="tile__suptitle">Graphic assets</div>
	
				  <div class="tile__title">Creative <br>Store</div>
	
				  <div class="tile__text">Fonts, Graphics, Textures, <br>UI Kits, etc.</div>
				  <div class="pill pill_black pill_round">
					<svg width="24" height="24">
					  <use xlink:href="#arrow-right"></use>
					</svg>
				  </div>
	
				  <img class="tile__image" width="299" height="335" draggable="false"
					src=""
					srcset="{{ asset('storage/image/top_banner/baseball-T.png') }}"
					alt="" loading="lazy">
				</a>
			  </div>




			  <div class="d-flex column swiper__slide" id="cf-main-slider">
				<a href="" class="tile home-slider__tile home-slider__tile_cf">
				  <div class="tile__suptitle">Every letter is awesome</div>
	
				  <div class="tile__title">PNG Alphabets <br>and Letters</div>
	
				  <div class="tile__text">Neon, food, industrial, tech, <br>sweets and more</div>
				  <div class="pill pill_black pill_round">
					<svg width="24" height="24">
					  <use xlink:href="#arrow-right"></use>
					</svg>
				  </div>
	
				  <img class="tile__image" width="299" height="335" draggable="false"
					src=""
					srcset="{{ asset('storage/image/top_banner/cap.png') }}"
					alt="" loading="lazy">
				</a>
			  </div>




			  <div class="d-flex column swiper__slide" id="cj-main-slider">
				<a href="https://yellowimages.com/if-you-cannot-find-the-image-needed"
				  class="tile home-slider__tile home-slider__tile_jobs">
				  <div class="tile__suptitle">Service / Hire a pro</div>
	
				  <div class="tile__title">Can't find what <br>you need? <span class="grey">Custom job service
					  is here.</span></div>
	
				  <div class="d-flex flex-column align-items-start home-slider__jobs">
					<div class="home-slider__job">3D Design</div>
					<div class="home-slider__job">PSD Mockups</div>
					<div class="home-slider__job">3D Visualization</div>
					<div class="home-slider__job">3D Modeling</div>
					<div class="home-slider__job">Sequences</div>
				  </div>
	
				  <div class="pill pill_black">Explore now</div>
	
				  <img class="tile__image" width="220" height="311" draggable="false"
					src=""
					srcset="https://imagedelivery.net/F5KOmplEz0rStV2qDKhYag/f96b9ec9-b37b-478b-7db2-52706b176a00/yimgslidejobsx2 2x"
					alt="Hire a pro" loading="lazy">
				</a>
			  </div>
			</div>
		  </div>
		</div>
		<div class="swiper__button swiper__button_prev swiper__button_disabled"><svg width="18" height="18">
			<use xlink:href="#arrow-slider-prev"></use>
		  </svg></div>
		<div class="swiper__button swiper__button_next"><svg width="18" height="18">
			<use xlink:href="#arrow-slider-next"></use>
		  </svg></div>
	  </div>
	  <!--slide show-->
	
	  <br>
	  <div class="container py-3">
		<div class="section-header">
		  <h2 class="section-header__title">
			<span class="icon-market icon-market_om section-header__icon"></span>
			<span class="section-ttl">各種ユニフォーム</span>
		  </h2>
		</div>
	  </div>
	
	
	  <!--categories-->
	
	  <div class="categories categories_om">
		<div class="row d-flex flex-wrap tiles">
			
		  <div class="d-flex column small-6 medium-6 large-3" style="padding-left: 0;">
			<a class="tile" href="https://uniformlab.jp/baseball/">
			  <img class="tile__image tile__image_om-packaging" width="274" height="244"
				src=""
				srcset="{{ asset('storage/image/top_page/uniform/baseball.png') }}"
				alt="">
			  <div class="tile__title">野球 / <br>Baseball</div>
			  <div class="pill pill_arrow pill_round pill_transparent">
				<svg width="24" height="24" viewBox="0 0 24 24">
				  <use xlink:href="#arrow-right"></use>
				</svg>
			  </div>
			</a>
		  </div>

		  <div class="d-flex column small-6 medium-6 large-3">
			<a class="tile" href="https://uniformlab.jp/">
			  <img class="tile__image tile__image_om-packaging" width="274" height="244"
				src=""
				srcset="{{ asset('storage/image/top_page/uniform/soccer.png') }}"
				alt="Clothing PSD Mockups">
			  <div class="tile__title">サッカー / <br>Soccer&Footsal</div>
			  <div class="pill pill_arrow pill_round pill_transparent">
				<svg width="24" height="24" viewBox="0 0 24 24">
				  <use xlink:href="#arrow-right"></use>
				</svg>
			  </div>
			</a>
		  </div>


		  <div class="d-flex column small-6 medium-6 large-3" style="padding-left: 0;">
			<a class="tile" href="https://uniformlab.jp/volleyball/">
			  <img class="tile__image tile__image_om-packaging" width="274" height="244"
				src=""
				srcset="{{ asset('storage/image/top_page/uniform/volleyball.png') }}"
				alt="">
			  <div class="tile__title">バレーボール / <br>Volleyball</div>
			  <div class="pill pill_arrow pill_round pill_transparent">
				<svg width="24" height="24" viewBox="0 0 24 24">
				  <use xlink:href="#arrow-right"></use>
				</svg>
			  </div>
			</a>
		  </div>

		  <div class="d-flex column small-6 medium-6 large-3" style="padding-left: 0;">
			<a class="tile" href="https://uniformlab.jp/basketball/">
			  <img class="tile__image tile__image_om-packaging" width="274" height="244"
				src=""
				srcset="{{ asset('storage/image/top_page/uniform/basketball.png') }}"
				alt="">
			  <div class="tile__title">バスケットボール / <br>Basketball</div>
			  <div class="pill pill_arrow pill_round pill_transparent">
				<svg width="24" height="24" viewBox="0 0 24 24">
				  <use xlink:href="#arrow-right"></use>
				</svg>
			  </div>
			</a>
		  </div>



		</div>
	  </div>
	  <!--categories-->



	
	  <br>
	  
	 
	 
	 <!--商品アイテム一覧-->
	 <!--{{-- route('product.index',['id'=>'1']) --}}-->
	 <!--<a class="tile" href="{{-- route('list.index') --}}">-->

	  <div class="container py-2">
		<div class="section-header">
		  <h2 class="section-header__title">
			<span class="icon-market icon-market_om section-header__icon"></span>
			<span class="section-ttl">商品カテゴリー</span>
		  </h2>
		</div>
	
		<div class="d-flex flex-column products-wrap">

		  <ul
			class="row products products-grid small-block-grid-1 medium-block-grid-2 large-block-grid-3 xlarge-block-grid-4 xxlarge-block-grid-4">
			


			<li class="card card_set" data-id="" style="border:none;">
			  <div class="card__inner">
				<a class="card__link-overlay" href="{{ route('list.index') }}"
				  title="半袖T-シャツ"></a>
	
				<a class="card__link" href="{{ route('list.index',['category'=>'34']) }}" title="半袖T-シャツ">
				  <div class="card__thumbs">
					<div class="card-thumbs__left">
					  <div class="card__thumb card__thumb_1 is-loaded"
						data-tn1="{{ asset('storage/image/top_banner/thumbnail/Tshirts/short/Tee-1.png') }}">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="{{ asset('storage/image/top_banner/thumbnail/Tshirts/short/Tee-1.png') }}"
						  alt="半袖T-シャツ">
					  </div>
					</div>
					<div class="card-thumbs__right">
					  <div class="card__thumb is-loaded"
						data-tn1="{{ asset('storage/image/top_banner/thumbnail/Tshirts/short/Tee-back.png') }}">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="{{ asset('storage/image/top_banner/thumbnail/Tshirts/short/Tee-back.png') }}"
						  alt="半袖T-シャツ">
					  </div>

					  <div class="card__thumb is-loaded"
						data-tn1="{{ asset('storage/image/top_banner/thumbnail/Tshirts/short/Tee-2.png') }}">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="{{ asset('storage/image/top_banner/thumbnail/Tshirts/short/Tee-2.png') }}"
						  alt="半袖T-シャツ">
					  </div>

					  <div class="card__thumb is-loaded"
						data-tn1="{{ asset('storage/image/top_banner/thumbnail/Tshirts/short/T-Shirt_SIDE.png') }}">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="{{ asset('storage/image/top_banner/thumbnail/Tshirts/short/Tee-f.png') }}"
						  alt="半袖T-シャツ">
					  </div>
					</div>
				  </div>
	
				  <div class="card__title-wrap">
					<div class="card__title">半袖T-シャツ</div>
					<div class="card__type tile__suptitle grey">T-shirt short sleeve</div>
				  </div>
				</a>
			  </div>
			</li>






			<li class="card card_set" data-id="" style="border:none;">
				<div class="card__inner">
				  <a class="card__link-overlay" href="{{ route('list.index') }}"
					title="長袖T-シャツ"></a>
	  
				  <a class="card__link" href="{{ route('list.index',['category'=>'34']) }}" title="長袖T-シャツ">
					<div class="card__thumbs">

					  <div class="card-thumbs__left">
						<div class="card__thumb card__thumb_1 is-loaded"
						  data-tn1="{{ asset('storage/image/top_banner/thumbnail/Tshirts/long/LTee-1.png') }}">
	  
						  <img class="card-thumb__img" width="466" height="580"
							src="{{ asset('storage/image/top_banner/thumbnail/Tshirts/long/LTee-1.png') }}"
							alt="長袖T-シャツ">
						</div>
					  </div>


					  <div class="card-thumbs__right">
						<div class="card__thumb is-loaded"
						  data-tn1="{{ asset('storage/image/top_banner/thumbnail/Tshirts/long/LTee-back.png') }}">
	  
						  <img class="card-thumb__img" width="466" height="580"
							src="{{ asset('storage/image/top_banner/thumbnail/Tshirts/long/LTee-back.png') }}"
							alt="長袖T-シャツ">
						</div>
  
						<div class="card__thumb is-loaded"
						  data-tn1="{{ asset('storage/image/top_banner/thumbnail/Tshirts/long/LTee-2.png') }}">
	  
						  <img class="card-thumb__img" width="466" height="580"
							src="{{ asset('storage/image/top_banner/thumbnail/Tshirts/long/LTee-2.png') }}"
							alt="長袖T-シャツ">
						</div>
  
						<div class="card__thumb is-loaded"
						  data-tn1="{{ asset('storage/image/top_banner/thumbnail/Tshirts/long/LTee-3.png') }}}">
	  
						  <img class="card-thumb__img" width="466" height="580"
							src="{{ asset('storage/image/top_banner/thumbnail/Tshirts/long/LTee-3.png') }}"
							alt="長袖T-シャツ">
						</div>
					  </div>
					</div>
	  
					<div class="card__title-wrap">
					  <div class="card__title">長袖T-シャツ</div>
					  <div class="card__type tile__suptitle grey">T-shirt long sleeve</div>
					</div>
				  </a>
				</div>
			  </li>








	
			<li class="card card_set" data-id="1411" style="border:none;">
			  <div class="card__inner">
				<a class="card__link-overlay" href="https://yellowimages.com/object-mockups/set/1411"
				  title="Jackets &amp; Outerwear"></a>
	

				<a class="card__link" href="{{ route('list.index',['category'=>'42']) }}" title="ポロシャツ">

				  <div class="card__thumbs">
					<div class="card-thumbs__left">

					  <div class="card__thumb card__thumb_1 is-loaded"
						data-tn1="{{ asset('storage/image/top_banner/thumbnail/polo/Polo_Front_01.png') }}">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="{{ asset('storage/image/top_banner/thumbnail/polo/Polo_Front_01.png') }}"
						  alt="ポロシャツ">
					  </div>
					</div>
					<div class="card-thumbs__right">

					  <div class="card__thumb is-loaded"
						data-tn1="{{ asset('storage/image/top_banner/thumbnail/polo/Polo_Back_01.png') }}">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="{{ asset('storage/image/top_banner/thumbnail/polo/Polo_Back_01.png') }}"
						  alt="ポロシャツ">
					  </div>
					  <div class="card__thumb is-loaded"
						data-tn1="{{ asset('storage/image/top_banner/thumbnail/polo/Polo_Side_02.png') }}">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="{{ asset('storage/image/top_banner/thumbnail/polo/Polo_Side_02.png') }}"
						  alt="ポロシャツ">
					  </div>
					  <div class="card__thumb is-loaded"
						data-tn1="{{ asset('storage/image/top_banner/thumbnail/polo/Polo_Front_02.png') }}">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="{{ asset('storage/image/top_banner/thumbnail/polo/Polo_Front_02.png') }}"
						  alt="ポロシャツ">
					  </div>
					</div>
				  </div>
	
				  <div class="card__title-wrap">
					<div class="card__title">ポロシャツ</div>
					<div class="card__type tile__suptitle grey">polo shirt</div>
				  </div>
				</a>
			  </div>
	
			</li>
	
			<li class="card card_set" data-id="1311" style="border:none;">
			  <div class="card__inner">
				<a class="card__link-overlay" href="https://yellowimages.com/object-mockups/set/1311" title="スウェット"></a>
	
				<a class="card__link" href="{{ route('list.index',['category'=>'35']) }}" title="スウェット">
				  <div class="card__thumbs">
					<div class="card-thumbs__left">
					  <div class="card__thumb card__thumb_1 is-loaded"
						data-tn1="{{ asset('storage/image/top_banner/thumbnail/hoodie/105693-hoodie_front_design.png') }}">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="{{ asset('storage/image/top_banner/thumbnail/hoodie/105693-hoodie_front_design.png') }}"
						  alt="スウェット">
					  </div>
					</div>
					
					<div class="card-thumbs__right">
					  <div class="card__thumb is-loaded"
						data-tn1="{{ asset('storage/image/top_banner/thumbnail/hoodie/105693-hoodie_front_design2.png') }}">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="{{ asset('storage/image/top_banner/thumbnail/hoodie/105693-hoodie_front_design2.png') }}"
						  alt="スウェット">
					  </div>
					  <div class="card__thumb is-loaded"
						data-tn1="{{ asset('storage/image/top_banner/thumbnail/hoodie/105693-hoodie_front_design4.png') }}">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="{{ asset('storage/image/top_banner/thumbnail/hoodie/105693-hoodie_front_design4.png') }}"
						  alt="スウェット">
					  </div>
					  <div class="card__thumb is-loaded"
						data-tn1="{{ asset('storage/image/top_banner/thumbnail/hoodie/105693-hoodie_front_design5.png') }}">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="{{ asset('storage/image/top_banner/thumbnail/hoodie/105693-hoodie_front_design5.png') }}"
						  alt="スウェット">
					  </div>
					</div>
				  </div>
	
				  <div class="card__title-wrap">
					<div class="card__title">スウェット</div>
					<div class="card__type tile__suptitle grey">sweatshirt</div>
				  </div>
				</a>
			  </div>
			</li>
	

			<!--パンツ・スェットパンツ -->
			<li class="card card_set" data-id="1311" style="border:none;">
				<div class="card__inner">
				  <a class="card__link-overlay" href="https://yellowimages.com/object-mockups/set/1311" title="パンツ/スェットパンツ"></a>
	  
				  <a class="card__link" href="{{ route('list.index',['category'=>'35']) }}" title="パンツ/スェットパンツ">
					<div class="card__thumbs">
					  <div class="card-thumbs__left">
						<div class="card__thumb card__thumb_1 is-loaded"
						  data-tn1="{{ asset('storage/image/top_banner/thumbnail/pants/42264-sport-pants-front.png') }}">
	  
						  <img class="card-thumb__img" width="466" height="580"
							src="{{ asset('storage/image/top_banner/thumbnail/pants/42264-sport-pants-front.png') }}"
							alt="パンツ/スェットパンツ">
						</div>
					  </div>
					  
					  <div class="card-thumbs__right">
						<div class="card__thumb is-loaded"
						  data-tn1="{{ asset('storage/image/top_banner/thumbnail/pants/42293-sport-pants-front-half-side.png') }}">
	  
						  <img class="card-thumb__img" width="466" height="580"
							src="{{ asset('storage/image/top_banner/thumbnail/pants/42293-sport-pants-front-half-side.png') }}"
							alt="パンツ/スェットパンツ">
						</div>
						<div class="card__thumb is-loaded"
						  data-tn1="{{ asset('storage/image/top_banner/thumbnail/pants/42277-sport-pants-side.png') }}">
	  
						  <img class="card-thumb__img" width="466" height="580"
							src="{{ asset('storage/image/top_banner/thumbnail/pants/42277-sport-pants-side.png') }}"
							alt="パンツ/スェットパンツ">
						</div>
						<div class="card__thumb is-loaded"
						  data-tn1="{{ asset('storage/image/top_banner/thumbnail/pants/42264-sport-pants-front2.png') }}">
	  
						  <img class="card-thumb__img" width="466" height="580"
							src="{{ asset('storage/image/top_banner/thumbnail/pants/42264-sport-pants-front2.png') }}"
							alt="パンツ/スェットパンツ">
						</div>
					  </div>
					</div>
	  
					<div class="card__title-wrap">
					  <div class="card__title">パンツ/スェットパンツ</div>
					  <div class="card__type tile__suptitle grey">pants / sweatpants</div>
					</div>
				  </a>
				</div>
			  </li>

	
	
			<!--outer -->
	
			<li class="card card_set" data-id="2902" style="border:none;">
			  <div class="card__inner">
				<a class="card__link-overlay" href="https://yellowimages.com/object-mockups/set/2902" title="アウター"></a>
	
				<a class="card__link" href="{{ route('list.index',['category'=>'36']) }}" title="アウター">
				  <div class="card__thumbs">
					<div class="card-thumbs__left">
					  <div class="card__thumb card__thumb_1 is-loaded"
						data-tn1="{{ asset('storage/image/top_banner/thumbnail/outer/59840-varsity-front2.png') }}">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="{{ asset('storage/image/top_banner/thumbnail/outer/59840-varsity-front2.png') }}"
						  alt="アウター">
					  </div>
					</div>
					<div class="card-thumbs__right">
					  <div class="card__thumb is-loaded"
						data-tn1="{{ asset('storage/image/top_banner/thumbnail/outer/59840-varsity-front.png') }}">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="{{ asset('storage/image/top_banner/thumbnail/outer/59840-varsity-front.png') }}"
						  alt="アウター">
					  </div>
					  <div class="card__thumb is-loaded"
						data-tn1="{{ asset('storage/image/top_banner/thumbnail/outer/60110-varsity-back-5ea9e02b8eace.png') }}">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="{{ asset('storage/image/top_banner/thumbnail/outer/60110-varsity-back-5ea9e02b8eace.png') }}"
						  alt="アウター">
					  </div>
					  <div class="card__thumb is-loaded"
						data-tn1="{{ asset('storage/image/top_banner/thumbnail/outer/60146-varsity-half-front.png') }}">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="{{ asset('storage/image/top_banner/thumbnail/outer/60146-varsity-half-front.png') }}"
						  alt="アウター">
					  </div>
					</div>
				  </div>
	
				  <div class="card__title-wrap">
					<div class="card__title">アウター</div>
					<div class="card__type tile__suptitle grey">Outer</div>
				  </div>
				</a>
			  </div>
	
			</li>


			 
			<li class="card card_set" data-id="3398" style="border:none;">
			  <div class="card__inner">
				<a class="card__link-overlay" href="https://yellowimages.com/object-mockups/set/3398"
				  title="バッグ"></a>
	
					<a class="card__link" href="{{ route('list.index',['category'=>'38']) }}" title="バッグ">	
				  <div class="card__thumbs">
					<div class="card-thumbs__left">
					  <div class="card__thumb card__thumb_1 is-loaded"
						data-tn1="{{ asset('storage/image/top_banner/thumbnail/bag/cotton-bag-mockup.png') }}">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="{{ asset('storage/image/top_banner/thumbnail/bag/cotton-bag-mockup.png') }}"
						  alt="バッグp">
					  </div>
					</div>
					<div class="card-thumbs__right">
					  <div class="card__thumb is-loaded"
						data-tn1="{{ asset('storage/image/top_page/bag/00778-TCC-031_SM.png')}}">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="{{ asset('storage/image/top_page/bag/00778-TCC-031_SM.png')}}"
						  alt="バッグ">
					  </div>
					  <div class="card__thumb is-loaded"
						data-tn1="{{ asset('storage/image/top_page/bag/00778-TCC-034_S.png')}}">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="{{ asset('storage/image/top_page/bag/00778-TCC-034_S.png')}}"
						  alt="バッグ">
					  </div>
					  <div class="card__thumb is-loaded"
						data-tn1="{{ asset('storage/image/top_page/bag/00778-TCC-037_SM.png')}}">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="{{ asset('storage/image/top_page/bag/00778-TCC-037_SM.png')}}"
						  alt="バッグ">
					  </div>
					</div>
				  </div>
	
				  <div class="card__title-wrap">
					<div class="card__title">バッグ</div>
					<div class="card__type tile__suptitle grey">Bag</div>
				  </div>
				</a>
			  </div>
			</li>





			<li class="card card_set" data-id="2732" style="border:none;">
			  <div class="card__inner">
				<a class="card__link-overlay" href="https://yellowimages.com/object-mockups/set/2732" title="Face Mask"></a>
	
				<a class="card__link" href="{{ route('list.index',['category'=>'39']) }}" title="キャップ">	
				  <div class="card__thumbs">
					<div class="card-thumbs__left">
					  <div class="card__thumb card__thumb_1 is-loaded"
						data-tn1="{{ asset('storage/image/top_banner/thumbnail/cap/86096-baseball-cap-mockup-half-side-navy.png') }}">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="{{ asset('storage/image/top_banner/thumbnail/cap/86096-baseball-cap-mockup-half-side-navy.png') }}"
						  alt="キャップ">
					  </div>
					</div>
					<div class="card-thumbs__right">
					  <div class="card__thumb is-loaded"
						data-tn1="{{ asset('storage/image/top_banner/thumbnail/cap/purple.png') }}">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="{{ asset('storage/image/top_banner/thumbnail/cap/purple.png') }}"
						  alt="キャップ">
					  </div>
					  <div class="card__thumb is-loaded"
						data-tn1="{{ asset('storage/image/top_banner/thumbnail/cap/red.png') }}">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="{{ asset('storage/image/top_banner/thumbnail/cap/red.png') }}"
						  alt="キャップ">
					  </div>
					  <div class="card__thumb is-loaded"
						data-tn1="{{ asset('storage/image/top_page/cap/00700-EVM-305_F.png')}}">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="{{ asset('storage/image/top_banner/thumbnail/cap/136148-snapback-cap2.png') }}"
						  alt="キャップ">
					  </div>
					</div>
				  </div>
	
				  <div class="card__title-wrap">
					<div class="card__title">キャップ</div>
					<div class="card__type tile__suptitle grey">Cap</div>
				  </div>
				</a>
			  </div>
			</li>
	
	
	
	
			<li class="card card_set" data-id="2902" style="border:none;">
			  <div class="card__inner">
				<a class="card__link-overlay" href="https://yellowimages.com/object-mockups/set/2902" title="Snack Bar"></a>
	
					<a class="card__link" href="{{ route('list.index',['category'=>'40']) }}" title="タオル">	
				  <div class="card__thumbs">
					<div class="card-thumbs__left">
					  <div class="card__thumb card__thumb_1 is-loaded"
						data-tn1="{{ asset('storage/image/top_page/towel/00522-FT-024_F.png')}}">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="{{ asset('storage/image/top_page/towel/00522-FT-024_F.png')}}"
						  alt="タオル">
					  </div>
					</div>
					<div class="card-thumbs__right">
					  <div class="card__thumb is-loaded"
						data-tn1="{{ asset('storage/image/top_page/towel/00522-FT-132_F.png')}}">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="{{ asset('storage/image/top_page/towel/00522-FT-132_F.png')}}"
						  alt="タオル">
					  </div>
					  <div class="card__thumb is-loaded"
						data-tn1="{{ asset('storage/image/top_page/towel/00522-FT-133_F.png')}}">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="{{ asset('storage/image/top_page/towel/00522-FT-133_F.png')}}"
						  alt="タオル">
					  </div>
					  <div class="card__thumb is-loaded"
						data-tn1="{{ asset('storage/image/top_page/towel/00522-FT-134_F.png')}}">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="{{ asset('storage/image/top_page/towel/00522-FT-134_F.png')}}"
						  alt="タオル">
					  </div>
					</div>
				  </div>
	
				  <div class="card__title-wrap">
					<div class="card__title">タオル</div>
					<div class="card__type tile__suptitle grey">towel</div>
				  </div>
				</a>
			  </div>
	
			</li>
			<li class="card card_set" data-id="1905" style="border:none;">
			  <div class="card__inner">
				<a class="card__link-overlay" href="https://yellowimages.com/object-mockups/set/1905"
				  title="Apple Watch Mockup Set"></a>
	

				  <a class="card__link" href="{{ route('list.index',['category'=>'44']) }}" title="部活">	
				  <div class="card__thumbs">
					<div class="card-thumbs__left">
					  <div class="card__thumb card__thumb_1 is-loaded"
						data-tn1="{{ asset('storage/image/top_page/club/00775-NSB-010_F.png')}}">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="{{ asset('storage/image/top_page/club/00775-NSB-010_F.png')}}"
						  alt="部活">
					  </div>
					</div>
					<div class="card-thumbs__right">
					  <div class="card__thumb is-loaded"
						data-tn1="{{ asset('storage/image/top_page/club/00775-NSB-015_F.png')}}">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="{{ asset('storage/image/top_page/club/00775-NSB-015_F.png')}}"
						  alt="部活">
					  </div>
					  <div class="card__thumb is-loaded"
						data-tn1="{{ asset('storage/image/top_page/club/00775-NSB-030_F.png')}}">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="{{ asset('storage/image/top_page/club/00775-NSB-030_F.png')}}"
						  alt="部活">
					  </div>
					  <div class="card__thumb is-loaded"
						data-tn1="{{ asset('storage/image/top_page/club/00775-NSB-033_F.png')}}">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="{{ asset('storage/image/top_page/club/00775-NSB-033_F.png')}}"
						  alt="部活">
					  </div>
					</div>
				  </div>
	
				  <div class="card__title-wrap">
					<div class="card__title">部活</div>
					<div class="card__type tile__suptitle grey">club activities</div>
				  </div>
				</a>
			  </div>
			</li>




			<li class="card card_set" data-id="3398" style="border:none;">
			  <div class="card__inner">
				<a class="card__link-overlay" href="https://yellowimages.com/object-mockups/set/3398"
				  title="エンブレム・ワッペン"></a>
	
					<a class="card__link" href="{{ route('list.index',['category'=>'45']) }}" title="エンブレム・ワッペン">	
				  <div class="card__thumbs">
					<div class="card-thumbs__left">
					  <div class="card__thumb card__thumb_1 is-loaded"
						data-tn1="https://yi-files.s3.eu-west-1.amazonaws.com/products/1095000/1095900/1832845-cover.jpg">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="./Mockups by Yellow Images 😋 Download Premium PSD Product Mockups 🔥 Templates_files/1832845-cover.jpg"
						  alt="エンブレム・ワッペン">
					  </div>
					</div>
					<div class="card-thumbs__right">
					  <div class="card__thumb is-loaded"
						data-tn1="https://yi-files.s3.eu-west-1.amazonaws.com/products/1095000/1095803/1832611-cover.jpg">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="./Mockups by Yellow Images 😋 Download Premium PSD Product Mockups 🔥 Templates_files/1832611-cover.jpg"
						  alt="エンブレム・ワッペン">
					  </div>
					  <div class="card__thumb is-loaded"
						data-tn1="https://yi-files.s3.eu-west-1.amazonaws.com/products/1095000/1095929/1833037-cover.jpg">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="./Mockups by Yellow Images 😋 Download Premium PSD Product Mockups 🔥 Templates_files/1833037-cover.jpg"
						  alt="エンブレム・ワッペン">
					  </div>
					  <div class="card__thumb is-loaded"
						data-tn1="https://yi-files.s3.eu-west-1.amazonaws.com/products/1095000/1095816/1832638-cover.jpg">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="./Mockups by Yellow Images 😋 Download Premium PSD Product Mockups 🔥 Templates_files/1832638-cover.jpg"
						  alt="エンブレム・ワッペン">
					  </div>
					</div>
				  </div>
	
				  <div class="card__title-wrap">
					<div class="card__title">エンブレム・ワッペン</div>
					<div class="card__type tile__suptitle grey">emblem</div>
				  </div>
				</a>
	
			  </div>
	
			</li>
			<li class="card card_set" data-id="2732" style="border:none;">
			  <div class="card__inner">
				<a class="card__link-overlay" href="https://yellowimages.com/object-mockups/set/2732" title="Face Mask"></a>
	
				<a class="card__link" href="{{ route('list.index',['category'=>'46']) }}" title="その他">	
					<div class="card__thumbs">
				  <div class="card__thumbs">
					<div class="card-thumbs__left">
					  <div class="card__thumb card__thumb_1 is-loaded"
						data-tn1="{{ asset('storage/image/top_page/others/00800-NEH-010_F.png')}}">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="{{ asset('storage/image/top_page/others/00800-NEH-010_F.png')}}"
						  alt="その他">
					  </div>
					</div>
					<div class="card-thumbs__right">
					  <div class="card__thumb is-loaded"
						data-tn1="{{ asset('storage/image/top_page/others/00800-NEH-015_F.png')}}">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="{{ asset('storage/image/top_page/others/00800-NEH-015_F.png')}}"
						  alt="その他">
					  </div>
					  <div class="card__thumb is-loaded"
						data-tn1="{{ asset('storage/image/top_page/others/00800-NEH-020_F.png')}}">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="{{ asset('storage/image/top_page/others/00800-NEH-020_F.png')}}"
						  alt="その他">
					  </div>
					  <div class="card__thumb is-loaded"
						data-tn1="{{ asset('storage/image/top_page/others/00800-NEH-025_F.png')}}">
	
						<img class="card-thumb__img" width="466" height="580"
						  src="{{ asset('storage/image/top_page/others/00800-NEH-025_F.png')}}"
						  alt="その他">
					  </div>
					</div>
				  </div>
	
				  <div class="card__title-wrap">
					<div class="card__title">その他</div>
					<div class="card__type tile__suptitle grey">others</div>
				  </div>
				</a>
			  </div>
			</li>
		  </ul>
		</div>
		</section>
	  </div>
	
	
	  </main>
	
	



		@include('parts.footer')