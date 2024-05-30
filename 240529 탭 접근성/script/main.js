let dts = document.querySelectorAll('#tab dt');
let dds = document.querySelectorAll('#tab dd');

let dts_a = document.querySelectorAll('#tab dt>a');

dts_a.forEach((el, index) => {
	el.addEventListener('focusin', () => {
		active(dts, index);
		// for (let el of dts) {
		// 	el.classList.remove('on');
		// }
		// dts[index].classList.add('on');
		active(dds, index);
		// for (let el of dds) {
		// 	el.classList.remove('on');
		// }
		// dds[index].classList.add('on');
	});
});

function active(array, index) {
	for (let el of array) {
		el.classList.remove('on');
	}
	array[index].classList.add('on');
}

// 탭 메뉴의 경우 focusin을 사용하는 것이 편하지만,
// 브라우저의 호환성이 떨어지기 때문에 click이벤트도 추가해주는 것이 좋음
