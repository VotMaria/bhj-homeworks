const dropdownList = document.querySelector('.dropdown__list') 
console.log(dropdownList)

const dropdownValue = document.querySelector('.dropdown__value')
console.log(dropdownValue)

const dropdownItem = Array.from(document.querySelectorAll('.dropdown__item')) 

const dropdownLink = Array.from(document.querySelectorAll('.dropdown__link'))
console.log(dropdownLink[0])

dropdownValue.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown__list_active')
} )

for(let element of dropdownItem) {
    element.addEventListener('click', (e) => {
        let activeElement = element.closest('.dropdown__item').querySelector('.dropdown__link')
        e.preventDefault();
        dropdownValue.textContent = activeElement.textContent;
        dropdownList.classList.remove('dropdown__list_active');
})
}
