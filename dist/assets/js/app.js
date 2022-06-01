/*
* Project requirement
* + Change the background color by generating random RGB color
* + Change the background color by generating random hex color
* + Also display the hex code to a displayed input filled
* + Added copy button to copy the generated hex code
*/

window.onload = () => {
  main()
}

const main = () => {
  // Collect all references
  const container = document.getElementById('container');
  const cardChangeBtn = document.querySelector('.card__change-btn');
  const cardCopyBtn = document.querySelector('.card__copy-btn');
  const cardInp = document.querySelector('.card__input');

  // Click event handler
  cardChangeBtn.addEventListener('click', e => {
    const generatedBG = randomHEX();
    container.style.backgroundColor = generatedBG;
    cardInp.value = generatedBG;
    cardCopyBtn.innerHTML = 'Copy';
    cardCopyBtn.style.color = 'black'
  })

  // Change and generate code by refreshing
  container.style.backgroundColor = randomHEX();
  cardInp.value = randomHEX();
  cardCopyBtn.innerHTML = 'Copy';
  cardCopyBtn.style.color = 'black'

  // Copy hex code
  cardCopyBtn.addEventListener('click', e => {
    navigator.clipboard.writeText(cardInp.value)
    cardCopyBtn.innerText = 'Copied';
    cardCopyBtn.style.color = 'green'
  })
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