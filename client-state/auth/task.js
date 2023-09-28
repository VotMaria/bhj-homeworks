let signinForm = document.getElementById('signin__form')
let welcome = document.getElementById('welcome')
let userId = document.getElementById('user_id')
let form = document.getElementById('signin')
let control = document.querySelectorAll('.control')

window.onload = () => {
	if (localStorage.id) {
		form.classList.remove('signin_active');
		welcome.classList.add('welcome_active');
		welcome.textContent += localStorage.id;
		console.log(localStorage.id)
	}
}

signinForm.addEventListener('submit', (e) => {

	let formData = new FormData(signinForm);
	let request = new XMLHttpRequest();
	request.responseType = 'json';
	request.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');

	request.onload = () => {
		let answerFromServer = request.response;
		console.log(answerFromServer)
		let id = answerFromServer.user_id;
		console.log(answerFromServer.success)

		if (answerFromServer.success === true) {
			localStorage.setItem('id', id);
		}

		if (id) {
			form.classList.remove('signin_active');
			welcome.classList.add('welcome_active');
			welcome.textContent += id
		} else {
			alert('Неверный логин/пароль');
			for (let element of control) {
				element.value = '';
			}
		}
	}
	request.send(formData);
	e.preventDefault();
})