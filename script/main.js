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

// 베스트 아이템

let sections = document.querySelectorAll('main .scroll_event');
let sections_array = Array.from(sections);

let position_array = [];
for (let el of sections_array) {
	position_array.push(el.offsetTop);
}
let best_item_active_scrollTop = 1450;
window.addEventListener('scroll', () => {
	let scroll =
		window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

	sections_array.map((el, index) => {
		if (scroll >= best_item_active_scrollTop) {
			sections_array[index].classList.add('on');
		}
	});
});

// 탭 섹션 호버 시 이미지 경로 변환
