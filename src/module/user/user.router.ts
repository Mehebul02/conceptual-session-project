import { Router } from "express";
import { userController } from "./user.controller";


const useRouter = Router()

useRouter.post("/create-user", userController.createUser)

export default useRouter