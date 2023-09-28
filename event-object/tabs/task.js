const tab = Array.from(document.querySelectorAll('.tab'))
const content = Array.from(document.querySelectorAll('.tab__content'))


tab.forEach((element, index) => {
	element.addEventListener('click', (e) => {

		for (let element of tab) {
			element.classList.remove('tab_active')
		}

		for (let element of content) {
			element.classList.remove('tab__content_active')
		}

		tab[index].classList.add('tab_active')
		content[index].classList.add('tab__content_active')

		e.preventDefault();
	})

})