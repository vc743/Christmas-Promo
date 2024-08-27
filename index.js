const snowContainer = document.querySelector(".snow-container");
const snowContent = ["&#10052", "&#10053", "&#10054"];

const random = (num) => Math.floor(Math.random() * num);

const getRandomStyles = () => {
  const top = random(100);
  const left = random(100);
  const dur = random(10) + 10;
  const size = random(25) + 25;
  return ` 
  top: -${top}%; 
  left: ${left}%; 
  font-size: ${size}px; 
  animation-duration: ${dur}s; 
  `;
};

const createSnow = num => {
    for (let i = num; i > 0; i--) {
        let snow = document.createElement('div');
        snow.className = 'snow';
        snow.style.cssText = getRandomStyles();
        snow.innerHTML = snowContent[random(2)];
        snowContainer.append(snow);
    }
}

window.addEventListener('load', () => {
    createSnow(30);
})