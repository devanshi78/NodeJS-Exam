import CategoryModel from "../models/category.model.js";
import ProductModel from "../models/product.model.js";
import fs from "fs";

export const addProductPage = async (req, res) => {
    const categories = await CategoryModel.find({});
    return res.render('./pages/add-product.ejs', {
        categories
    });
}

export const addProduct = async (req, res) => {
    try {
        req.body.image = req.file.path;
        let data = await ProductModel.create(req.body)
        console.log(data);
        return res.redirect(req.get('Referrer') || '/');
    } catch (error) {
        console.log(error.message);
        return res.redirect(req.get('Referrer') || '/');
    }
}

export const viewProduct = async (req, res) => {
    try {
        const products = await ProductModel
            .find({})
            .populate('category')
        return res.render('./pages/view-product.ejs', {
            products
        })
    } catch (error) {
        console.log(error.message);
        return res.render('./pages/view-product.ejs', {
            products: []
        })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await ProductModel.findByIdAndDelete(id);
        console.log(data);
        fs.unlinkSync(data.image);
        return res.redirect(req.get('Referrer') || '/');
    } catch (error) {
        console.log(error.message);
        return res.redirect(req.get('Referrer') || '/');
    }
}

export const editProductPage = async (req, res) => {
    try {
        const { id } = req.params;

        const data = await ProductModel.findById(id).populate('category');

        const categories = await CategoryModel.find({});

        res.render('./pages/edit-Product.ejs', {
            data,
            categories,
        });

    } catch (error) {
        console.log(error.message);
        res.redirect('/product/view');
    }
}

export const editProduct = async(req, res) => {
        try {
            const { id } = req.params
            if (req.file) {
                req.body.image = req.file.path;
            }

            let data = await ProductModel.findByIdAndUpdate(id, req.body);

            if (req.file) {
                fs.unlinkSync(data.image);
            }
            return res.redirect('/view-product');
        } catch (error) {
            console.log(error.message)
            return res.redirect(req.get('Referrer') || '/');
        }
    }