// ---------- compteur like ----------- //

// var nombreClics = 12071;

// function comptage() {
//     nombreClics++;
//     document.getElementById("nombreClics").textContent = nombreClics;
//   }

// document.getElementById("boutonClic").addEventListener("click", comptage);

// ---------- Loading screen ----------- //

const boxanimation = [
  { transform: 'translate(0px, -100%)' }
];

const boxTiming = {
  duration: 200,
  iterations: 1,
}

setTimeout(() => {
  const box = document.getElementById('box');
  box.animate(boxanimation, boxTiming);
}, 600);

setTimeout(() => {
  const box = document.getElementById('box');
  box.style.display = 'none';
}, 800);

setTimeout(() => {
  const box = document.getElementById('start');
  box.style.display = 'flex';
}, 800);

setTimeout(() => {
  const box = document.getElementById('start');
  box.style.display = 'none';
}, 1);