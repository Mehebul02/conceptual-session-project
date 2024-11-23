export interface ITour{
name: string
durationHours: number
averageRating: number
price: number
coverImage: string
images: string
startDates: Date[]
startLocation: string
locations: string
slug: string
getNextNearestStartDateAndEndDate: (nearestStartDate: Date, estimatedEndDate: Date) => { startDate: Date | null; endDate: Date | null };
}