let windows = document.getElementById('subscribe-modal')
windows.classList.add('modal_active')
let windowsClose = document.querySelectorAll('.modal__close')

window.onload = () => {
  if(!document.cookie.name) {
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




