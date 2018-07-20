$('document').ready(function(){
	// show overlay contact form
	$('.feedback').on('click', function(){
		$('.popup-form').fadeIn(500);
	});

	// open submenu
	$('.catalog>li>a').on('click', function(){
		$(this).parent('li').children('.submenu').toggleClass('submenu-active');

		// change product`s section via link
		// like Главная/Каталог/Автомобили
		var category = $(this).attr('name');
		var categoryName = $('#catalog-position');
		switch(category){
			case 'technic':
				categoryName.text('Бытовая техника');
				break;
			case 'cars':
				categoryName.text('Автомобили');
				break;
			case 'mobile':
				categoryName.text('Мобильная техника');
				break;
			case 'computers':
				categoryName.text('Компьютеры');
				break;
			case 'dress':
				categoryName.text('Одежда');
				break;
			case 'area':
				categoryName.text('Недвижимость');
				break;
		}
	});

	// underline active link of submenu
	$('.catalog>li>a').on('click', function(){
		$(this).toggleClass("li-active");
	});

	//show product content, when you click on link of category
	// I comented it, because I didn`t know about need of these feature
	// $('.submenu li a').on('click', function(){
	// 	$('.products').addClass('products-show');
	// 	$('.products').removeClass('products');
	// });
})