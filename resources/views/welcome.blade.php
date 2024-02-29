
@include('parts.header')

		<div id="content" class="content-area page home">
			<div class="container clearfix">
				<h1>オリジナルデザインのチームウェアを作ろう<br><span class="grey">1枚から低価格で製作します</span></h1>
			</div>

<!--横スライド-->
			<div id="flick-wrap" class="flicking-wrap">
				<div class="flicking-arrow flicking-arrow-prev is-disabled">
					<svg width="24" height="24">
						<path fill="currentColor" d="M17.51 3.87 15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12z"></path>
					</svg>
				</div>
				<div class="flicking-arrow flicking-arrow-next">
					<svg width="24" height="24">
						<path fill="currentColor" d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"></path>
					</svg>
				</div>
				
				<div class="container">
					<div id="flick" class="flicking-viewport"
						style="touch-action: none; user-select: none; -webkit-user-drag: none;">
						<div class="d-flex flex-nowrap home-slider flicking-camera" style="transform: translate(0px);">
							<div class="d-flex column" id="main-om-cat-banner">
								<div class="tile home-slider__tile home-slider__tile_om">
									<div class="tile__suptitle">Ready to use</div>

									<div class="tile__title">PSD Object <br>Mockups / <span id="mockups-cats"
											class="home-slider__cats"><span id="om-main-slider-ap-title"
												class=" is-active" style="color: #FFA803;">Apparel</span><span
												id="om-main-slider-pk-title" class=""
												style="color: #F8434A;">Packaging</span><span
												id="om-main-slider-vh-title" class=""
												style="color: #7A18FF;">Vehicle</span><span id="om-main-slider-dv-title"
												class="" style="color: #3ED5F8;">Device</span></span></div>

									<div class="tile__text">Exclusive object mockups for <br>branding and packaging
										design</div>
									<div class="home-slider__middle">
										<p><span>$1.5</span></p>
										<p>For Membership <br><a
												href="https://yellowimages.com/yellow-ticket">holders</a></p>
										<div class="d-flex home-slider__bullets">
											<div class="home-slider__bullet is-active" style="color: #FFA803;"
												data-url="/all/objects/apparel-mockups"></div>
											<div class="home-slider__bullet" style="color: #F8434A;"
												data-url="/all/objects/packaging-mockups"></div>
											<div class="home-slider__bullet" style="color: #7A18FF;"
												data-url="/all/objects/vehicle-mockups"></div>
											<div class="home-slider__bullet" style="color: #3ED5F8;"
												data-url="/all/objects/device-mockups"></div>
										</div>
									</div>
									<div class="home-slider__mockups">

										<!--横スライドバー１-->
										<img id="om-main-slider-ap-img"
											class="tile__image home-slider__image home-slider__image_ap" width="286"
											height="318" draggable="false"
											src="./img/yimgslideom1.png"
											srcset="./img/yimgslideom1x2.avif"
											alt="Apparel PSD Mockups">

									</div>

									<a id="mockups-button" class="pill pill_black"
										href="https://yellowimages.com/all/objects/apparel-mockups">Explore now</a>
									<a id="mockups-overlay" class="home-slider__link"
										href="https://yellowimages.com/all/objects/apparel-mockups"></a>
								</div>
							</div>



							<!--横スライドバー2-->
							<div class="d-flex column" id="provisual-main-slider">
								<a href="https://yellowimages.com/yellow-ticket" class="tile home-slider__tile">
									<div class="tile__suptitle" style="color: rgb(143, 147, 156) !important;">Pick Scary
										Monster plan &amp; Save!</div>

									<div class="tile__title" style="color: rgb(255, 255, 255) !important;">50% OFF Scary
										<br>Monster Plan!</div>

									<div class="tile__text" style="color: rgb(143, 147, 156) !important;">Save up and
										keep renewing<br>with 50% OFF monthly!</div>
									<div class="pill pill_black">Treat yourself ➜</div>
									<img class="tile__image" width="270" height="304" draggable="false"
										src="./img/yimgpromoslider.png"
										srcset="https://imagedelivery.net/F5KOmplEz0rStV2qDKhYag/b2017e7d-b23c-4922-ec0b-63a7a95eae00/yimgpromosliderx2 2x"
										alt="yellow images halloween moster plan 2023 promo"
										xmlns="http://www.w3.org/1999/xhtml"
										style="width: 384px !important; height: 512px !important;">
								</a>
							</div>



							<!--横スライドバー3-->
							<div class="d-flex column" id="png-main-slider">
								<a href="https://provisual.app/?__hstc=48318713.bfa9981391c14a9f76f3826d176277be.1698842394352.1698842394352.1698842394352.1&amp;__hssc=48318713.1.1698842394353&amp;__hsfp=3963434540"
									class="tile home-slider__tile home-slider__tile_provisual_1" target="_blank">
									<div class="tile__suptitle" style="color: #696C73!important;">Create. Visualize.
										Present.</div>
									<div class="tile__title" style="color: rgb(255, 255, 255) !important;">ProVisual.app
										<br>is now available!</div>
									<div class="tile__text">online 3D visualization studio <br>you can use anywhere
									</div>
									<div class="pill pill_black">Try for free</div> <img class="tile__image" width="382"
										height="514" draggable="false"
										src="./img/yimgslidepvx2.avif"
										srcset="https://imagedelivery.net/F5KOmplEz0rStV2qDKhYag/29adbb3f-f093-4623-8a92-852559fa0700/yimgslidepvx2 2x"
										alt="ProVisual.app is now available!">
								</a>
							</div>

							<!--横スライドバー4-->
							<div class="d-flex column" id="cs-main-slider">
								<a href="https://yellowimages.com/all/store"
									class="tile home-slider__tile home-slider__tile_cs">
									<div class="tile__suptitle">Graphic assets</div>

									<div class="tile__title">Creative <br>Store</div>

									<div class="tile__text">Fonts, Graphics, Textures, <br>UI Kits, etc.</div>
									<div class="pill pill_black pill_round">
										<svg width="24" height="24">
											<use xlink:href="#arrow-right"></use>
										</svg>
									</div>

									<img class="tile__image" width="299" height="335" draggable="false"
										src="./img/yimgslidecs.png"
										srcset="https://imagedelivery.net/F5KOmplEz0rStV2qDKhYag/08a6f98c-98ac-4062-0c1c-d1a897950a00/yimgslidecsx2 2x"
										alt="Creative Store">
								</a>
							</div>



							<!--横スライドバー5-->
							<div class="d-flex column" id="cf-main-slider">
								<a href="https://yellowimages.com/creative-fonts/all"
									class="tile home-slider__tile home-slider__tile_cf">
									<div class="tile__suptitle">Every letter is awesome</div>

									<div class="tile__title">PNG Alphabets <br>and Letters</div>

									<div class="tile__text">Neon, food, industrial, tech, <br>sweets and more</div>
									<div class="pill pill_black pill_round">
										<svg width="24" height="24">
											<use xlink:href="#arrow-right"></use>
										</svg>
									</div>

									<img class="tile__image" width="225" height="303" draggable="false"
										src="./img/yimgslidecf.png"
										srcset="https://imagedelivery.net/F5KOmplEz0rStV2qDKhYag/358d6282-9095-4ee1-4339-35d1d49eb800/yimgslidecfx2 2x"
										alt="PNG Alphabets and Letters">
								</a>
							</div>

							<div class="d-flex column" id="cj-main-slider">
								<a href=""
									class="tile home-slider__tile home-slider__tile_jobs">
									<div class="tile__suptitle">Service / Hire a pro</div>

									<div class="tile__title">Can't find what <br>you need? <span class="grey">Custom job
											service is here.</span></div>

									<div class="d-flex flex-column align-items-start home-slider__jobs">
										<div class="home-slider__job">3D Design</div>
										<div class="home-slider__job">PSD Mockups</div>
										<div class="home-slider__job">3D Visualization</div>
										<div class="home-slider__job">3D Modeling</div>
										<div class="home-slider__job">Sequences</div>
									</div>

									<div class="pill pill_black">Explore now</div>

									<img class="tile__image" width="220" height="311" draggable="false"
										src="./img/yimgslidejobs.png"
										srcset="https://imagedelivery.net/F5KOmplEz0rStV2qDKhYag/f96b9ec9-b37b-478b-7db2-52706b176a00/yimgslidejobsx2 2x"
										alt="Hire a pro">
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="container clearfix">
				<section class="page__section page__section_border">


					<div class="section-header">
						<h2 class="section-header__title">
							<span class="icon-market icon-market_om section-header__icon"></span>
							<span>オーダーユニフォーム</span>
						</h2>

						<a class="pill pill_black pill_arrow" href="https://yellowimages.com/all/objects">
							<span>Explore all</span><svg width="18" height="18">
								<use xlink:href="#arrow-right"></use>
							</svg>
						</a>
					</div>

					<!--カテゴリー横並び-->
					<div class="categories categories_om">
						<div class="row d-flex flex-wrap tiles">
							<div class="d-flex column small-6 medium-6 large-3">
								<a class="tile" href="https://yellowimages.com/all/objects/packaging-mockups">
									<img class="tile__image tile__image_om-packaging" width="274" height="244"
										src="./img/yimgomcatpack.png"
										srcset="./img/yimgomcatpack.png 2x"
										alt="Packaging PSD Mockups">
									<div class="tile__title">野球 / <br>baseball</div>
									<div class="pill pill_arrow pill_round pill_transparent">
										<svg width="24" height="24" viewBox="0 0 24 24">
											<use xlink:href="#arrow-right"></use>
										</svg>
									</div>
								</a>
							</div>

							<div class="d-flex column small-6 medium-6 large-3">
								<a class="tile" href="https://yellowimages.com/all/objects/apparel-mockups">
									<img class="tile__image tile__image_om-apparel" width="276" height="255"
										src="./img/yimgomcatapp.png"
										srcset="./img/yimgomcatapp.png 2x"
										alt="Clothing PSD Mockups">
									<div class="tile__title">サッカー / <br>soccer</div>
									<div class="pill pill_arrow pill_round pill_transparent">
										<svg width="24" height="24" viewBox="0 0 24 24">
											<use xlink:href="#arrow-right"></use>
										</svg>
									</div>
								</a>
							</div>

							<div class="d-flex column small-6 medium-6 large-3">
								<a class="tile" href="https://yellowimages.com/all/objects/vehicle-mockups">
									<img class="tile__image tile__image_om-vehicle" width="295" height="307"
										src="./img/yimgomcatveh.png"
										srcset="https://imagedelivery.net/F5KOmplEz0rStV2qDKhYag/d86abf10-902e-42c0-17f5-93a503367b00/yimgomcatvehx2 2x"
										alt="Vehicle PSD Mockups">
									<div class="tile__title">バレーボール / <br>volleyball</div>
									<div class="pill pill_arrow pill_round pill_transparent">
										<svg width="24" height="24" viewBox="0 0 24 24">
											<use xlink:href="#arrow-right"></use>
										</svg>
									</div>
								</a>
							</div>

							<div class="d-flex column small-6 medium-6 large-3">
								<a class="tile" href="https://yellowimages.com/all/objects/device-mockups">
									<img class="tile__image tile__image_om-device" width="232" height="255"
										src="./img/yimgomcatdev.png"
										srcset="https://imagedelivery.net/F5KOmplEz0rStV2qDKhYag/154037e4-4c6d-43e8-d131-5d0dcb94e500/yimgomcatdevx2 2x"
										alt="Devices PSD Mockups">
									<div class="tile__title">バスケットボール / <br>basketball</div>
									<div class="pill pill_arrow pill_round pill_transparent">
										<svg width="24" height="24" viewBox="0 0 24 24">
											<use xlink:href="#arrow-right"></use>
										</svg>
									</div>
								</a>
							</div>
						</div>
					</div>


				<section class="page__section page__section_border">
					<div class="section-header">
						<h2 class="section-header__title">
							<span class="icon-market icon-market_om section-header__icon"></span>
							<span>カテゴリー</span>
						</h2>
					</div>


					<!--1行目 -->

					<div class="d-flex flex-column products-wrap">
						<ul
							class="row products products-grid small-block-grid-1 medium-block-grid-2 large-block-grid-3 xlarge-block-grid-4 xxlarge-block-grid-4">
							
							<li class="card card_set" data-id="">
								<div class="card__inner">
									<a class="card__link-overlay" href="{{ route('product.index',['id'=>'1']) }}" title="Tシャツ"></a>
									<a class="card__link" href="{{ route('product.index',['id'=>'1']) }}" title="Tシャツ">
										<div class="card__thumbs">
											<!--1-->
											<!--メイン画像-->
											<div class="card-thumbs__left">
												<div class="card__thumb card__thumb_1" data-tn1="{{ asset('storage/image/top_page/tshirts/1.png') }}"><!--ここで画像を指定-->
													<img class="card-thumb__img" width="466" height="580" src="{{ asset('storage/image/top_page/tshirts/1.png') }}"alt="p175">
												</div>
											</div>

											<!--右の3枚 -->
											<div class="card-thumbs__right">
												<div class="card__thumb"
													data-tn1="{{ asset('storage/image/top_page/tshirts/2.png') }}">
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#f7f7f7">
														</rect>
													</svg>
													<img class="card-thumb__img" width="466" height="580" src="data:,"
														alt="Ｔシャツ">
												</div>
												<div class="card__thumb"
													data-tn1="{{ asset('storage/image/top_page/tshirts/3.png') }}">
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#f7f7f7">
														</rect>
													</svg>
													<img class="card-thumb__img" width="466" height="580" src="data:,"
														alt="Ｔシャツ">
												</div>
												<div class="card__thumb"
													data-tn1="{{ asset('storage/image/top_page/tshirts/4.png') }}">
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#f7f7f7">
														</rect>
													</svg>
													<img class="card-thumb__img" width="466" height="580" src="data:,"
														alt="Ｔシャツ">
												</div>
											</div>
										</div>

										<!--カテゴリー名 -->
										<div class="card__title-wrap">
											<div class="card__title">Tシャツ</div>
											<div class="card__type">T-Shirts</div>
										</div>
									</a>

									<div class="card__info">

									</div>
								</div>
							</li>


							<!--2 polo-->
							<!--メイン画像-->
							<li class="card card_set" data-id="1411">
								<div class="card__inner">
									<a class="card__link-overlay" href="" title="ポロシャツ"></a>

									<a class="card__link" href="" title="ポロシャツ">
										<div class="card__thumbs">
											<div class="card-thumbs__left">
												<div class="card__thumb card__thumb_1"
													data-tn1="{{ asset('storage/image/top_page/polo/1.jpg') }}">
													<!--
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#96a8c0">
														</rect>
														<g transform="scale(4.531250) translate(0.5 0.5)">
															<polygon fill="#002262" fill-opacity="0.501961"
																points="5,108 42,6 100,101"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="118,5 8,-16 -16,40"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="118,17 98,143 81,-16"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="23,-5 -16,3 4,143"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="44,143 -14,113 118,116"></polygon>
															<polygon fill="#000846" fill-opacity="0.501961"
																points="58,11 87,46 89,113"></polygon>
															<polygon fill="#123d70" fill-opacity="0.501961"
																points="20,31 12,106 77,114"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="31,138 13,143 27,74"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="9,-9 118,50 108,-16"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="75,135 77,78 94,143"></polygon>
														</g>
													</svg>
												-->
													<img class="card-thumb__img" width="466" height="580" src="{{ asset('storage/image/top_page/polo/1.jpg') }}"
														alt="ポロシャツ">
												</div>
											</div>
											<div class="card-thumbs__right">
												<div class="card__thumb"
													data-tn1="{{ asset('storage/image/top_page/polo/2.jpg')}}">
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#f7f7f7">
														</rect>
													</svg>
													<img class="card-thumb__img" width="466" height="580" src="data:,"
														alt="ポロシャツ">
												</div>
												<div class="card__thumb"
													data-tn1="{{ asset('storage/image/top_page/polo/3.jpg') }}">
													<!--
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#dedee0">
														</rect>
														<g transform="scale(2.265625) translate(0.5 0.5)">
															<polygon fill="#b1b1b2" fill-opacity="0.501961"
																points="191,213 103,-7 8,216"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="-16,-16 6,271 63,-16"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="202,271 221,0 141,-15"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="193,271 221,211 -16,243"></polygon>
															<polygon fill="#949496" fill-opacity="0.501961"
																points="42,210 69,65 32,94"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="221,5 5,-16 -9,52"></polygon>
															<polygon fill="#9c9c9d" fill-opacity="0.501961"
																points="174,105 162,213 139,63"></polygon>
															<polygon fill="#838384" fill-opacity="0.501961"
																points="144,223 106,212 71,223"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="53,162 39,259 68,271"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="198,105 214,17 68,-16"></polygon>
														</g>
													</svg>
												-->
													<img class="card-thumb__img" width="466" height="580" src="{{ asset('storage/image/top_page/polo/3.jpg') }}"
														alt="ポロシャツ">
												</div>
												<div class="card__thumb"
													data-tn1="{{ asset('storage/image/top_page/polo/4.jpg') }}">
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#f7f7f7">
														</rect>
													</svg>
													<img class="card-thumb__img" width="466" height="580" src="data:,"
														alt="ポロシャツ">
												</div>
											</div>
										</div>

										<div class="card__title-wrap">
											<div class="card__title">ポロシャツ</div>
											<div class="card__type">Polo Shirt</div>
										</div>
									</a>

									<div class="card__info">
									</div>
								</div>
							</li>


							<!--sweat-->
							<li class="card card_set" data-id="1311">
								<div class="card__inner">
									<a class="card__link-overlay"
										href="" title="スウェット"></a>

									<a class="card__link" href=""
										title="スウェット">
										<div class="card__thumbs">
											<div class="card-thumbs__left">
												<div class="card__thumb card__thumb_1"
													data-tn1="{{ asset('storage/image/top_page/sweat/1.jpg') }}">
													<!--
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#d4dee4">
														</rect>
														<g transform="scale(4.531250) translate(0.5 0.5)">
															<polygon fill="#5c8693" fill-opacity="0.501961"
																points="46,117 19,34 88,39"></polygon>
															<polygon fill="#b0a400" fill-opacity="0.501961"
																points="66,53 51,79 41,49"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="118,120 96,-16 65,143"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="37,139 -16,122 5,-16"></polygon>
															<polygon fill="#80aae0" fill-opacity="0.501961"
																points="23,110 77,112 69,56"></polygon>
															<polygon fill="#bac206" fill-opacity="0.501961"
																points="51,28 67,17 37,16"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="118,28 -16,3 97,-16"></polygon>
															<polygon fill="#95beef" fill-opacity="0.501961"
																points="14,56 91,34 24,23"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="75,143 113,111 -16,114"></polygon>
															<polygon fill="#c3ba00" fill-opacity="0.501961"
																points="60,72 43,72 59,48"></polygon>
														</g>
													</svg>
												-->
													<img class="card-thumb__img" width="466" height="580" src="{{ asset('storage/image/top_page/sweat/1.jpg') }}"
														alt="スウェット">
												</div>
											</div>
											<div class="card-thumbs__right">
												<div class="card__thumb"
													data-tn1="{{ asset('storage/image/top_page/sweat/2.jpg') }}">
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#f7f7f7">
														</rect>
													</svg>
													<img class="card-thumb__img" width="466" height="580" src="data:,"
														alt="スウェット">
												</div>
												<div class="card__thumb"
													data-tn1="{{ asset('storage/image/top_page/sweat/3.jpg') }}">
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#f7f7f7">
														</rect>
													</svg>
													<img class="card-thumb__img" width="466" height="580" src="data:,"
														alt="スウェット">
												</div>
												<div class="card__thumb"
													data-tn1="{{ asset('storage/image/top_page/sweat/4.jpg') }}">
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#f7f7f7">
														</rect>
													</svg>
													<img class="card-thumb__img" width="466" height="580" src="data:,"
														alt="スウェット">
												</div>
											</div>
										</div>

										<div class="card__title-wrap">
											<div class="card__title">スウェット</div>
											<div class="card__type">sweatshirt</div>
										</div>
									</a>

									<div class="card__info">
										<div class="card__avatars">
										</div>
									</div>
								</div>
							</li>



							<!-- ジャージ-->
							<li class="card card_set" data-id="2366">
								<div class="card__inner">
									<a class="card__link-overlay"
										href="" title="ジャージ"></a>

									<a class="card__link" href=""
										title="ジャージ">
										<div class="card__thumbs">
											<div class="card-thumbs__left">
												<div class="card__thumb card__thumb_1"
													data-tn1="https://yi-files.s3.eu-west-1.amazonaws.com/products/716000/716408/1229651-cover.jpg">
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#c8ccb7">
														</rect>
														<g transform="scale(4.531250) translate(0.5 0.5)">
															<polygon fill="#283b00" fill-opacity="0.501961"
																points="51,-16 78,113 24,113"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="34,143 -16,111 22,-16"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="71,143 80,-16 118,105"></polygon>
															<polygon fill="#5a6a0b" fill-opacity="0.501961"
																points="77,27 69,116 20,26"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="115,26 -16,4 94,-16"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="35,-16 -16,3 9,143"></polygon>
															<polygon fill="#56660b" fill-opacity="0.501961"
																points="67,113 26,28 38,114"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="-16,123 89,143 118,108"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="75,-16 80,143 118,27"></polygon>
															<polygon fill="#778145" fill-opacity="0.501961"
																points="29,115 72,15 33,16"></polygon>
														</g>
													</svg>
													<img class="card-thumb__img" width="466" height="580" src="data:,"
														alt="ジャージ">
												</div>
											</div>
											<div class="card-thumbs__right">
												<div class="card__thumb"
													data-tn1="https://yi-files.s3.eu-west-1.amazonaws.com/products/653000/653582/1132034-cover.jpg">
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#f7f7f7">
														</rect>
													</svg>
													<img class="card-thumb__img" width="466" height="580" src="data:,"
														alt="ジャージ">
												</div>
												<div class="card__thumb"
													data-tn1="https://yi-files.s3.eu-west-1.amazonaws.com/products/1443000/1443820/2344032-cover.jpg">
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#f7f7f7">
														</rect>
													</svg>
													<img class="card-thumb__img" width="466" height="580" src="data:,"
														alt="ジャージ">
												</div>
												<div class="card__thumb"
													data-tn1="https://yi-files.s3.eu-west-1.amazonaws.com/products/1349000/1349213/2214764-cover.jpg">
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#f7f7f7">
														</rect>
													</svg>
													<img class="card-thumb__img" width="466" height="580" src="data:,"
														alt="ジャージ">
												</div>
											</div>
										</div>

										<div class="card__title-wrap">
											<div class="card__title">ジャージ</div>
											<div class="card__type">Jersey wear</div>
										</div>
									</a>
									
									<div class="card__info">
										<div class="card__avatars">

										</div>

									</div>
								
								</div>
							</li>


							<!--２行目 -->
							<!--アウター -->
							<li class="card card_set" data-id="2902">
								<div class="card__inner">
									<a class="card__link-overlay"
										href="" title="outer wear"></a>

									<a class="card__link" href=""
										title="Snack Bar">
										<div class="card__thumbs">
											<div class="card-thumbs__left">
												<div class="card__thumb card__thumb_1"
													data-tn1="{{ asset('storage/image/top_page/outer/1.jpg') }}">
													<!--
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#e8e2d8">
														</rect>
														<g transform="scale(4.531250) translate(0.5 0.5)">
															<polygon fill="#90620c" fill-opacity="0.501961"
																points="72,98 59,10 34,108"></polygon>
															<polygon fill="#996912" fill-opacity="0.501961"
																points="32,23 69,60 69,30"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="-16,121 10,-16 52,143"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="102,-16 103,143 63,64"></polygon>
															<polygon fill="#d7c69e" fill-opacity="0.501961"
																points="31,116 62,58 33,15"></polygon>
															<polygon fill="#f8fafe" fill-opacity="0.501961"
																points="-15,44 6,-16 118,3"></polygon>
															<polygon fill="#95681e" fill-opacity="0.501961"
																points="63,106 44,98 65,66"></polygon>
															<polygon fill="#fafdff" fill-opacity="0.501961"
																points="118,109 78,-1 65,143"></polygon>
															<polygon fill="#d4c4a0" fill-opacity="0.501961"
																points="28,11 79,23 31,31"></polygon>
															<polygon fill="#d1c7ad" fill-opacity="0.501961"
																points="69,114 74,95 28,113"></polygon>
														</g>
													</svg>
												-->
													<img class="card-thumb__img" width="466" height="580" src="{{ asset('storage/image/top_page/outer/1.jpg') }}"
														alt="outer wear">
												</div>
											</div>
											<div class="card-thumbs__right">
												<div class="card__thumb"
													data-tn1="{{ asset('storage/image/top_page/outer/2.jpg') }}">
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#f7f7f7">
														</rect>
													</svg>
													<img class="card-thumb__img" width="466" height="580" src="data:,"
														alt="outer wear">
												</div>
												<div class="card__thumb"
													data-tn1="{{ asset('storage/image/top_page/outer/3.jpg') }}">
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#f7f7f7">
														</rect>
													</svg>
													<img class="card-thumb__img" width="466" height="580" src="data:,"
														alt="outer werar">
												</div>
												<div class="card__thumb"
													data-tn1="{{ asset('storage/image/top_page/outer/4.jpg') }}">
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#f7f7f7">
														</rect>
													</svg>
													<img class="card-thumb__img" width="466" height="580" src="data:,"
														alt="outer wear">
												</div>
											</div>
										</div>

										<div class="card__title-wrap">
											<div class="card__title">アウターウェア</div>
											<div class="card__type">outerwear</div>
										</div>
									</a>

									<div class="card__info">
										<div class="card__avatars">
										</div>
									</div>
								</div>
							</li>

							<li class="card card_set" data-id="1905">
								<div class="card__inner">
									<a class="card__link-overlay"
										href=""
										title="パンツ"></a>
									<a class="card__link" href=""
										title="パンツ">
										<div class="card__thumbs">
											<div class="card-thumbs__left">
												<div class="card__thumb card__thumb_1"
													data-tn1="{{ asset('storage/image/top_page/pants/1.jpg') }}">
													<!--
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#bcbbbc">
														</rect>
														<g transform="scale(4.531250) translate(0.5 0.5)">
															<polygon fill="#000000" fill-opacity="0.501961"
																points="87,51 36,130 28,9"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="90,-16 61,143 118,117"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="46,-16 -16,-16 3,143"></polygon>
															<polygon fill="#000000" fill-opacity="0.501961"
																points="66,14 23,79 69,111"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="87,143 1,68 -16,143"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="118,122 48,-12 108,-10"></polygon>
															<polygon fill="#110703" fill-opacity="0.501961"
																points="61,16 41,112 23,42"></polygon>
															<polygon fill="#000000" fill-opacity="0.501961"
																points="70,33 53,109 76,81"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="-16,114 118,101 89,143"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="-14,23 118,12 14,-16"></polygon>
														</g>
													</svg>
												-->
													<img class="card-thumb__img" width="466" height="580" src="{{ asset('storage/image/top_page/pants/1.jpg') }}"
														alt="パンツ">
												</div>
											</div>
											<div class="card-thumbs__right">
												<div class="card__thumb"
													data-tn1="{{ asset('storage/image/top_page/pants/2.jpg') }}">
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#f7f7f7">
														</rect>
													</svg>
													<img class="card-thumb__img" width="466" height="580" src="data:,"
														alt="パンツ">
												</div>
												<div class="card__thumb"
													data-tn1="{{ asset('storage/image/top_page/pants/3.jpg') }}">
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#f7f7f7">
														</rect>
													</svg>
													<img class="card-thumb__img" width="466" height="580" src="data:,"
														alt="パンツ">
												</div>
												<div class="card__thumb"
													data-tn1="{{ asset('storage/image/top_page/pants/4.jpg') }}">
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#f7f7f7">
														</rect>
													</svg>
													<img class="card-thumb__img" width="466" height="580" src="data:,"
														alt="パンツ">
												</div>
											</div>
										</div>

										<div class="card__title-wrap">
											<div class="card__title">パンツ</div>
											<div class="card__type">pants</div>
										</div>
									</a>

									<div class="card__info">
										<div class="card__avatars">
										</div>
									</div>
								</div>
							</li>

							<li class="card card_set" data-id="3398">
								<div class="card__inner">
									<a class="card__link-overlay"
										href=""
										title="バッグ"></a>

									<a class="card__link" href=""
										title="バッグ">
										<div class="card__thumbs">
											<div class="card-thumbs__left">
												<div class="card__thumb card__thumb_1"
													data-tn1="{{ asset('storage/image/top_page/bag/1.jpg') }}">
													<!--
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#ccc9c7">
														</rect>
														<g transform="scale(4.531250) translate(0.5 0.5)">
															<polygon fill="#010000" fill-opacity="0.501961"
																points="66,114 7,98 78,24"></polygon>
															<polygon fill="#320c00" fill-opacity="0.501961"
																points="28,37 32,70 76,41"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="58,-16 118,4 96,143"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="-2,142 -16,-16 46,-16"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="-16,122 95,143 112,104"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="118,47 98,-16 -15,4"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="-16,87 17,-16 32,81"></polygon>
															<polygon fill="#503420" fill-opacity="0.501961"
																points="68,111 45,23 76,38"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="80,-5 66,143 118,88"></polygon>
															<polygon fill="#300300" fill-opacity="0.501961"
																points="62,111 42,112 70,82"></polygon>
														</g>
													</svg>
												-->
													<img class="card-thumb__img" width="466" height="580" src="{{ asset('storage/image/top_page/bag/1.jpg') }}"
														alt="バッグ">
												</div>
											</div>
											<div class="card-thumbs__right">
												<div class="card__thumb"
													data-tn1="{{ asset('storage/image/top_page/bag/2.jpg') }}">
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#f7f7f7">
														</rect>
													</svg>
													<img class="card-thumb__img" width="466" height="580" src="data:,"
														alt="バッグ">
												</div>
												<div class="card__thumb"
													data-tn1="{{ asset('storage/image/top_page/bag/3.jpg') }}">
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#f7f7f7">
														</rect>
													</svg>
													<img class="card-thumb__img" width="466" height="580" src="data:,"
														alt="バッグ">
												</div>
												<div class="card__thumb"
													data-tn1="{{ asset('storage/image/top_page/bag/4.jpg') }}">
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#f7f7f7">
														</rect>
													</svg>
													<img class="card-thumb__img" width="466" height="580" src="data:,"
														alt="バッグ">
												</div>
											</div>
										</div>

										<div class="card__title-wrap">
											<div class="card__title">バッグ</div>
											<div class="card__type">bag</div>
										</div>
									</a>

									<div class="card__info">
										<div class="card__avatars">
										</div>
									</div>
								</div>
							</li>

							<li class="card card_set" data-id="2732">
								<div class="card__inner">
									<a class="card__link-overlay"
										href="" title="Face Mask"></a>

									<a class="card__link" href=""
										title="Face Mask">
										<div class="card__thumbs">
											<div class="card-thumbs__left">
												<div class="card__thumb card__thumb_1"
													data-tn1="{{ asset('storage/image/top_page/cap/1.jpg') }}">
													<!--
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#aeadae">
														</rect>
														<g transform="scale(4.531250) translate(0.5 0.5)">
															<polygon fill="#000000" fill-opacity="0.501961"
																points="72,121 8,63 76,12"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="35,143 -16,116 7,-16"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="99,-16 118,130 65,139"></polygon>
															<polygon fill="#10100e" fill-opacity="0.501961"
																points="32,119 24,24 65,11"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="95,-16 -16,3 118,27"></polygon>
															<polygon fill="#090801" fill-opacity="0.501961"
																points="24,108 62,113 88,52"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="118,108 -16,116 80,143"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="1,127 34,-16 -16,6"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="103,143 70,-16 117,-15"></polygon>
															<polygon fill="#1c1d1d" fill-opacity="0.501961"
																points="33,16 80,27 80,76"></polygon>
														</g>
													</svg>
												-->
													<img class="card-thumb__img" width="466" height="580" src="{{ asset('storage/image/top_page/cap/1.jpg') }}"
														alt="キャップ">
												</div>
											</div>
											<div class="card-thumbs__right">
												<div class="card__thumb"
													data-tn1="{{ asset('storage/image/top_page/cap/2.jpg') }}">
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#f7f7f7">
														</rect>
													</svg>
													<img class="card-thumb__img" width="466" height="580" src="data:,"
														alt="キャップ">
												</div>
												<div class="card__thumb"
													data-tn1="{{ asset('storage/image/top_page/cap/3.jpg') }}">
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#f7f7f7">
														</rect>
													</svg>
													<img class="card-thumb__img" width="466" height="580" src="data:,"
														alt="キャップ">
												</div>
												<div class="card__thumb"
													data-tn1="{{ asset('storage/image/top_page/cap/4.jpg') }}">
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#f7f7f7">
														</rect>
													</svg>
													<img class="card-thumb__img" width="466" height="580" src="data:,"
														alt="キャップ">
												</div>
											</div>
										</div>

										<div class="card__title-wrap">
											<div class="card__title">キャップ</div>
											<div class="card__type">cap</div>
										</div>
									</a>

									<div class="card__info">
										<div class="card__avatars">
										</div>
									</div>
								</div>
							</li>

							<!--３行目 -->
							<li class="card card_set" data-id="2902">
								<div class="card__inner">
									<a class="card__link-overlay"
										href="" title="タオル"></a>

									<a class="card__link" href=""
										title="Snack Bar">
										<div class="card__thumbs">
											<div class="card-thumbs__left">
												<div class="card__thumb card__thumb_1"
													data-tn1="{{ asset('storage/image/top_page/towel/1.jpg') }}">
													<!--
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#e8e2d8">
														</rect>
														<g transform="scale(4.531250) translate(0.5 0.5)">
															<polygon fill="#90620c" fill-opacity="0.501961"
																points="72,98 59,10 34,108"></polygon>
															<polygon fill="#996912" fill-opacity="0.501961"
																points="32,23 69,60 69,30"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="-16,121 10,-16 52,143"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="102,-16 103,143 63,64"></polygon>
															<polygon fill="#d7c69e" fill-opacity="0.501961"
																points="31,116 62,58 33,15"></polygon>
															<polygon fill="#f8fafe" fill-opacity="0.501961"
																points="-15,44 6,-16 118,3"></polygon>
															<polygon fill="#95681e" fill-opacity="0.501961"
																points="63,106 44,98 65,66"></polygon>
															<polygon fill="#fafdff" fill-opacity="0.501961"
																points="118,109 78,-1 65,143"></polygon>
															<polygon fill="#d4c4a0" fill-opacity="0.501961"
																points="28,11 79,23 31,31"></polygon>
															<polygon fill="#d1c7ad" fill-opacity="0.501961"
																points="69,114 74,95 28,113"></polygon>
														</g>
													</svg>
												-->
													<img class="card-thumb__img" width="466" height="580" src="{{ asset('storage/image/top_page/towel/1.jpg') }}"
														alt="タオル">
												</div>
											</div>
											<div class="card-thumbs__right">
												<div class="card__thumb"
													data-tn1="{{ asset('storage/image/top_page/towel/2.jpg') }}">
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#f7f7f7">
														</rect>
													</svg>
													<img class="card-thumb__img" width="466" height="580" src="data:,"
														alt="タオル">
												</div>
												<div class="card__thumb"
													data-tn1="{{ asset('storage/image/top_page/towel/3.jpg') }}">
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#f7f7f7">
														</rect>
													</svg>
													<img class="card-thumb__img" width="466" height="580" src="data:,"
														alt="タオル">
												</div>
												<div class="card__thumb"
													data-tn1="{{ asset('storage/image/top_page/towel/4.jpg') }}">
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#f7f7f7">
														</rect>
													</svg>
													<img class="card-thumb__img" width="466" height="580" src="data:,"
														alt="タオル">
												</div>
											</div>
										</div>

										<div class="card__title-wrap">
											<div class="card__title">タオル</div>
											<div class="card__type">towel</div>
										</div>
									</a>

									<div class="card__info">
										<div class="card__avatars">
										</div>
									</div>
								</div>
							</li>

							<li class="card card_set" data-id="1905">
								<div class="card__inner">
									<a class="card__link-overlay"
										href=""
										title="部活"></a>
									<a class="card__link" href=""
										title="部活">
										<div class="card__thumbs">
											<div class="card-thumbs__left">
												<div class="card__thumb card__thumb_1"
													data-tn1="{{ asset('storage/image/top_page/club/1.jpg') }}">
													<!--
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#bcbbbc">
														</rect>
														<g transform="scale(4.531250) translate(0.5 0.5)">
															<polygon fill="#000000" fill-opacity="0.501961"
																points="87,51 36,130 28,9"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="90,-16 61,143 118,117"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="46,-16 -16,-16 3,143"></polygon>
															<polygon fill="#000000" fill-opacity="0.501961"
																points="66,14 23,79 69,111"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="87,143 1,68 -16,143"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="118,122 48,-12 108,-10"></polygon>
															<polygon fill="#110703" fill-opacity="0.501961"
																points="61,16 41,112 23,42"></polygon>
															<polygon fill="#000000" fill-opacity="0.501961"
																points="70,33 53,109 76,81"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="-16,114 118,101 89,143"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="-14,23 118,12 14,-16"></polygon>
														</g>
													</svg>
												-->
													<img class="card-thumb__img" width="466" height="580" src="{{ asset('storage/image/top_page/club/1.jpg') }}"
														alt="部活">
												</div>
											</div>
											<div class="card-thumbs__right">
												<div class="card__thumb"
													data-tn1="{{ asset('storage/image/top_page/club/2.jpg') }}">
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#f7f7f7">
														</rect>
													</svg>
													<img class="card-thumb__img" width="466" height="580" src="data:,"
														alt="部活">
												</div>
												<div class="card__thumb"
													data-tn1="{{ asset('storage/image/top_page/club/3.jpg') }}">
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#f7f7f7">
														</rect>
													</svg>
													<img class="card-thumb__img" width="466" height="580" src="data:,"
														alt="部活">
												</div>
												<div class="card__thumb"
													data-tn1="{{ asset('storage/image/top_page/club/4.jpg') }}">
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#f7f7f7">
														</rect>
													</svg>
													<img class="card-thumb__img" width="466" height="580" src="data:,"
														alt="部活">
												</div>
											</div>
										</div>

										<div class="card__title-wrap">
											<div class="card__title">部活</div>
											<div class="card__type">club activities</div>
										</div>
									</a>

									<div class="card__info">
										<div class="card__avatars">
										</div>
									</div>
								</div>
							</li>

							<li class="card card_set" data-id="3398">
								<div class="card__inner">
									<a class="card__link-overlay"
										href="https://yellowimages.com/object-mockups/set/3398"
										title="Paper Coffee Cup"></a>

									<a class="card__link" href="https://yellowimages.com/object-mockups/set/3398"
										title="Paper Coffee Cup">
										<div class="card__thumbs">
											<div class="card-thumbs__left">
												<div class="card__thumb card__thumb_1"
													data-tn1="https://yi-files.s3.eu-west-1.amazonaws.com/products/1095000/1095900/1832845-cover.jpg">
													<!--
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#ccc9c7">
														</rect>
														<g transform="scale(4.531250) translate(0.5 0.5)">
															<polygon fill="#010000" fill-opacity="0.501961"
																points="66,114 7,98 78,24"></polygon>
															<polygon fill="#320c00" fill-opacity="0.501961"
																points="28,37 32,70 76,41"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="58,-16 118,4 96,143"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="-2,142 -16,-16 46,-16"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="-16,122 95,143 112,104"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="118,47 98,-16 -15,4"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="-16,87 17,-16 32,81"></polygon>
															<polygon fill="#503420" fill-opacity="0.501961"
																points="68,111 45,23 76,38"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="80,-5 66,143 118,88"></polygon>
															<polygon fill="#300300" fill-opacity="0.501961"
																points="62,111 42,112 70,82"></polygon>
														</g>
													</svg>
												-->
													<img class="card-thumb__img" width="466" height="580" src="data:,"
														alt="Paper Coffee Cup">
												</div>
											</div>
											<div class="card-thumbs__right">
												<div class="card__thumb"
													data-tn1="https://yi-files.s3.eu-west-1.amazonaws.com/products/1095000/1095803/1832611-cover.jpg">
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#f7f7f7">
														</rect>
													</svg>
													<img class="card-thumb__img" width="466" height="580" src="data:,"
														alt="Paper Coffee Cup">
												</div>
												<div class="card__thumb"
													data-tn1="https://yi-files.s3.eu-west-1.amazonaws.com/products/1095000/1095929/1833037-cover.jpg">
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#f7f7f7">
														</rect>
													</svg>
													<img class="card-thumb__img" width="466" height="580" src="data:,"
														alt="Paper Coffee Cup">
												</div>
												<div class="card__thumb"
													data-tn1="https://yi-files.s3.eu-west-1.amazonaws.com/products/1095000/1095816/1832638-cover.jpg">
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#f7f7f7">
														</rect>
													</svg>
													<img class="card-thumb__img" width="466" height="580" src="data:,"
														alt="Paper Coffee Cup">
												</div>
											</div>
										</div>

										<div class="card__title-wrap">
											<div class="card__title">エンブレム・ワッペン</div>
											<div class="card__type">emblem</div>
										</div>
									</a>

									<div class="card__info">
										<div class="card__avatars">
										</div>
									</div>
								</div>
							</li>

							<li class="card card_set" data-id="2732">
								<div class="card__inner">
									<a class="card__link-overlay"
										href="" title="その他"></a>

									<a class="card__link" href=""
										title="Face Mask">
										<div class="card__thumbs">
											<div class="card-thumbs__left">
												<div class="card__thumb card__thumb_1"
													data-tn1="{{ asset('storage/image/top_page/others/1.jpg') }}">
													<!--
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#aeadae">
														</rect>
														<g transform="scale(4.531250) translate(0.5 0.5)">
															<polygon fill="#000000" fill-opacity="0.501961"
																points="72,121 8,63 76,12"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="35,143 -16,116 7,-16"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="99,-16 118,130 65,139"></polygon>
															<polygon fill="#10100e" fill-opacity="0.501961"
																points="32,119 24,24 65,11"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="95,-16 -16,3 118,27"></polygon>
															<polygon fill="#090801" fill-opacity="0.501961"
																points="24,108 62,113 88,52"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="118,108 -16,116 80,143"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="1,127 34,-16 -16,6"></polygon>
															<polygon fill="#ffffff" fill-opacity="0.501961"
																points="103,143 70,-16 117,-15"></polygon>
															<polygon fill="#1c1d1d" fill-opacity="0.501961"
																points="33,16 80,27 80,76"></polygon>
														</g>
													</svg>
												-->
													<img class="card-thumb__img" width="466" height="580" src="{{ asset('storage/image/top_page/others/1.jpg') }}"
														alt="その他">
												</div>
											</div>
											<div class="card-thumbs__right">
												<div class="card__thumb"
													data-tn1="{{ asset('storage/image/top_page/others/2.jpg') }}">
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#f7f7f7">
														</rect>
													</svg>
													<img class="card-thumb__img" width="466" height="580" src="data:,"
														alt="その他">
												</div>
												<div class="card__thumb"
													data-tn1="{{ asset('storage/image/top_page/others/3.jpg') }}">
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#f7f7f7">
														</rect>
													</svg>
													<img class="card-thumb__img" width="466" height="580" src="data:,"
														alt="その他">
												</div>
												<div class="card__thumb"
													data-tn1="{{ asset('storage/image/top_page/others/4.jpg') }}">
													<svg viewBox="0 0 466 580" xmlns="http://www.w3.org/2000/svg"
														version="1.1" width="466" height="580">
														<rect x="0" y="0" width="466" height="580" fill="#f7f7f7">
														</rect>
													</svg>
													<img class="card-thumb__img" width="466" height="580" src="data:,"
														alt="その他">
												</div>
											</div>
										</div>

										<div class="card__title-wrap">
											<div class="card__title">その他</div>
											<div class="card__type">others</div>
										</div>
									</a>

									<div class="card__info">
										<div class="card__avatars">
										</div>
									</div>
								</div>
							</li>
						</ul>

						<a class="pill pill_black pill_arrow" href="https://yellowimages.com/object-mockups/sets">
							<span>Explore all</span><svg width="18" height="18">
								<use xlink:href="#arrow-right"></use>
							</svg>
						</a>
					</div>
				</section>
			</div>
		</div>


		@include('parts.footer')