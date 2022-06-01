/*
* Project requirement
* + Change the background color by generating random RGB color
* + Change the background color by generating random hex color
* + Also display the hex code to a displayed input filled
*/

window.onload = () => {
  main()
}

const main = () => {
  // Collect all references
  const container = document.getElementById('container');
  const cardBtn = document.querySelector('.card__btn');
  const cardInp = document.querySelector('.card__input');

  // Click event handler
  cardBtn.addEventListener('click', e => {
    const generatedBG = randomHEX();
    container.style.backgroundColor = generatedBG;
    cardInp.value = generatedBG;
  })
  
    container.style.backgroundColor = randomHEX();
    cardInp.value = randomHEX();
}

// Generate Random color
/*
const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}
*/

const randomHEX = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}