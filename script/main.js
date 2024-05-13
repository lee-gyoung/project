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
var swiper = new Swiper('#main_slide_left', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	centeredSlides: true,
	loop: true,
	autoplay: {
		delay: 4000,
		disableOnInteraction: true,
	},
});

// 우측 슬라이드
// var swipers = new Swiper('#main_slide_right', {
// 	direction: 'vertical',
// 	slidesPerView: 'auto',
// 	// spaceBetween: 30,
// 	mousewheel: true,
// 	freeMode: true,
// 	// pagination: {
// 	// 	el: '.pagination-right',
// 	// 	clickable: true,
// 	// },
// 	scrollbar: {
// 		el: '.swiper-scrollbar',
// 	},
// });

// 해당 페이지 도달하면 스크롤 내려가게끔 수정 필요,
// 마우스가 어디에 있든 슬라이드 움직일 수 있게하면 좋을듯
// 스크롤 종료 시 다음 페이지로 넘어갈 수 있게

// 스크롤 이벤트
let slides = document.querySelectorAll('.main_slide');
