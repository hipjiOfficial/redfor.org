fetch('/menu.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('menu-placeholder').innerHTML = html;
    document.dispatchEvent(new Event('menu:loaded'));
  });