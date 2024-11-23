import { Request, Response } from "express";
import User from "./user.model";
import { userService } from "./user.service";


const createUser = async (req: Request, res: Response) => {

    const payload = req.body;
    const result = await userService.createUser(payload)

    res.json({
        success: true,
        message: "User Created successfully",
        data: result
    })

}

const getUser = async (req: Request, res: Response) => {
    try {
        const result = await userService.getUser()
        res.send({
            status: true,
            message: "user getting successfully",
            result
        })

    }
    catch (err) {
        res.json({
            status: false,
            message: "Something went wrong",
            err
        })
    }

}


const getSingleUser = async (req: Request, res: Response) => {
    try {

        const userId = req.params.userId
        const result = await userService.getSingleUser(userId)
        res.send({
            status: true,
            message: "single user getting successfully",
            result
        })

    }
    catch (err) {
        res.json({
            status: false,
            message: "Something went wrong",
            err
        })
    }

}


const updateUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId
        const body = req.body
        const result = await userService.updateUser(userId, body)
        res.send({
            status: true,
            message: "User updated the successfully",
            result
        })

    }
    catch (err) {
        res.json({
            status: false,
            message: "Something went wrong",
            err

        })
    }
}

const deleteUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId
        await userService.deleteUser(userId)
        res.send({
            status: true,
            message: "User deleted successfully"
        })


    }
    catch (error) {
        res.json({
            status: false,
            message: "Something went wrong",
            error
        })
    }
}

export const userController = {
    createUser,
    getUser,
    getSingleUser,
    updateUser,
    deleteUser
}