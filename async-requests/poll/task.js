const btn = document.getElementsByTagName('button')
console.log(btn)

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll')
xhr.send();

xhr.addEventListener('readystatechange', (e) => {
    if(xhr.readyState === xhr.DONE) {
        console.log(xhr.responseText)

        let answerFromServer = JSON.parse(xhr.responseText);
        let output;
        let answer = '';

        for(let key in answerFromServer) {
          output = answerFromServer[key].title;
        
          let arrAnswer = answerFromServer[key].answers;

          for(let key in arrAnswer) {
           answer += '<button>' + arrAnswer[key] + '</button> ';
          }
        }

        document.getElementById('poll__title').innerHTML = output;
        document.getElementById('poll__answers').innerHTML = answer;
    }   
    e.preventDefault();   

    for(let element of btn) {
      element.addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!')
      })
    }
})



