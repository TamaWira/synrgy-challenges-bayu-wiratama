import { Request, Response } from "express";
import { ICars } from "../../models/Cars";
import ServiceCars from "../../services/ServiceCars";

class ControllerCars {
  private _serviceCars: ServiceCars;

  constructor(serviceCars: ServiceCars) {
    this._serviceCars = serviceCars;
  }

  list() {
    return async (req: Request, res: Response) => {
      try {
        const result = await this._serviceCars.list();

        return res.status(200).json({
          meta: {
            message: "success",
            success: true,
            code: 200,
          },
          data: result,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }
}

export default ControllerCars;
