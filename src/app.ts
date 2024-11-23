

import express, { Request, Response } from 'express'
import useRouter from './module/user/user.router'
import tourRouter from './module/tour/tour.router'


const app = express()
app.use(express.json())

app.use("/api/user", useRouter)
app.use("/api/tour", tourRouter)

app.get('/', (req: Request, res: Response) => {
    res.send({
        success: true,
        message: "Server is running"
    })
})

export default app