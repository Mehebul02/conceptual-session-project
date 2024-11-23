import { Request, Response } from "express";
import { tourService } from "./tour.service";



const createTour = async (req: Request, res: Response) => {
    try {
        const body = req.body
        const result = await tourService.createTours(body)
        return result
        res.send({
            status: true,
            message: "Tour create successfully",
            result
        })

    }
    catch (error) {
        res.json({
            status: false,
            message: "Something Went wrong",
            error
        })
    }
}
const getTour = async (req: Request, res: Response) => {
    try {
        const result = await tourService.getTours()
        return result
        res.send({
            status: true,
            message: "Tour getting successfully",
            result
        })

    }
    catch (error) {
        res.json({
            status: false,
            message: "Something Went wrong",
            error
        })
    }
}
const getSingleTour = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = await tourService.getSingleTour(id)
        return result
        res.send({
            status: true,
            message: "Tour getting successfully",
            result
        })

    }
    catch (error) {
        res.json({
            status: false,
            message: "Something Went wrong",
            error
        })
    }
}
const updateTour = async (req: Request, res: Response) => {
    try {
        const payload = req.params.id
        const body = req.body;
        const result = await tourService.updateTour( payload,body);
        return result
        res.send({
            status: true,
            message: "Tour updated successfully",
            result
        })

    }
    catch (error) {
        res.json({
            status: false,
            message: "Something Went wrong",
            error
        })
    }
}

const deleteTour = async (req: Request, res: Response) => {
    try {
        const payload = req.body
        const result = await tourService.deleteTour(payload)
        return result
        res.send({
            status: true,
            message: "Tour deleted successfully",
            result
        })

    }
    catch (error) {
        res.json({
            status: false,
            message: "Something Went wrong",
            error
        })
    }
}


export const tourController = {
    createTour,
    getTour,
    getSingleTour,
    updateTour,
    deleteTour
}