import { model, Schema } from "mongoose";
import { IWallet, WSTATUS } from "./wallet.interface";

const walletSchema = new Schema<IWallet>({
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    balance: {
      type: Number,
      required: true,
      default: 50,
      min: [0, "Balance cannot be negative"]
    },
    status: {
      type: String,
      enum: Object.values(WSTATUS),
      default: WSTATUS.ACTIVE,
    },
  },{
    timestamps: true,
    versionKey: false
})

export const Wallet = model<IWallet>("Wallet", walletSchema)