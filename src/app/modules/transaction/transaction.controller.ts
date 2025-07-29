import { Request, Response } from "express";
import { TransactionService } from "./transaction.service";

const createDeposit = async(req:Request,res:Response)=>{
try {
    const payload = req.body;
    const user = await TransactionService.createDeposit(payload)
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

export const TransactionController = {
    createDeposit
}