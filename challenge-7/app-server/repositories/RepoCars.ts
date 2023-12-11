import Cars, { ICars } from "../models/Cars";

class RepoCars {
  constructor() {}

  async list() {
    const cars = Cars.query().select("*");
    return await cars;
  }
}

export default RepoCars;
