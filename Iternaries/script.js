const daySlider = document.getElementById("days");
const dayValue = document.getElementById("dayValue");

daySlider.addEventListener("input", () => {
  dayValue.innerText = daySlider.value;
});

function suggestPlan() {
  const days = daySlider.value;
  dayValue.innerText = days;

  const plans = [
    "Day 1: Rajwada, 56 Dukan",
    "Day 2: Kaanch Mandir, Sarafa",
    "Day 3: Janapav Kuti",
    "Day 4: Patalpani Waterfall",
    "Day 5: Ralamandal, Chappan Street",
    "Day 6: Crescent Water Park, Treasure Island Mall",
    "Day 7: Tincha Falls & Local Shopping"
  ];

  let output = `<h2>Suggested Plan:</h2><ul>`;
  for (let i = 0; i < days; i++) {
    output += `<li>${plans[i]}</li>`;
  }
  output += `</ul>`;

  document.getElementById("planOutput").innerHTML = output;
}

  