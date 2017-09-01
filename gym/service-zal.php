<?php include 'tpl/header.php'; ?>

		<div class="breadcrums">
			<div class="container">
				<div class="row">
					<ul class="breadcrums__list">
						<li class="breadcrums__item"><a href="index.php">Главная</a></li>
						<li class="breadcrums__item"><a href="service.php">Услуги</a></li>
						<li class="breadcrums__item">Тренажерный зал</li>
					</ul>
				</div>
			</div>
		</div>
	
		<div class="section service-page">
			<div class="container">
				<div class="row">
					<div class="big_title">Тренажерный зал</div>
					<div class="service__info">
						<p>В залах працюють висококваліфіковані тренери, які отримали  сертифікати з різних напрямків силового тренінгу і роботи по нарощуванню м`язової маси, зниженню маси тіла, реабілітаційним програмам, роботі з вагітними жінками і в післяпологовий період. Вони можуть розробити для вас індивідуальні програми тренувань, допомогти відновитись після травм, підібрати оптимальні схеми харчування і завжди прийдуть на допомогу, якщо Ви будете лінуватись!</p>
					</div>
					<div class="category">
						<div class="category__list desctop">
							<div class="category__item"><button class="btn active">Все</button></div>
							<div class="category__item"><button class="btn btn-inverse">Персональный тренинг</button></div>
							<div class="category__item"><button class="btn btn-inverse">Кардио зона</button></div>
							<div class="category__item"><button class="btn btn-inverse">Зона блочных тренажеров</button></div>
							<div class="category__item"><button class="btn btn-inverse">Зона свободных весов</button></div>
						</div>
						<div class="category__list mobile">
							<div class="category__select__wrapp">
								<select name="category__select" id="category__select" class="category__select btn">
									<option value="">Все</option>
									<option value="">Персональный тренинг</option>
									<option value="">Кардио зона</option>
									<option value="">Зона блочных тренажеров</option>
									<option value="">Зона свободных весов</option>
								</select>
							</div>
						</div>
					</div>
					<div class="service__list--inner">
						<div class="row">
							<div class="col-md-4 col-xs-6 center">
								<div class="service__item__wrapp">
									<div class="service__ico"><img src="image/personal-training.svg" alt=""></div>
									<div class="service__name">Персональный тренинг</div>
									<div class="service__describe">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat risus in risus imperdiet euismod. Mauris posuere bibendum maximus.</div>
								</div>
							</div>
							<div class="col-md-4 col-xs-6 center">
								<div class="service__item__wrapp">
									<div class="service__ico"><img src="image/cardio.svg" alt=""></div>
									<div class="service__name">Кардіо зона</div>
									<div class="service__describe">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat risus in risus imperdiet euismod. Mauris posuere bibendum maximus.</div>
								</div>
							</div>
							<div class="col-md-4 col-xs-6 center">
								<div class="service__item__wrapp">
									<div class="service__ico"><img src="image/zone.svg" alt=""></div>
									<div class="service__name">Зона блочних тренажерів</div>
									<div class="service__describe">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat risus in risus imperdiet euismod. Mauris posuere bibendum maximus.</div>
								</div>
							</div>
							<div class="col-md-4 col-xs-6 center">
								<div class="service__item__wrapp">
									<div class="service__ico"><img src="image/zone-free.svg" alt=""></div>
									<div class="service__name">Зона вільних вагів</div>
									<div class="service__describe">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat risus in risus imperdiet euismod. Mauris posuere bibendum maximus.</div>
								</div>
							</div>
						</div>
					</div>
					<div class="title">Расписание</div>
					<div class="table__wrapp timetable__wrapp">
						<div class="timetable table">
							<div class="tr">
								<div class="th"><span class="full__name">Понедельник</span><span class="short__name">Пн</span></div>
								<div class="td">12:00 - 16:00</div>
							</div>
							<div class="tr">
								<div class="th"><span class="full__name">Вторник</span><span class="short__name">Вт</span></div>
								<div class="td"></div>
							</div>
							<div class="tr">
								<div class="th"><span class="full__name">Среда</span><span class="short__name">Ср</span></div>
								<div class="td">14:00 - 18:00</div>
							</div>
							<div class="tr">
								<div class="th"><span class="full__name">Четверг</span><span class="short__name">Чт</span></div>
								<div class="td"></div>
							</div>
							<div class="tr">
								<div class="th"><span class="full__name">Пятница</span><span class="short__name">Пт</span></div>
								<div class="td">12:00 - 16:00</div>
							</div>
							<div class="tr">
								<div class="th"><span class="full__name">Суббота</span><span class="short__name">Сб</span></div>
								<div class="td">12:00 - 16:00</div>
							</div>
							<div class="tr">
								<div class="th"><span class="full__name">Воскресеные</span><span class="short__name">Вс</span></div>
								<div class="td"></div>
							</div>
						</div>
					</div>
					<div class="instructors">
						<div class="title__row">
							<div class="title">Инструктура</div>
							<div class="arrow">
								<div class="slide-count-wrap">
									<div class="current"></div>
									<div class="slesh">/</div>
									<div class="total"></div>
								</div>
							</div>
						</div>
						<div class="instructors__slider">
							<div class="instructors__item">
								<div class="instructors__wrapp">
									<div class="instructors__photo"><img src="picture/trener.jpg" alt=""></div>
									<div class="instructors__info">
										<div class="instructors__name">Рибак Сергій</div>
										<div class="instructors__btn">
											<a href="" class="btn btn-inverse btn-instructor">Записатся</a>
										</div>
									</div>
								</div>
							</div>	
							<div class="instructors__item">
								<div class="instructors__wrapp">
									<div class="instructors__photo"><img src="picture/trener.jpg" alt=""></div>
									<div class="instructors__info">
										<div class="instructors__name">Рибак Сергій</div>
										<div class="instructors__btn">
											<a href="" class="btn btn-inverse btn-instructor">Записатся</a>
										</div>
									</div>
								</div>
							</div>	
							<div class="instructors__item">
								<div class="instructors__wrapp">
									<div class="instructors__photo"><img src="picture/trener.jpg" alt=""></div>
									<div class="instructors__info">
										<div class="instructors__name">Рибак Сергій</div>
										<div class="instructors__btn">
											<a href="" class="btn btn-inverse btn-instructor">Записатся</a>
										</div>
									</div>
								</div>
							</div>	
							<div class="instructors__item">
								<div class="instructors__wrapp">
									<div class="instructors__photo"><img src="picture/trener.jpg" alt=""></div>
									<div class="instructors__info">
										<div class="instructors__name">Рибак Сергій</div>
										<div class="instructors__btn">
											<a href="" class="btn btn-inverse btn-instructor">Записатся</a>
										</div>
									</div>
								</div>
							</div>	
							<div class="instructors__item">
								<div class="instructors__wrapp">
									<div class="instructors__photo"><img src="picture/trener.jpg" alt=""></div>
									<div class="instructors__info">
										<div class="instructors__name">Рибак Сергій</div>
										<div class="instructors__btn">
											<a href="" class="btn btn-inverse btn-instructor">Записатся</a>
										</div>
									</div>
								</div>
							</div>	
							<div class="instructors__item">
								<div class="instructors__wrapp">
									<div class="instructors__photo"><img src="picture/trener.jpg" alt=""></div>
									<div class="instructors__info">
										<div class="instructors__name">Рибак Сергій</div>
										<div class="instructors__btn">
											<a href="" class="btn btn-inverse btn-instructor">Записатся</a>
										</div>
									</div>
								</div>
							</div>	
							<div class="instructors__item">
								<div class="instructors__wrapp">
									<div class="instructors__photo"><img src="picture/trener.jpg" alt=""></div>
									<div class="instructors__info">
										<div class="instructors__name">Рибак Сергій</div>
										<div class="instructors__btn">
											<a href="" class="btn btn-inverse btn-instructor">Записатся</a>
										</div>
									</div>
								</div>
							</div>	
							<div class="instructors__item">
								<div class="instructors__wrapp">
									<div class="instructors__photo"><img src="picture/trener.jpg" alt=""></div>
									<div class="instructors__info">
										<div class="instructors__name">Рибак Сергій</div>
										<div class="instructors__btn">
											<a href="" class="btn btn-inverse btn-instructor">Записатся</a>
										</div>
									</div>
								</div>
							</div>	
						</div>
					</div>
				</div>
			</div>
		</div>

<?php include 'tpl/footer.php'; ?>
