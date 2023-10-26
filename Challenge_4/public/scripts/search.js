const car = new Car();
console.log(car.names);

const listCars = document.getElementById("list-cars");
listCars.innerHTML = car.render();