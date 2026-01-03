import { Router } from "express";
import userRouter from "./user.route.js";
import categoryRoute from "./category.route.js";
import ProductRouter from "./product.route.js";

const router = Router();

router.use('/',userRouter);
router.use('/',categoryRoute);
router.use('/',ProductRouter);

export default router;