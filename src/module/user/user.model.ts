import { model, Schema } from "mongoose";
import { Iuser } from "./user.interface";


const userSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: [true, "Please enter your age"] },
    email: {
        type: String, required: [true, "Please enter your email"], unique: true,
        validate: {
            validator: function (value: string) {
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)
            },
            immutable: true
        }

    },
    photo: { type: String, required: true },
    role: { type: String, enum: ["user", 'admin'], required: true },
    userStatus: { type: String, enum: { values: ["active", "inactive"], message: "{VALUES} is not valid" }, required: true },
})


// hook >>> pre 
//  userSchema.pre("find", function(this,next){

//     this.find({useStatus:{$eq:"active"}})
//     next()

//  })

userSchema.post("find", function (docs, next) {
    docs.forEach((doc: Iuser) => {
        doc.name = doc.name.toUpperCase()

    });
    next()
})

const User = model('USer', userSchema)

export default User
