document.addEventListener("click", function(e) {
  let m = document.getElementById('mob');
  if (e.target.id != 'menu_btn' && e.target.id != 'mob') {
    m.style.display = 'none';
  } else if (e.target.id == 'menu_btn') {
    m.style.display = (m.style.display != 'block') ? 'block' : 'none';
  }
});