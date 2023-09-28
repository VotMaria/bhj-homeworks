let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xhr.send();

let animation = document.getElementById('loader')

xhr.addEventListener('readystatechange', (e) => {

	if (xhr.readyState === xhr.DONE) {
		animation.classList.remove('loader_active')
		console.log(xhr.responseText)

		let answerFromServer = JSON.parse(xhr.responseText);

		let outputCharCode;
		let outputValue;
		let outputCurrency = '<div class="item__currency">' + 'руб.' + '</div>';
		let output = '';

		for (let key in answerFromServer) {
			let objValute = answerFromServer[key].Valute;
			console.log(objValute)

			for (let key in objValute) {
				outputCharCode = '<div class="item__code">' + objValute[key].CharCode + '</div>';
				console.log(outputCharCode)

				outputValue = '<div class="item__value">' + objValute[key].Value + '</div>';
				console.log(outputValue)

				output += '<div class="item">' + outputCharCode + outputValue + outputCurrency + '</div>';
			}
		}

		document.getElementById('items').innerHTML = output;


	}
	e.preventDefault();
})