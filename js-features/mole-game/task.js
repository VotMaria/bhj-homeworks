const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
const holesAll = document.querySelectorAll('.hole');

for (let hole of holesAll) {
    hole.onclick = function() {
        if (hole.classList.contains('hole_has-mole')) {
            dead.textContent++;
        } else {
            lost.textContent++;
        }

        if (dead.textContent === '10') {
            alert('Вы победили!');
            dead.textContent = 0;
            lost.textContent = 0;
        } else if (lost.textContent >= '5') {
            alert('Вы проиграли!')
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }


}