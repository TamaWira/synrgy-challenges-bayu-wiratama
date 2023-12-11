import { Router, Request, Response } from "express";

// Controllers
import ControllerCars from "../../controllers/api/ControllerCars";

// Services
import ServiceCars from "../../services/ServiceCars";

// Repositories
import RepoCars from "../../repositories/RepoCars";

// Cars
const repoCars = new RepoCars();
const serviceCars = new ServiceCars(repoCars);
const controllerCars = new ControllerCars(serviceCars);

const router = Router();

// Cars
router.get("/cars", controllerCars.list());

export default router;
