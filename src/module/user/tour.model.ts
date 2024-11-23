import { model, Schema } from "mongoose";


const tourSchema = new Schema({
    name: { type: String, required: true },
    durationHours: { type: String, required: true },
    averageRating: { type: Number, default: 5 },
    price: { type: Number, required: true },
    coverImage: { type: String, required: true },
    image: { String },
    startDate: { type: Date },
    startLocation: [String],
    location: { String }
})

const Tour = model("Tour", tourSchema)

export default Tour