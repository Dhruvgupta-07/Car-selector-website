// Sample car data (You can expand this list)
const cars = [
  {
    name: "Maruti Swift",
    company: "Maruti",
    type: "hatchback",
    engine: "small",
    comfort: "standard",
    usage: "city",
    travellers: 5,
    fuel: "petrol",
    price: 700000
  },
  {
    name: "Hyundai Verna",
    company: "Hyundai",
    type: "sedan",
    engine: "medium",
    comfort: "premium",
    usage: "highway",
    travellers: 5,
    fuel: "diesel",
    price: 1300000
  },
  {
    name: "Tata Nexon EV",
    company: "Tata",
    type: "suv",
    engine: "medium",
    comfort: "premium",
    usage: "mixed",
    travellers: 5,
    fuel: "electric",
    price: 1600000
  },
  {
    name: "Toyota Fortuner",
    company: "Toyota",
    type: "suv",
    engine: "large",
    comfort: "premium",
    usage: "offroad",
    travellers: 7,
    fuel: "diesel",
    price: 3500000
  }
];

const form = document.getElementById("selectorForm");
const resultsDiv = document.getElementById("carResults");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const budget = parseInt(form.budget.value);
  const company = form.company.value.toLowerCase();
  const type = form.type.value;
  const engine = form.engine.value;
  const comfort = form.comfort.value;
  const usage = form.usage.value;
  const travellers = parseInt(form.travellers.value);
  const fuel = form.fuel.value;

  const filteredCars = cars.filter(car => {
    return (
      car.price <= budget &&
      (company === "" || car.company.toLowerCase().includes(company)) &&
      car.type === type &&
      car.engine === engine &&
      car.comfort === comfort &&
      car.usage === usage &&
      car.travellers >= travellers &&
      car.fuel === fuel
    );
  });

  displayResults(filteredCars);
});

function displayResults(cars) {
  resultsDiv.innerHTML = "";
  if (cars.length === 0) {
    resultsDiv.innerHTML = "<p>No matching cars found.</p>";
    return;
  }
  cars.forEach(car => {
    const carDiv = document.createElement("div");
    carDiv.classList.add("car-card");
    carDiv.innerHTML = `
      <h3>${car.name}</h3>
      <p>Company: ${car.company}</p>
      <p>Type: ${car.type}</p>
      <p>Fuel: ${car.fuel}</p>
      <p>Engine: ${car.engine}</p>
      <p>Comfort: ${car.comfort}</p>
      <p>Usage: ${car.usage}</p>
      <p>Seats: ${car.travellers}</p>
      <p>Price: ₹${car.price.toLocaleString()}</p>
    `;
    resultsDiv.appendChild(carDiv);
  });
}
