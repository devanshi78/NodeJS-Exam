import CategoryModel from "../models/category.model.js";

export const addCategoryPage = (req, res) => {
    return res.render('./pages/add-category.ejs');
}

export const addCategory = async (req, res) => {
    try {
        req.body.image = req.file.path;
        let data = await CategoryModel.create(req.body)
        console.log(data);
        return res.redirect(req.get('Referrer') || '/');
    } catch (error) {
        console.log(error.message);
        return res.redirect(req.get('Referrer') || '/');
    }
}

export const viewCategoryPage = async(req, res) => {
    try {
        let categories = await CategoryModel.find({});
        return res.render('./pages/view-category.ejs', {
            categories
        })
    } catch (error) {
        console.log(error.message);
        return res.render('./pages/view-category.ejs', {
            categories: []
        })
    }
}