import { WSTATUS } from "../wallet/wallet.interface";
import { Wallet } from "../wallet/wallet.model";
import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async(payload: Partial<IUser>)=>{
const newUser = await User.create(payload)
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