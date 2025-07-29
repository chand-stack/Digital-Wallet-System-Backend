import { Types } from "mongoose";

export enum WSTATUS {
    ACTIVE = "ACTIVE",
    BLOCKED = "BLOCKED"
}

export interface IWallet {
    userId: Types.ObjectId;
    balance : number;
    status : WSTATUS
}