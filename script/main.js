// 헤더 햄버거 버튼 작동
let leftBtn = document.querySelector('#header_left_btn');
let leftMenu = document.querySelector('#left_btn_menu');

leftBtn.addEventListener('click', (e) => {
	e.preventDefault();
	leftBtn.classList.toggle('on');
	leftMenu.classList.toggle('on');
});

// 초기화면 스크롤 버튼 작동
let scrBtn = document.querySelector('#scrBtn');
scrBtn.addEventListener('click', function () {
	window.scrollTo({ left: 0, top: 960, behavior: 'smooth' });
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

// 스크롤 페이드 인아웃 이벤트
let sections = document.querySelectorAll('main .scroll_event');
let sections_array = Array.from(sections);
let position_array = [];

for (let el of sections_array) {
	position_array.push(el.offsetTop);
}
let best_item_active_scrollTop = 1500;
let new_product_active_scrollTop = 2300;

window.addEventListener('scroll', () => {
	let scroll =
		window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
	sections_array.forEach((el, index) => {
		if (scroll >= best_item_active_scrollTop && index === 2) {
			sections_array[index].classList.add('on');
		} else if (scroll >= new_product_active_scrollTop && index === 3) {
			sections_array[index].classList.add('on');
		} else {
			sections_array[index].classList.remove('on');
		}
	});
});

// 탭 메뉴 클릭 이벤트
$(document).ready(function () {
	$('#tab_title ul li').click(function () {
		$('#tab_title ul li').removeClass('active');

		$(this).addClass('active');

		let data = $(this).find('div').attr('data-tab');
		$('#tab_fragrance, #tab_nail, #tab_lip').removeClass('active');
		$(data).addClass('active');
	});
});

// 대상.attr(속성이름) -> 해당 속성을 대상에서 찾아서 가져옴
// 대상.attr(속성이름, 변경할 내용) -> 해당 속성을 찾아서 변경됨
