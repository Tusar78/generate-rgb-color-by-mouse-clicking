/*
 * Project requirement
 * + Change the background color by generating random RGB color
 * + Change the background color by generating random hex color
 * + Also display the hex code to a displayed input filled
 * + Added copy button to copy the generated hex code
 * + Added Toast msg
 * + User can type their own hex code too.
 */

// Global variable
let div = null;

window.onload = () => {
  main();
};

const main = () => {
  // Collect all references
  const container = document.getElementById("container");
  const cardChangeBtn = document.querySelector(".card__change-btn");
  const cardCopyBtn = document.querySelector(".card__copy-btn");
  const cardInp = document.querySelector(".card__input");

  // Click event handler into cardChangeBtn
  cardChangeBtn.addEventListener("click", (e) => {
    const generatedBG = randomHEX();
    container.style.backgroundColor = generatedBG;
    cardInp.value = generatedBG;
  });

  // Change and generate code by refreshing
  cardInp.value = randomHEX();
  container.style.backgroundColor = cardInp.value;

  // Copy hex code
  cardCopyBtn.addEventListener("click", (e) => {
    navigator.clipboard.writeText(cardInp.value);

    if (div !== null) {
      div.remove();
      div = null;
    }

    if (isValidHex(`${cardInp.value}`)) {
      showToastMsg(`${cardInp.value} Copied!`);
    } else {
      alert('Please enter valid hex code!');
    }
  });

  cardInp.addEventListener("keyup", (e) => {
    const color = e.target.value;
    if (color && isValidHex(color)) {
      container.style.backgroundColor = color;
    }
  });

  const showToastMsg = (msg) => {
    div = document.createElement("div");
    div.className = "toast-msg toast-in";
    div.innerText = msg;
    container.appendChild(div);

    // fade out toast when change the color
    cardChangeBtn.addEventListener("click", (e) => {
      if (div != null) {
        toastInToastOut();
      }
    });

    // fade out toast when click the toast box
    div.addEventListener("click", (e) => {
      toastInToastOut();
    });

    const toastInToastOut = () => {
      div.classList.remove("toast-in");
      div.classList.add("toast-out");

      div.addEventListener("animationend", (e) => {
        if (div != null) {
          div.remove();
        }
        div = null;
      });
    };
  };
};

// Help to JS doc
/**
 * @param {string} color
 */

const isValidHex = (color) => {
  if (color.length !== 7) return false;
  if (color[0] !== "#") return false;

  color = color.substring(1);
  return /^[0-9A-Fa-f]{6}$/i.test(color);
};

const randomHEX = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
};

// Generate Random color
/*
const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}
*/
