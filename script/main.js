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
//호버할때
// $('.btn_fold').hover(
// 	function () {
// 		$(this).children('.btn_sub_menu').stop().slideDown();
// 	},
// 	function () {
// 		$(this).children('.btn_sub_menu').stop().slideUp();
// 	}
// );

//클릭할때 1번코드
$('.btn_fold').click(function () {
	let $sub = $(this).children('.btn_sub_menu');
	$(this).children('.btn_sub_menu').stop().slideToggle();
});

//클릭할때 2번코드
// $('.btn_fold').click(function () {
// 	let $sub = $(this).children('.btn_sub_menu');
// 	if ($sub.is(':visible')) {
// 		$sub.stop().slideUp();
// 	} else {
// 		$sub.stop().slideDown();
// 	}
// });

// 헤더 햄버거 버튼 작동
let leftBtn = document.querySelector('#header_left_btn');
let leftMenu = document.querySelector('#left_btn_menu');

leftBtn.addEventListener('click', (e) => {
	e.preventDefault();
	leftBtn.classList.toggle('on');
	leftMenu.classList.toggle('on');
});

// 좌측 슬라이드
var swiper = new Swiper('#main_slide', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	centeredSlides: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: true,
	},
});
