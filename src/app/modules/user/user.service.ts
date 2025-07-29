import { envVars } from "../../config/env";
import { WSTATUS } from "../wallet/wallet.interface";
import { Wallet } from "../wallet/wallet.model";
import { IUser } from "./user.interface";
import { User } from "./user.model";
import bcryptjs from "bcryptjs"
const createUser = async(payload: Partial<IUser>)=>{
   const {email, password, ...rest} = payload

   const hashedPassword = await bcryptjs.hash(password as string,Number(envVars.BCRYPT_SALT_ROUND))

const newUser = await User.create({
    email,
    password: hashedPassword,
    ...rest
})
const newWallet = await Wallet.create({
    status:WSTATUS.ACTIVE,
    userId: newUser._id
})
return {
    user : newUser,
    wallet : newWallet
}
}

export const UserService = {
    createUser
}