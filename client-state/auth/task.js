
let signinForm = document.getElementById('signin__form')
let welcome = document.getElementById('welcome')
let userId = document.getElementById('user_id')
let form = document.getElementById('signin')

window.onload = () => {
  if(localStorage.id) {
    form.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    welcome.textContent += localStorage.id;
    console.log(localStorage.id)
  } 
}  

signinForm.addEventListener('submit', (e) => {

  let formData = new FormData(signinForm);
  let request = new XMLHttpRequest();
  request.responseType = 'json';
  request.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth'); 
    
  request.onload = () => {
    let answerFromServer = request.response;
    let id = answerFromServer.user_id;
    localStorage.setItem('id', id);
      
    if(id) {
      form.classList.remove('signin_active');
      welcome.classList.add('welcome_active');
      welcome.textContent += id
    } else {
      alert('Неверный логин/пароль');
      }
  }
      request.send(formData);
      e.preventDefault();
})
    







/*signinForm.addEventListener('submit', (e) => {

  let formData = new FormData(signinForm);
  let request = new XMLHttpRequest();
  request.responseType = 'json';
  request.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth'); 

  request.onload = () => {
    let answerFromServer = request.response;
    let id = answerFromServer.user_id;
    localStorage.setItem('id', id);
                
      if(id) {
        form.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        welcome.textContent += id
      } else {
          alert('Неверный логин/пароль');
        }
    }
    request.send(formData);
    e.preventDefault();
})*/

   




















   



