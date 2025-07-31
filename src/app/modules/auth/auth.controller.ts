import { NextFunction, Request, Response } from "express";
import passport from "passport";
import AppError from "../../errorHelpers/AppError";
import { createUserToken } from "../../utils/userToken";
import { setAuthCookie } from "../../utils/setCookies";
import { sendResponse } from "../../utils/sendResponse";
import { catchAsync } from "../../utils/catchAsync";
import httpStatus from "http-status-codes"

const credentialLogin = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{

passport.authenticate("local", async(err:any, user:any, info:any)=>{
if(err){
    return next(new AppError(401,err))
}

if(!user){
    return next( new AppError(401, info.message))
}

const userTokens = await createUserToken(user)

const {password: pass, ...rest} = user.toObject()

setAuthCookie(res,userTokens)

sendResponse(res,{
       success:true,
    statusCode:httpStatus.OK,
    message:"User Logged In Successfully",
    data:{
        accessToken: userTokens.accessToken,
        refreshToken: userTokens.refreshToken,
        user: rest
    }
})
})(req,res,next)
})

export const AuthController = {
    credentialLogin
}