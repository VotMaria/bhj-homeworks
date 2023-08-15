/*let windows = document.getElementById('subscribe-modal')
let windowsClose = document.querySelectorAll('.modal__close')


window.onload = () => {
  if(document.cookie.includes('name=CookieClose')) {     
    for (let element of windowsClose) {
      element.addEventListener('click', (e) => {
          element.closest('.modal').classList.remove('modal_active');
      })
    }
  }
}

for (let element of windowsClose) {
    element.addEventListener('click', (e) => {
       element.closest('.modal').classList.remove('modal_active');
        document.cookie = 'name=CookieClose'; 
        e.preventDefault();  
      });
}  */ 

const windows = document.querySelector('#subscribe-modal');
const windowsClose = document.querySelector('.modal__close');

if(!document.cookie.includes('name=CookieClose')) {
  windows.classList.add('modal_active');
}

windowsClose.addEventListener('click', () => {
  windows.classList.remove('modal_active');
  document.cookie = 'name=CookieClose';
})


