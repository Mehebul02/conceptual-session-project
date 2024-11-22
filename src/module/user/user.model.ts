import { model, Schema } from "mongoose";


const userSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: [true, "Please enter your age"] },
    email: { type: String, required: [true,"Please enter your email"] ,

    },
    photo: { type: String, required: true },
    role: { type: String,enum:["user", 'admin'], required: true },
    userStatus: { type: String,enum:{values:["active", "inactive"],message:"{VALUES} is not valid"}, required: true },
})


const User = model('USer', userSchema)

export default User
