const key = "7efc2fe0981cca4ee0017225bc7c1c71";

function PutDataOnScreen(data) {
  console.log(data);
  document.querySelector(".city").innerHTML = `Tempo em ${data.name}`;
  document.querySelector(".temp").innerHTML = `${Math.floor(data.main.temp)}°c`;

  const icon = data.weather[0].icon;

  document.querySelector(
    ".img-previsao"
  ).src = `${`https://openweathermap.org/img/wn/${icon}.png`}`;

  document.querySelector(
    ".wrt-previsao"
  ).innerHTML = `${data.weather[0].description}`;

  document.querySelector(
    ".humidity"
  ).innerHTML = `Umidade ${data.main.humidity}%`;
}

async function SearchCity(cityF) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityF}&appid=${key}&lang=pt_br&units=metric`
  ).then((response) => response.json());

  /*console.log(data);*/

  PutDataOnScreen(data);
}

function ButtonClick() {
  const city = window.document.querySelector(".input-city").value;
  const body = document.querySelector(".body");
  body.style.background = `url="https://source.unsplash.com/1600x900/?landscape"`;

  SearchCity(city);
}
