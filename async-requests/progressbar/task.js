let message = document.getElementById('form')
let progress = document.getElementById('progress')

message.addEventListener('submit', (e) => {

  let formData = new FormData(message);
  let request = new XMLHttpRequest();
  request.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  
  
  request.upload.onprogress = (e) => {
    let progressLoaded = e.loaded/e.total;
    progress.value = progressLoaded; 
    }

  request.send(formData);
  e.preventDefault();
})