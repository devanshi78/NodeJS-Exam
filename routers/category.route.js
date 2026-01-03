import { Router } from "express";
import { addCategory, addCategoryPage, viewCategoryPage } from "../controllers/category.controller.js";
import imageUpload from "../middlewares/imageUpload.js";

const categoryRoute = Router();

categoryRoute.get('/add-category',addCategoryPage);
categoryRoute.post('/add-category',imageUpload,addCategory);

categoryRoute.get('/view-category',viewCategoryPage);

export default categoryRoute;