import { Router } from "express";
import { userController } from "./user.controller";


const useRouter = Router()

useRouter.post("/create-user", userController.createUser)
useRouter.get("/", userController.getUser)
useRouter.get("/:userId", userController.getSingleUser)
useRouter.put('/:userId', userController.updateUser)
useRouter.delete('/:userId', userController.deleteUser)

export default useRouter