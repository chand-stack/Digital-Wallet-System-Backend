import { Types } from "mongoose";

export enum TRANSACTION_TYPE{
    DEPOSIT = "DEPOSIT",
    WITHDRAW = "WITHDRAW",
    SEND = "SEND",
    CASH_IN = "CASH_IN",
    CASH_OUT = "CASH_OUT"
}

export enum TRANSACTION_STATUS{
    COMPLETED = "COMPLETED",
    REVERSED = "REVERSED"
}

export interface ITransaction {
    type:TRANSACTION_TYPE;
    amount: number;
    from ?: Types.ObjectId;
    to ?: Types.ObjectId;
    fee ?: number;
    commission ?: number;
    status: string;
}