const button = document.querySelector("#buton");

const valyutaFunction = () => {
  const main = document.querySelector("#main").value;
  const valyuta = document.querySelector("#valyuta").value;
  const h2 = document.querySelector("#result");

  fetch("https://api.exchangerate-api.com/v4/latest/AZN")
  .then((res) => res.json())
  .then((data) => {
    const latest = data.latest[valyuta]
    const result = main * latest;
    h2.textContent = `${main} AZN = ${result.toFixed(2)} ${valyuta}`;
  })
};

button.addEventListener("click", valyutaFunction);

