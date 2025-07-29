import {Server} from "http"
import app from "./app";
import mongoose from "mongoose";
import { envVars } from "./app/config/env";
let server :Server;


const startServer = async ()=>{
    try {
        mongoose.connect(envVars.DB_URL)
        server = app.listen(envVars.PORT,()=>{
            console.log(`Server Running On Port ${envVars.PORT}`);
            
        })
    } catch (error) {
        console.log(error);
        
    }
}

startServer()