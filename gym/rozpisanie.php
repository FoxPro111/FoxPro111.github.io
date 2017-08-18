<?php include 'tpl/header.php'; ?>

		<div class="breadcrums">
			<div class="container">
				<div class="row">
					<ul class="breadcrums__list">
						<li class="breadcrums__item"><a href="index.php">Главная</a></li>
						<li class="breadcrums__item">Расписание</li>
					</ul>
				</div>
			</div>
		</div>
	
		<div class="section rozpisanie-page">
			<div class="container">
				<div class="row">
					<div class="big_title">Расписание</div>
					<div class="category">
						<div class="category__list desctop">
							<div class="category__item"><button class="btn active">Все</button></div>
							<div class="category__item"><button class="btn btn-inverse">Груповые занятия</button></div>
							<div class="category__item"><button class="btn btn-inverse">Груповые занятия в басейне</button></div>
							<div class="category__item"><button class="btn btn-inverse">Детские груповые занятия</button></div>
						</div>
						<div class="category__list mobile">
							<div class="category__select__wrapp">
								<select name="category__select" id="category__select" class="category__select btn">
									<option value="">Все</option>
									<option value="">Груповые занятия</option>
									<option value="">Груповые занятия в басейне</option>
									<option value="">Детские груповые занятия</option>
								</select>
							</div>
						</div>
					</div>
					<div class="table__wrapp rozpisanie__wrapp">
						<div class="rozpisanie table">
							<div class="tr tr-th">
								<div class="th active" data-day-target="td-pn"><span class="full__name">Понедельник</span><span class="short__name">Пн</span></div>
								<div class="th" data-day-target="td-vt"><span class="full__name">Вторник</span><span class="short__name">Вт</span></div>
								<div class="th" data-day-target="td-sr"><span class="full__name">Среда</span><span class="short__name">Ср</span></div>
								<div class="th" data-day-target="td-ct"><span class="full__name">Четверг</span><span class="short__name">Чт</span></div>
								<div class="th" data-day-target="td-pt"><span class="full__name">Пятница</span><span class="short__name">Пт</span></div>
								<div class="th" data-day-target="td-sb"><span class="full__name">Суббота</span><span class="short__name">Сб</span></div>
								<div class="th" data-day-target="td-vs"><span class="full__name">Воскресеные</span><span class="short__name">Вс</span></div>
							</div>
							<div class="tr">
								<div class="td td-th">8:00</div>
								<div class="td td-day td-pn active" data-podskazka="podskazka" data-target="podskazka-1">Йога Анна 1</div>
								<div class="td td-day td-vt" data-podskazka="podskazka" data-target="podskazka-2">Йога Анна 2</div>
								<div class="td td-day td-sr" data-podskazka="podskazka" data-target="podskazka-1">Йога Анна 3</div>
								<div class="td td-day td-ct" data-podskazka="podskazka" data-target="podskazka-2">Йога Анна 4</div>
								<div class="td td-day td-pt" data-podskazka="podskazka" data-target="podskazka-1">Йога Анна 5</div>
								<div class="td td-day td-sb" data-podskazka="podskazka" data-target="podskazka-2">Йога Анна 6</div>
								<div class="td td-day td-vs" data-podskazka="podskazka" data-target="podskazka-1">Йога Анна 7</div>
							</div>
							<div class="tr">
								<div class="td td-th">9:00</div>
								<div class="td td-day td-pn active" data-podskazka="podskazka" data-target="podskazka-1">Йога Анна</div>
								<div class="td td-day td-vt" data-podskazka="podskazka" data-target="podskazka-2">Йога Анна</div>
								<div class="td td-day td-sr" data-podskazka="podskazka" data-target="podskazka-1">Йога Анна</div>
								<div class="td td-day td-ct" data-podskazka="podskazka" data-target="podskazka-2">Йога Анна</div>
								<div class="td td-day td-pt" data-podskazka="podskazka" data-target="podskazka-1">Йога Анна</div>
								<div class="td td-day td-sb" data-podskazka="podskazka" data-target="podskazka-2">Йога Анна</div>
								<div class="td td-day td-vs" data-podskazka="podskazka" data-target="podskazka-1">Йога Анна</div>
							</div>
							<div class="tr">
								<div class="td td-th">10:00</div>
								<div class="td td-day td-pn active" data-podskazka="podskazka" data-target="podskazka-1">Йога Анна</div>
								<div class="td td-day td-vt" data-podskazka="podskazka" data-target="podskazka-2">Йога Анна</div>
								<div class="td td-day td-sr" data-podskazka="podskazka" data-target="podskazka-1">Йога Анна</div>
								<div class="td td-day td-ct" data-podskazka="podskazka" data-target="podskazka-2">Йога Анна</div>
								<div class="td td-day td-pt" data-podskazka="podskazka" data-target="podskazka-1">Йога Анна</div>
								<div class="td td-day td-sb" data-podskazka="podskazka" data-target="podskazka-2">Йога Анна</div>
								<div class="td td-day td-vs" data-podskazka="podskazka" data-target="podskazka-1">Йога Анна</div>
							</div>
							<div class="tr">
								<div class="td td-th">11:00</div>
								<div class="td td-day td-pn active" data-podskazka="podskazka" data-target="podskazka-1">Йога Анна</div>
								<div class="td td-day td-vt" data-podskazka="podskazka" data-target="podskazka-2">Йога Анна</div>
								<div class="td td-day td-sr" data-podskazka="podskazka" data-target="podskazka-1">Йога Анна</div>
								<div class="td td-day td-ct" data-podskazka="podskazka" data-target="podskazka-2">Йога Анна</div>
								<div class="td td-day td-pt" data-podskazka="podskazka" data-target="podskazka-1">Йога Анна</div>
								<div class="td td-day td-sb" data-podskazka="podskazka" data-target="podskazka-2">Йога Анна</div>
								<div class="td td-day td-vs" data-podskazka="podskazka" data-target="podskazka-1">Йога Анна</div>
							</div>
							<div class="tr">
								<div class="td td-th">12:00</div>
								<div class="td td-day td-pn active" data-podskazka="podskazka" data-target="podskazka-1">Йога Анна</div>
								<div class="td td-day td-vt" data-podskazka="podskazka" data-target="podskazka-2">Йога Анна</div>
								<div class="td td-day td-sr" data-podskazka="podskazka" data-target="podskazka-1">Йога Анна</div>
								<div class="td td-day td-ct" data-podskazka="podskazka" data-target="podskazka-2">Йога Анна</div>
								<div class="td td-day td-pt" data-podskazka="podskazka" data-target="podskazka-1">Йога Анна</div>
								<div class="td td-day td-sb" data-podskazka="podskazka" data-target="podskazka-2">Йога Анна</div>
								<div class="td td-day td-vs" data-podskazka="podskazka" data-target="podskazka-1">Йога Анна</div>
							</div>
							<div class="tr">
								<div class="td td-th">13:00</div>
								<div class="td td-day td-pn active" data-podskazka="podskazka" data-target="podskazka-1">Йога Анна</div>
								<div class="td td-day td-vt" data-podskazka="podskazka" data-target="podskazka-2">Йога Анна</div>
								<div class="td td-day td-sr" data-podskazka="podskazka" data-target="podskazka-1">Йога Анна</div>
								<div class="td td-day td-ct" data-podskazka="podskazka" data-target="podskazka-2">Йога Анна</div>
								<div class="td td-day td-pt" data-podskazka="podskazka" data-target="podskazka-1">Йога Анна</div>
								<div class="td td-day td-sb" data-podskazka="podskazka" data-target="podskazka-2">Йога Анна</div>
								<div class="td td-day td-vs" data-podskazka="podskazka" data-target="podskazka-1">Йога Анна</div>
							</div>
							<div class="tr">
								<div class="td td-th">14:00</div>
								<div class="td td-day td-pn active" data-podskazka="podskazka" data-target="podskazka-1">Йога Анна</div>
								<div class="td td-day td-vt" data-podskazka="podskazka" data-target="podskazka-2">Йога Анна</div>
								<div class="td td-day td-sr" data-podskazka="podskazka" data-target="podskazka-1">Йога Анна</div>
								<div class="td td-day td-ct" data-podskazka="podskazka" data-target="podskazka-2">Йога Анна</div>
								<div class="td td-day td-pt" data-podskazka="podskazka" data-target="podskazka-1">Йога Анна</div>
								<div class="td td-day td-sb" data-podskazka="podskazka" data-target="podskazka-2">Йога Анна</div>
								<div class="td td-day td-vs" data-podskazka="podskazka" data-target="podskazka-1">Йога Анна</div>
							</div>
							<div class="podskazka podskazaka-rozpisanie" id="podskazka-1">
								<div class="podskazka__wrapp">
									<div class="podskazka__header">
										<div class="poskazka__day">Четверг</div>
										<div class="podskazka__time">11:00-13:00</div>
										<div class="podskazka__close"></div>
									</div>
									<div class="podskazka__content">
										<div class="podskazka__title">Название программы</div>
										<div class="podskazka__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin </div>
										<div class="poskazka__trener">Тренер: <a href="">Название тренера</a></div>
									</div>
								</div>
							</div>
							<div class="podskazka podskazaka-rozpisanie" id="podskazka-2">
								<div class="podskazka__wrapp">
									<div class="podskazka__header">
										<div class="poskazka__day">Четверг</div>
										<div class="podskazka__time">11:00-13:00</div>
										<div class="podskazka__close"></div>
									</div>
									<div class="podskazka__content">
										<div class="podskazka__title">Название программы</div>
										<div class="podskazka__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin </div>
										<div class="poskazka__trener">Тренер: <a href="">Название тренера</a></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

<?php include 'tpl/footer.php'; ?>
