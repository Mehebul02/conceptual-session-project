import { Router } from "express";
import { tourController } from "./tour.controller";




const tourRouter = Router()

tourRouter.get("/:1d", tourController.getSingleTour)





export default tourRouter