const fs = require('fs');
const path = require('path');

function getJson() {
  const filepath = path.join(__dirname, "../../data/cars.json");
  return JSON.parse(fs.readSync(filepath, 'utf-8'));
}

class Component {
  constructor() {}
  render() {}
}

class Car extends Component {
  constructor() {
    super();
    this.cars = getJson();
  }

  render() {
    return `
      <div class="container">
        <div class="row gx-3">
          ${this.cars.map((car) =>
            `<div class="col-4 border rounded p-2">
              <h1>${car.id}</h1>
              <button class="btn btn-green">Pilih Mobil</button>
            </div>
            `
            ).join('')
          }
        </div>
      </div>
      `;
  }
}
