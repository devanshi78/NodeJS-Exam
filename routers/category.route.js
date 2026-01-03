import { Router } from "express";
import { addCategory, addCategoryPage, deleteCategory, editCategory, editCategoryPage, viewCategoryPage } from "../controllers/category.controller.js";
import imageUpload from "../middlewares/imageUpload.js";

const categoryRoute = Router();

categoryRoute.get('/add-category',addCategoryPage);
categoryRoute.post('/add-category',imageUpload,addCategory);

categoryRoute.get('/view-category',viewCategoryPage);

categoryRoute.get('/edit/:id',editCategoryPage);
categoryRoute.post('/edit/:id',editCategory);

categoryRoute.get('/delete/:id',deleteCategory);

export default categoryRoute;