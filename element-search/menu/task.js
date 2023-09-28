let menuLink = document.querySelectorAll('.menu__link');
for (let element of menuLink) {
	element.addEventListener('click', (e) => {
		let menuSub = element.closest('.menu__item').querySelector('.menu_sub');
		if (menuSub) {
			e.preventDefault();
			menuSub.classList.toggle('menu_active');
		}
	})
}