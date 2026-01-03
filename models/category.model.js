import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    }
},{
    timestamps : true
});

const CategoryModel = mongoose.model('categorymodel',categorySchema);

export default CategoryModel;