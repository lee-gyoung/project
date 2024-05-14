// 헤더 서브 메뉴 슬라이드
$('.header_slide').hover(
	function () {
		$(this).children('li > .sub_menu').stop().slideDown();
	},
	function () {
		$(this).children('li > .sub_menu').stop().slideUp();
	}
);

// 모바일 버전 서브 메뉴 클릭 이벤트

$('.btn_fold').click(function () {
	let $sub = $(this).children('.btn_sub_menu');
	$(this).children('.btn_sub_menu').stop().slideToggle();
});

// 헤더 햄버거 버튼 작동
let leftBtn = document.querySelector('#header_left_btn');
let leftMenu = document.querySelector('#left_btn_menu');

leftBtn.addEventListener('click', (e) => {
	e.preventDefault();
	leftBtn.classList.toggle('on');
	leftMenu.classList.toggle('on');
});

// 좌측 슬라이드
var swiper = new Swiper('#main_slide_left', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	centeredSlides: true,
	loop: true,
	autoplay: {
		delay: 3600,
		disableOnInteraction: false,
	},
});

// 우측 슬라이드
$('#right_slide_wrapper .right_slide_pics li:gt(0)').hide();

setInterval(function () {
	$('#right_slide_wrapper .right_slide_pics li:first-child')
		.fadeOut()
		.next('li')
		.fadeIn()
		.end()
		.appendTo('.right_slide_pics');
}, 3900);
