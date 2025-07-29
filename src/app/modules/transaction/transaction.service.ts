import { ITransaction } from "./transaction.interface";
import { Transaction } from "./transaction.model";

const createDeposit = async(payload: Partial<ITransaction>)=>{
const deposit = await Transaction.create(payload)
return deposit
}


export const TransactionService = {
    createDeposit
}