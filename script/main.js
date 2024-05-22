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

// 초기화면 스크롤 버튼 작동
// 1.
// $(document).ready(function ($) {
// 	$('#scrBtn').click(function (e) {
// 		e.preventDefault();
// 		$('html').animate({ scrollTop: $('#scrBtn').offset().top }, 500);
// 	});
// });

// 2.
let scrBtn = document.querySelector('#scrBtn');
scrBtn.addEventListener('click', function () {
	window.scrollTo({ left: 0, top: 860, behavior: 'smooth' });
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

// 비주얼 파트 로고 교체 이벤트
// $(document).ready(function () {
// 	$(window).scroll(function () {
// 		$('#visual_logo').each(function (i) {
// 			var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 1;
// 			var bottom_of_window = $(window).scrollTop() + $(window).height();

// 			if (bottom_of_window > bottom_of_element) {
// 				$(this).animate({ opacity: '1' }, 1000);
// 			}
// 		});
// 	});
// });

// $('#visual_logo').attr({ src: '../img/visual part/2green.png' });

$(window).scroll(function () {
	var height = $(window).scrollTop();
	// console.log(height);
	// if (height > 2500) {
	// 	let vi = document.querySelector('#visual_logo');
	// 	vi.setAttribute('src', './img/visual part/2green.png');
	// } else {
	// 	let vi = document.querySelector('#visual_logo');
	// 	vi.setAttribute('src', './img/visual part/1w.png');
	// 	console.log(height);
	// }
});

// 베스트 아이템

let sections = document.querySelectorAll('main .scroll_event');
let sections_array = Array.from(sections);
console.log(sections_array);
console.log(sections[1].offsetTop);
console.log(sections[2].offsetTop);

let position_array = [];
for (let el of sections_array) {
	position_array.push(el.offsetTop);
}

window.addEventListener('scroll', () => {
	let scroll =
		window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

	sections_array.map((el, index) => {
		if (scroll >= 1450) {
			sections_array[index].classList.add('on');
		}
	});
});
