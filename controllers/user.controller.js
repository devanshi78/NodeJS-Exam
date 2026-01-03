import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const homepage = (req, res) => {
    return res.render('./index.ejs');
}

export const signupUserPage = (req, res) => {
    return res.render('./pages/signup.ejs');
}

export const signupUser = async(req, res) => {
    try {
        console.log(req.body);

        const { password, confirmpassword } = req.body;

        if (password != confirmpassword) {
            req.flash('error', "Password And Confirm PassWord Not Matched.");
            return res.redirect('/signup');
        }

        const hashpassword = await bcrypt.hash(password, 10);

        req.body.password = hashpassword;

        const user = await UserModel.create(req.body);

        console.log(user + ' User Created.');
        return res.redirect('/login');
    } catch (error) {
        console.log(error.message)
        return res.redirect('/signup');
    }
}

export const loginPage = (req, res) => {
    return res.render('./pages/login.ejs');
}

export const login = async (req, res) => {
    try {
        const {email, password } = req.body;

        let user = await UserModel.findOne({ email });

        if (user) {

            let isValid = await bcrypt.compare(password, user.password);
            if (isValid) {
                let payload = {
                    id: user.id,
                    role: user.role
                }

                const token = jwt.sign(payload,process.env.JWT_SECRET)
                res.cookie("token", token);
                console.log('login success');
                return res.redirect('/');
            } else {
                return res.json({ message: "Password not match." });
            }
        } else {
            return res.json({ message: "User not found" });
        }

    } catch (error) {
        return res.json({ error: error.message });
    }
}

export const logoutUser = async(req,res) => {
    res.clearCookie('token');
    return res.redirect('/login');
}