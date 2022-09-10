let nav = document.getElementById('navArea');
let btn = document.getElementById('toggle-btn');
let mask = document.getElementById('mask');

btn.onclick = () => {
  nav.classList.toggle("open");
};

mask.onclick = () => {
  nav.classList.toggle("open");
};

