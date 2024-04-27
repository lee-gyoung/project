// 헤더 서브 메뉴 슬라이드
$('.header_slide').hover(
	function () {
		$(this).children('li > .sub_menu').stop().slideDown();
	},
	function () {
		$(this).children('li > .sub_menu').stop().slideUp();
	}
);

// 헤더 햄버거 버튼 작동
// let leftBtn = document.querySelector('#header_left_btn');
// let leftMenu = document.querySelector('#left_btn_menu');

// leftBtn.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	leftBtn.classList.toggle('on');
// 	leftMenu.classList.toggle('on');
// });

$('#header_left_btn').click(function () {
	$(this).toggleClass('on');
});

$(function () {
	$('#left_btn_menu').toggle('slide', {
		direction: 'left',
	});
});

// $('#header_left_btn').click(
// 	function () {
// 		$(this).toggleClass('on');
// 	},
// 	function () {
// 		$('#left_btn_menu').slideToggle({ direction: 'left' });
// 	}
// );

// $('#left_btn_menu').$(function () {
// 	$('#left_btn_menu').slideToggle({ direction: 'left' });
// });

// $(function () {
// 	$('#left_btn_menu').toggleClass('on').slideToggle({ direction: 'left' });
// });
