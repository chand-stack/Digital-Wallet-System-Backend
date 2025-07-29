import { model, Schema } from "mongoose";
import { IUser, ROLE, STATUS } from "./user.interface";

const userSchema = new Schema<IUser>({
name:{type:String, required:[true,"Name is required"]},
email:{type:String, required:[true,"Email is required"], unique: true},
password:{type:String, required:[true,"Password is required"]},
isApproved:{type:Boolean, default: true},
role:{type:String,enum:Object.values(ROLE), default:ROLE.USER},
status:{type:String,enum:Object.values(STATUS), default: STATUS.ACTIVE}
},{
    timestamps: true,
    versionKey: false
})

userSchema.pre("save", async function(next){

    if(this.role === ROLE.AGENT && this.isApproved === undefined){
        this.isApproved= false
    }

next()
})

export const User = model<IUser>("User",userSchema)