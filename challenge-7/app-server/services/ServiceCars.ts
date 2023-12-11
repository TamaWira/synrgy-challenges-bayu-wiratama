import { ICars } from "../models/Cars";
import RepoCars from "../repositories/RepoCars";

class ServiceCars {
  private _repoCars: RepoCars;

  constructor(repoCars: RepoCars) {
    this._repoCars = repoCars;
  }

  async list() {
    const cars = await this._repoCars.list();
    return cars;
  }
}

export default ServiceCars;
