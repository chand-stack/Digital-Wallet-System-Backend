import { Request, Response } from "express";
import { UserService } from "./user.service";

const createUser = async(req:Request,res:Response)=>{
try {
    const payload = req.body;
    const user = await UserService.createUser(payload)
    res.status(200).json({
        success:true,
        message:"user created successfully",
        data: user
    })
} catch (error) {
    res.status(500).json({
        success: false,
        message:"something went wrong",
        error: error
    })
}
}

export const UserController ={
    createUser
}