const dropdownList = document.querySelector('.dropdown__list')

const dropdownValue = document.querySelector('.dropdown__value')

const dropdownItem = Array.from(document.querySelectorAll('.dropdown__item'))

const dropdownLink = Array.from(document.querySelectorAll('.dropdown__link'))

dropdownValue.addEventListener('click', () => {
	dropdownList.classList.toggle('dropdown__list_active')
})

for (let element of dropdownItem) {
	element.addEventListener('click', (e) => {
		let activeElement = element.closest('.dropdown__item').querySelector('.dropdown__link')
		e.preventDefault();
		dropdownValue.textContent = activeElement.textContent;
		dropdownList.classList.remove('dropdown__list_active');
	})
}