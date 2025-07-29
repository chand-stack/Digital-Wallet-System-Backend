import express, { Application, Request, Response } from "express"
import cors from "cors"
import { router } from "./app/routes"

const app:Application = express()

app.use(cors({origin:["http://localhost:5173"]}))
app.use(express.json())

app.use("/api/v1", router)

app.get("/",(req:Request,res:Response)=>{
    res.status(200).send({
        message:"Digital Wallet System Server Running"
    })
})

export default app