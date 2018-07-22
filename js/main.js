//preloader
$(window).on('load', function () {
    $('.loader').delay(2000).fadeOut('slow');
});

$(document).ready(function(){
	// show overlay contact form
	$('.feedback').on('click', function(){
		$('.popup-form').fadeIn(500);
	});
	$('.close').on('click', function () {
		$('.popup-form').fadeOut(500);
    });

    $(".menu-toggle").on('click', function() {
        $(this).toggleClass("on");
        $('.menu-section').toggleClass("on");
        $("nav ul").toggleClass('hidden');
    });

    $('.nav ul li a').on('click', function () {
       $('nav ul').toggleClass('hidden');
    });

	//form validation

    $('#form-submit').on('click', function () {
        var name = $('#name').val();
        var tel = $('#phone').val();
        var isValidMail = ($('#mail').val().match(/.+?\@.+/g) || []).length===1;
        if(name == ''){
            $('#name').attr('placeholder','Поле обезательно для заполнения').css('border','2px solid red');
        }
        else {
            $('#name').css('border','2px solid green');
        }
        if(tel == ''){
            $('#phone').attr('placeholder','Поле обезательно для заполнения').css('border','2px solid red');
        }
        else $('#phone').css('border','2px solid green');
        if(isValidMail){
            $('#mail').css('border','2px solid green');
        }
        else $('#mail').attr('placeholder','Поле обезательно для заполнения').css('border','2px solid red');
        if(name && tel && mail){
            $('.success').html('Выполнено!');
        }
    })

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
    var speed = 500; //transition speed - fade
    var autoswitch = true; //auto slider options
    var autoswitch_speed = 4000; //auto slider speed

    // add first initial active class
    $(".slide").first().addClass("active");

    // hide all slides
    $(".slide").hide;

    // show only active class slide
    $(".active").show();

    // Next Event Handler
    $('#next').on('click', nextSlide);// call function nextSlide

    // Prev Event Handler
    $('#prev').on('click', prevSlide);// call function prevSlide

    // Auto Slider Handler
    if(autoswitch == true){
        setInterval(nextSlide,autoswitch_speed);// call function and value 4000
    }

    // Switch to next slide
    function nextSlide(){
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':last-child')){
            $('.slide').first().addClass('active');
        } else {
            $('.oldActive').next().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }

    // Switch to prev slide
    function prevSlide(){
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':first-child')){
            $('.slide').last().addClass('active');
        } else {
            $('.oldActive').prev().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }
})