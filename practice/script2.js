let cnt = 0;

const descBtn = document.getElementById('decrease-btn')
const AscBtn = document.getElementById('increase-btn')
const resetBtn = document.getElementById('reset-btn')
const cntDisplay = document.getElementById('cnt-val');

function updateDispaly () {
    cntDisplay.textContent = cnt;

    cntDisplay.classList.remove('pos', 'neg', 'zero')

    if(cnt > 0) {
        cntDisplay.classList.add('pos')
    }
    else if(cnt < 0) {
        cntDisplay.classList.add('neg')
    }
    else cntDisplay.classList.add('zero')
}

AscBtn.addEventListener('click', () => {
    cnt++;
    updateDispaly()
})

descBtn.addEventListener('click', () => {
    cnt--;
    updateDispaly()
})

resetBtn.addEventListener('click', () => {
    cnt = 0
    updateDispaly()
})

updateDispaly()