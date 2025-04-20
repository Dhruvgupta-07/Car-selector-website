
const carData = [
  {
    name: "Toyota Innova",
    type: "SUV",
    engine: "Petrol",
    comfort: "High",
    usage: "Family",
    travellers: 7,
    budget: "High",
    company: "Toyota",
    img: "https://imgd.aeplcdn.com/370x208/cw/ec/21483/Toyota-Innova-Crysta-Exterior-83507.jpg"
  },
  {
    name: "Maruti Swift",
    type: "Hatchback",
    engine: "Petrol",
    comfort: "Medium",
    usage: "City",
    travellers: 4,
    budget: "Low",
    company: "Maruti",
    img: "https://imgd.aeplcdn.com/370x208/cw/ec/39005/Maruti-Swift-Exterior-168441.jpg"
  },
  {
    name: "Hyundai Creta",
    type: "SUV",
    engine: "Diesel",
    comfort: "High",
    usage: "Family",
    travellers: 5,
    budget: "Medium",
    company: "Hyundai",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/130763/creta-exterior-right-front-three-quarter.jpeg"
  },
  {
    name: "Honda City",
    type: "Sedan",
    engine: "Petrol",
    comfort: "High",
    usage: "City",
    travellers: 5,
    budget: "Medium",
    company: "Honda",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/129765/city-exterior-right-front-three-quarter-2.jpeg"
  }
  // Add more cars as needed...
];

document.getElementById("carForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const filters = {
    type: type.value,
    engine: engine.value,
    comfort: comfort.value,
    usage: usage.value,
    travellers: parseInt(travellers.value),
    budget: budget.value,
    company: company.value
  };

  const filteredCars = carData.filter(car =>
    car.type === filters.type &&
    car.engine === filters.engine &&
    car.comfort === filters.comfort &&
    car.usage === filters.usage &&
    car.travellers === filters.travellers &&
    car.budget === filters.budget &&
    car.company === filters.company
  );

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (filteredCars.length === 0) {
    resultDiv.innerHTML = "<p>No matching cars found.</p>";
  } else {
    filteredCars.forEach(car => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = \`
        <img src="\${car.img}" alt="\${car.name}">
        <h3>\${car.name}</h3>
        <p><strong>Type:</strong> \${car.type}</p>
        <p><strong>Engine:</strong> \${car.engine}</p>
        <p><strong>Comfort:</strong> \${car.comfort}</p>
        <p><strong>Usage:</strong> \${car.usage}</p>
        <p><strong>Travellers:</strong> \${car.travellers}</p>
        <p><strong>Budget:</strong> \${car.budget}</p>
        <p><strong>Company:</strong> \${car.company}</p>
      \`;
      resultDiv.appendChild(card);
    });
  }
});
