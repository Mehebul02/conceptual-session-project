import { model, Schema } from "mongoose";


const tourSchema = new Schema({
    name: { type: String, required: true },
    durationHours: { type: String, required: true },
    averageRating: { type: Number, default: 5 },
    price: { type: Number, required: true },
    coverImage: { type: String, required: true },
    image: { String },
    startDates: [Date],
    startLocation: [String],
    location: { String }
})

// Add the custom method to the schema
tourSchema.methods.getNextNearestStartDateAndEndDate = function (nearestStartDate: Date, estimatedEndDate: Date) {
    const today = new Date();

    // Filter future start dates
    const futureDates = this.startDates.filter((startDate: Date) => {
        return startDate > today
    });

    futureDates .sort((a:Date, b:Date)=>a.getTime ()- b.getDate())

    const nearestStartDate =futureDates[0]
    const estimatedEndDate = new Date(nearestStartDate.getTime() + this.durationHours * 60* 60 * 1000)

    return {
        nearestStartDate,
        estimatedEndDate
    }


};

const Tour = model("Tour", tourSchema)

export default Tour

