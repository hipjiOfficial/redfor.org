function autoGrow(input, minWidth = 100, maxWidth = 400) {
  const span = document.createElement('span');
  span.style.visibility = 'hidden';
  span.style.position = 'absolute';
  span.style.whiteSpace = 'pre';
  span.style.font = window.getComputedStyle(input).font;
  document.body.appendChild(span);

  input.addEventListener('input', () => {
    span.textContent = input.value || input.placeholder || '';
    const newWidth = Math.min(Math.max(span.offsetWidth + 30, minWidth), maxWidth);
    input.style.width = `${newWidth}px`;
  });
}

const username = document.getElementById('username');
const password = document.getElementById('password');

function denySpaces(input) {
  input.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
      e.preventDefault();
    }
  });
  input.addEventListener('paste', (e) => {
    e.preventDefault();
    const text = (e.clipboardData || window.clipboardData).getData('text');
    const cleaned = text.replace(/\s/g, '');
    document.execCommand('insertText', false, cleaned);
  });
}

autoGrow(username);
denySpaces(username);

autoGrow(password);

//todo: move this to core maybe? 
// also todo before i fotget: move the menu  card somwehere where it's consolidated, and doesnt need to be updated manually on every different page.