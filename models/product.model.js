import { ObjectId } from "bson";
import mongoose from "mongoose";
import { type } from "os";

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'categorymodel'
    }
},{
    timestamps : true
});

const ProductModel = mongoose.model('prodtbl',productSchema);

export default ProductModel;