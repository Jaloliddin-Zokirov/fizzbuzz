let elForm = document.querySelector('.js-form');
let elInput = document.querySelector('.js-input');
let elText = document.querySelector('.js-text');

elForm.addEventListener('submit', function (evt) {
	evt.preventDefault();
	let elInputVal = elInput.value;
	elInput.value = '';
	let fizz = 5;
	let buzz = 3;
	let zero = 0;

	if (isNaN(elInputVal)) {
		elText.textContent = `Iltimos son kiriting`;
	} else if (elInputVal % fizz == zero && elInputVal % buzz == zero) {
		elText.textContent = `3 ga ham 5 ga ham qoldiqsiz bo'linadi`;
	} else if (elInputVal % fizz == zero) {
		elText.textContent = `5 ga qoldiqsiz bo'linadi`;
	} else if (elInputVal % buzz == zero) {
		elText.textContent = `3 ga qoldiqsiz bo'linadi`;
	} else {
		elText.textContent = `Bu son 3 ga ham 5 ga ham qoldiqsiz bo'linmaydi`;
	}
});
