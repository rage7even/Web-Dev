
const MAX_CHARS = 200;

const textarea = document.getElementById('text-input');
const charSpan = document.getElementById('char-count');
const wordSpan = document.getElementById('word-count');
const warningPara = document.getElementById('limit-warning');
const clearBtn = document.getElementById('clear-btn');

function updateCounts() {
    const text = textarea.value;

    const charCount = text.length;

    let wordCount = 0;
    const trimmed = text.trim();
    if (trimmed !== '') {
        wordCount = trimmed.split(/\s+/).length;
    }

    charSpan.textContent = `Characters: ${charCount} / ${MAX_CHARS}`;
    wordSpan.textContent = `Words: ${wordCount}`;

    if (charCount >= MAX_CHARS) {
        warningPara.textContent = 'Character limit reached!';
        warningPara.classList.remove('warning');
        warningPara.classList.add('danger');
    } else if (charCount >= MAX_CHARS * 0.8) {
        warningPara.textContent = 'Approaching limit!';
        warningPara.classList.remove('danger');
        warningPara.classList.add('warning');
    } else {
        warningPara.textContent = '';
        warningPara.classList.remove('warning', 'danger');
    }
}

textarea.addEventListener('input', updateCounts);

clearBtn.addEventListener('click', () => {
    textarea.value = '';
    updateCounts();
    textarea.focus();
});

updateCounts();