import { Schema } from "mongoose";


const userSchema = new Schema({
    name: {type: String, required: true},
    age:{type:Number, required:true},
    email:{type:String, required:true},
    photo:{type:String, required:true},
    role:{type:String, required:true},
    userStatus:{type:String, required:true},
    

})