

import express, { Request, Response } from 'express'
import useRouter from './module/user/user.router'

const app = express()
app.use(express.json())

app.use("/api/user", useRouter)

app.get('/', (req: Request, res: Response) => {
    res.send({
        success: true,
        message: "Server is running"
    })
})

export default app