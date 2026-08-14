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

// security clearance levels:
// one star (agent)
// every redfor agent begins somwhere.
// - allows access to most redfor.org pages

// two star (operative)
// given once a discord account is attached to an account
// - forums access
// - let me know

// three star (special agent)
//

// four star (special operative)
// highest level of clearance for a regular field agent.

// five star (senior special agent)
// beginning of sepcialized redfor staff level clearance
// - allowed to log the shop
// - @redfor.org email to allow for official contact

// six star (administrator)
// - api clearance

// six point five star (senior administrator)
// second highest clearance. 
// if a seven star should ever become incapacitated, the six point five is in reserve to take over seven star clearance.

// seven star (director)
// only one person is allowed to have seven star clearance at a time
// - highest security clearance, oversees and is able to manipulate all redfor property