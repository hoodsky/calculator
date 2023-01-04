const calcDisp = document.querySelector('#calc-disp');
const key = document.querySelectorAll('.calc__key');

function addKey() {
  calcDisp.textContent += this.textContent
}

key.forEach (i => {
    i.addEventListener ('click', () => {
    calcDisp.value += i.textContent
    });
})