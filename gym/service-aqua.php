<?php include 'tpl/header.php'; ?>

		<div class="breadcrums">
			<div class="container">
				<div class="row">
					<ul class="breadcrums__list">
						<li class="breadcrums__item"><a href="index.php">Главная</a></li>
						<li class="breadcrums__item"><a href="service.php">Услуги</a></li>
						<li class="breadcrums__item">Аквазона</li>
					</ul>
				</div>
			</div>
		</div>
	
		<div class="section service-page">
			<div class="container">
				<div class="row">
					<div class="big_title">Аквазона</div>
					<div class="service__info">
						<p>Вас зустріне кваліфікована команда інструкторів аква-зони, яка допоможе Вам з максимальною користю провести час у басейні. Багатоступенева система очищення: Піскові фільтри, ультрафіолет, озонування. Наші басейни мають швидкий, повний цикл водообміну — кожних 4 години вода  у бассейнах повністю очищується.</p>
						<div class="service__details">
							<div class="service__details__item">
								<div class="service__details__title">Розміри басейнів:</div>
								<p>Дорослий – 10 x 6, глибина – 130-210 см. ( з протитечією) <br>
									Дитячий – 6 х 4, глибина – 70 см.</p>
							</div>
							<div class="service__details__item">
								<div class="service__details__title">Температурний режим:</div>
								<p>Вода: дорослий – 27-28, дитячий – 30-33 <br>
									Повітря: дорослий – 28, дитячий – 30-31 <br>
									Черговий тренер протягом всього дня</p>
							</div>
							<div class="service__details__item">
								<div class="service__details__title">Обладнання:</div>
								<p>для всіх відвідувачів басейну (дошки, калабашки) <br>
									для аква аеробіки (пояс, нуделс, аква гантелі)</p>
							</div>
						</div>
					</div>
					<div class="category">
						<div class="category__list desctop">
							<div class="category__item"><button class="btn active">Все</button></div>
							<div class="category__item"><button class="btn btn-inverse">Детское плавание</button></div>
							<div class="category__item"><button class="btn btn-inverse">Детские секции</button></div>
							<div class="category__item"><button class="btn btn-inverse">Персональный тренинг</button></div>
							<div class="category__item"><button class="btn btn-inverse">Аквааеробика</button></div>
							<div class="category__item"><button class="btn btn-inverse">Тренировки для беременных</button></div>
						</div>
						<div class="category__list mobile">
							<div class="category__select__wrapp">
								<select name="category__select" id="category__select" class="category__select btn">
									<option value="">Все</option>
									<option value="">Детское плавание</option>
									<option value="">Детские секции</option>
									<option value="">Персональный тренинг</option>
									<option value="">Аквааеробика</option>
									<option value="">Тренировки для беременных</option>
								</select>
							</div>
						</div>
					</div>
					<div class="service__list--inner">
						<div class="row">
							<div class="col-md-4 col-xs-6 center">
								<div class="service__item__wrapp">
									<div class="service__ico"><img src="image/child-sweem.svg" alt=""></div>
									<div class="service__name">Дитяче плавання</div>
									<div class="service__describe">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat risus in risus imperdiet euismod. Mauris posuere bibendum maximus.</div>
								</div>
							</div>
							<div class="col-md-4 col-xs-6 center">
								<div class="service__item__wrapp">
									<div class="service__ico"><img src="image/sweem-grud.svg" alt=""></div>
									<div class="service__name">Плавание для грудничков</div>
									<div class="service__describe">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat risus in risus imperdiet euismod. Mauris posuere bibendum maximus.</div>
								</div>
							</div>
							<div class="col-md-4 col-xs-6 center">
								<div class="service__item__wrapp">
									<div class="service__ico"><img src="image/aqua-aerobik.svg" alt=""></div>
									<div class="service__name">Аква аеробіка</div>
									<div class="service__describe">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat risus in risus imperdiet euismod. Mauris posuere bibendum maximus.</div>
								</div>
							</div>
							<div class="col-md-4 col-xs-6 center">
								<div class="service__item__wrapp">
									<div class="service__ico"><img src="image/personal-train.svg" alt=""></div>
									<div class="service__name">Персональні тренування</div>
									<div class="service__subtitle">( плавання + аеробіка)</div>
									<div class="service__describe">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat risus in risus imperdiet euismod. Mauris posuere bibendum maximus.</div>
								</div>
							</div>
							<div class="col-md-4 col-xs-6 center">
								<div class="service__item__wrapp">
									<div class="service__ico"><img src="image/train-berem.svg" alt=""></div>
									<div class="service__name">Тренування для вагітних</div>
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
