let windows = document.getElementById('modal_main')

windows.classList.add('modal_active')

let windowsClose = document.querySelectorAll('.modal__close')

for (let element of windowsClose) {
	element.addEventListener('click', () => {
		element.closest('.modal').classList.remove('modal_active')
	})
}

let btn = document.querySelector('.btn')
let modalSuccess = document.getElementById('modal_success')

btn.addEventListener('click', () => {
	modalSuccess.classList.add('modal_active')
})