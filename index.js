const firstDiv = document.querySelector('[data-js="firstDiv"]');
const secondDiv = document.querySelector('[data-js="secondDiv"]');
const button1 = document.querySelector('[data-js="button1"]');
const button2 = document.querySelector('[data-js="button2"]');

button1.addEventListener("mouseover", () => {
  button1.textContent = "🐝";
  button1.style.backgroundColor = "green";
  button1.addEventListener("mouseout", () => {
    button1.textContent = "Click me";
    button1.style.backgroundColor = "";
  });
});

button2.addEventListener("click", () => {
  const startText = "Click me!";
  const alternativText = "Autsch! 🦍";

  if (button2.textContent === startText) {
    button2.textContent = alternativText;
    button2.style.backgroundColor = "rgb(255, 81, 0)";
    button2.style.color = "white";
  } else {
    button2.textContent = startText;
    button2.style.backgroundColor = "";
    button2.style.color = "";
  }
});
