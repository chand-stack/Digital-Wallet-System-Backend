import { Router } from "express";
import { userRoutes } from "../modules/user/user.route";
import { transactionRouter } from "../modules/transaction/transaction.route";

export const router = Router()

const moduleRoutes = [
    {
        path:"/user",
        route:userRoutes
    },
    // {
    //     path:"/transactions",
    //     route:transactionRouter
    // }
]

moduleRoutes.forEach((route)=>{
    router.use(route.path, route.route)
})