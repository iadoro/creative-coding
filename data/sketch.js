const url = "https://api.sunrisesunset.io/json?lat=40.712776&lng=-73.987411";
async function getTime() {
  const response = await fetch(url);
  const data = await response.json();

  document.getElementById("first").textContent = data.results.first_light;
  document.getElementById("rise").textContent = data.results.sunrise;
  document.getElementById("last").textContent = data.results.last_light;
  document.getElementById("set").textContent = data.results.sunset;
}

getTime();

// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//     background("white");
// }
