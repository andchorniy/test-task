const refs = {
  button: document.querySelector(".btn"),
  oddColumn: document.querySelector(".odd-column"),
  evenColumn: document.querySelector(".even-column"),
};

const numbers = [];
const generateNumbers = () => {
  for (let i = 0; i < 20; i++) {
    numbers.push(Math.floor(Math.random() * 100 + 1));
  }
  numbers.sort((a, b) => a - b);
};

const showNumbers = () => {
  refs.evenColumn.innerHTML = "";
  refs.oddColumn.innerHTML = "";
  numbers.length = 0;
  generateNumbers();
  numbers.map((number) => {
    number % 2 === 0
      ? refs.evenColumn.insertAdjacentHTML("beforeend", `<li>${number}</li>`)
      : refs.oddColumn.insertAdjacentHTML("beforeend", `<li>${number}</li>`);
  });
};
refs.button.addEventListener("click", showNumbers);
