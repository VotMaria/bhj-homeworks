let fontSizeActive = document.querySelector('.font-size_active')
console.log(fontSizeActive);
let book = document.getElementById('book')
console.log(book);

let fontSize = Array.from(document.querySelectorAll('.font-size'));
console.log(fontSize);


fontSize.forEach((element, index) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();

        for (let element of fontSize){
        element.classList.remove('font-size_active');
        }
        fontSize[index].classList.add('font-size_active');

        if(element.classList.contains('font-size_small')){
            book.classList.add('book_fs-small')
            book.classList.remove('book_fs-big');
        } else if (element.classList.contains('font-size_big')){
            book.classList.add('book_fs-big')
            book.classList.remove('book_fs-small');
        } else {
            book.classList.remove('book_fs-big');
            book.classList.remove('book_fs-small');
        }
    })

   
})
