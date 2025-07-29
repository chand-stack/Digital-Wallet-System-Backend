import { Router } from "express";

const router = Router()

router.post("/deposit")
router.post("/withdraw")
router.post("/send")
router.get("/me")

// agent routes
router.post("/cash-in")
router.post("/cash-out")

// admin routes
router.get("/all-transactions")
router.get("/:id")

export const transactionRouter = router