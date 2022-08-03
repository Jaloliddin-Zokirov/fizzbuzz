let elForm = document.querySelector('.js-form');
let elInput = document.querySelector('.js-input');
let elList = document.querySelector('.js-list');

elForm.addEventListener('submit', function (evt) {
	evt.preventDefault();
	let list = [];
	let elInputVal = elInput.value;
	elInput.value = '';
	list.push(elInputVal);

	for (item of list) {
		let newItem = document.createElement('li');
		let newText = document.createElement('p');
		newItem.setAttribute('class', 'item');
		newText.setAttribute('class', 'text');
		newText.textContent = elInputVal;
		newItem.appendChild(newText);
		elList.appendChild(newItem);
	}
});
