$('document').ready(function(){
	$('.feedback').on('click', function(){
		$('.popup-form').fadeIn(500);
	});
	$('.catalog>li>a').on('click', function(){
		$(this).parent('li').children('.submenu').toggleClass('submenu-active');

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
	$('.catalog>li>a').on('click', function(){
		$(this).toggleClass("li-active");
	});
	$('.submenu li a').on('click', function(){
		$('.products').addClass('products-show');
		$('.products').removeClass('products');
	});
})