let windows = document.getElementById('subscribe-modal')
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
}   



