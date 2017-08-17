<?php include 'tpl/header.php'; ?>

		<div class="breadcrums">
			<div class="container">
				<div class="row">
					<ul class="breadcrums__list">
						<li class="breadcrums__item"><a href="index.php">Главная</a></li>
						<li class="breadcrums__item">Контакты</li>
					</ul>
				</div>
			</div>
		</div>
	
		<div class="section contact">
			<div class="container">
				<div class="row">
					<div class="big_title">Контакты</div>
					<div class="map">
						<div class="contact_top mobile">
							<div class="contact__box">
								<p><a href="">096 966-00-99</a> — (відділ продажу)</p>
							</div>
							<div class="contact__box">
								<p><a href="">067 473-84-77</a> — (рецепція)</p>
							</div>
							<div class="contact__box">
								<p><a href="">kf@eurogym.com.ua</a></p>
							</div>
							<div class="contact__box">
								<p><span>Ми знаходимось:</span> с. Крюківщина, вул. Жулянська, 1А, на першому поверсі будинку ЖК “Европейське місто”.</p>
							</div>
							<div class="contact__box">
								<button class="btn btn-inverse btn-contact">Проложить маршрут</button>
							</div>
						</div>
						<div class="map__wrapp map__wrapp--contact">
							<div id="map"></div>
						</div>
						<div class="contact__send">
							<form class="contact__form form">
								<div class="form__title">Напишите нам</div>
								<div class="form__box">
									<input type="text" class="formIpt freeIpt" placeholder="Ваше имя">
								</div>
								<div class="form__box">
									<input type="text" class="formIpt freeIpt" placeholder="Ваш телефон">
								</div>
								<div class="form__box">
									<input type="submit" class="formSbt freeSbt btn btn-inverse" value="Отправить">
								</div>
							</form>
						</div>
					</div>
					<div class="row contact__row">
						<div class="col-sm-6 contact_top desctop">
							<div class="contact__box">
								<p><a href="">096 966-00-99</a> — (відділ продажу)</p>
							</div>
							<div class="contact__box">
								<p><a href="">067 473-84-77</a> — (рецепція)</p>
							</div>
							<div class="contact__box">
								<p><a href="">kf@eurogym.com.ua</a></p>
							</div>
							<div class="contact__box">
								<p><span>Ми знаходимось:</span> с. Крюківщина, вул. Жулянська, 1А, на першому поверсі будинку ЖК “Европейське місто”.</p>
							</div>
							<div class="contact__box">
								<button class="btn btn-inverse btn-contact">Проложить маршрут</button>
							</div>
						</div>
						<div class="col-sm-6">
							<div class="contact__box">
								<div class="subtitle">З Києва до нас можна доїхати:</div>
								<p>від Севастопольської площі: маршрутне таксі в бік Жулян, №368, до зупинки “Крюківщина, Европейське місто”.</p>
								<p>від м. Виставковий центр: маршрутне таксі №812, до зупинки “Крюківщина, Европейське місто”.</p>
								<p>від м. Теремки: маршрутне таксі №723, до зупинки “Світлофор у Крюківщині”, далі пройти по дорозі на Київ 600 м.</p>
								<p>від м. Академмістечко: маршрутка 301 до кінцевої, перейти залізничні колії, далі по Святоюріївській до вул. Я. Мудрого.</p>
							</div>
							<div class="contact__box">
								<div class="subtitle">Автотранспортом:</div>
								<p>від м. Академмістечко: маршрутка 301 до кінцевої, перейти залізничні колії, далі по Святоюріївській до вул. Я. Мудрого.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

<?php include 'tpl/footer.php'; ?>


<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js"></script>
<script type="text/javascript">
    // When the window has finished loading create our google map below
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        // Basic options for a simple Google Map
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,                     // Set the zoom level manually
			scrollwheel: false,
			disableDoubleClickZoom: true,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(40.6700, -73.9400), // New York

            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.6700, -73.9400),
            map: map,
            title: 'Snazzy!',
            icon: 'image/market.png' // null = default icon
        });
    }
</script>