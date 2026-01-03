import { Router } from "express";
import { addProduct, addProductPage, deleteProduct, editProduct, editProductPage, viewProduct } from "../controllers/product.controller.js";
import imageUpload from "../middlewares/imageUpload.js";

const ProductRouter = Router();

ProductRouter.get('/add-product',addProductPage);
ProductRouter.post('/add-product',imageUpload,addProduct);

ProductRouter.get('/view-product',viewProduct);

ProductRouter.get("/product/edit/:id",editProductPage);
ProductRouter.post("/product/edit/:id",editProduct);

ProductRouter.get("/product/delete/:id",deleteProduct);

export default ProductRouter;