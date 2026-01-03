import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    } ,
    email : {
        type : String,
        require : true
    } ,
    password : {
        type : String,
        require : true
    } ,
    role : {
        type : String,
        enum : ["admin","user"],
        default : "user"
    } 
},{
    timestamps : true
});

const UserModel = mongoose.model('usertbl',userSchema);

export default UserModel;