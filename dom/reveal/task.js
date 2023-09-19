let reveal = Array.from(document.querySelectorAll('.reveal'));
console.log(reveal);

window.addEventListener('scroll', () => {
for (let element of reveal){
    const { top, bottom } = element.getBoundingClientRect();
    if(bottom < 0 || top > window.innerHeight){
        element.classList.add('reveal_active')
    }
} 
})

