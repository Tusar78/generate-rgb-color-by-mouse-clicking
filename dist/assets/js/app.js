window.onload = () => {
  main()
}

const main = () => {
  const container = document.getElementById('container');
  const cardBtn = document.querySelector('.card__btn');
  cardBtn.addEventListener('click', e => {
    const generatedBG = randomRGB();
    container.style.backgroundColor = generatedBG;
  })
  return container.style.backgroundColor = randomRGB();
}

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}