let arrText = Array.from(document.querySelectorAll('.rotator__case'));
console.log(arrText);

let index = 0;

function infinity() {
	arrText.forEach((element) => {
		element.classList.remove('rotator__case_active');
	})

	//index = (index + 1) % arrText.length;

	index += 1;
	if (index === arrText.length) {
		index = 0;
	}

	let nextStep = arrText[index];
	nextStep.classList.add('rotator__case_active')
}

setInterval(() => {
	infinity();
}, 1000)