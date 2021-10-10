import { Router } from "express";
import UserRouter from "./user.router";
import PostRouter from "./post.router";

const router = Router();

router.use("/users", UserRouter);
router.use("/posts", PostRouter)

export default router;