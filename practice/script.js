const colorBtns = document.querySelectorAll('.color-btn');
const randomBtn = document.getElementById('random-btn');
const resetBtn = document.getElementById('reset-color');
const colorCodeSpan = document.getElementById('color-code');
const body = document.body;

function changeBackground(color) {
    body.style.backgroundColor = color;
    colorCodeSpan.style.backgroundColor = color.toUpperCase();
}

function generateRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

colorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        changeBackground(btn.dataset.color);
    });
})

randomBtn.addEventListener('click', () => {
    const randomColor = generateRandomColor();
    changeBackground(randomColor);
})

resetBtn.addEventListener('click', () => {
    changeBackground('#FFF')
})