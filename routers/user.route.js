import { Router } from "express";
import { homepage, login, loginPage, signupUser, signupUserPage , logoutUser} from "../controllers/user.controller.js";
import userAuth from "../middlewares/userAuth.js";

const userRouter = Router();

userRouter.get('/signup',signupUserPage);
userRouter.post('/signup',signupUser);

userRouter.get('/login',loginPage);
userRouter.post('/login',login)

// userRouter.use(userAuth);

userRouter.get('/',userAuth,homepage);

userRouter.get('/logout',logoutUser)

export default userRouter; 