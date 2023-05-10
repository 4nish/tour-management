import Tour from "../models/Tour.js";
import Review from "../models/Review.js";

export const createReview = async (req, res) => {
    try {
        const tourId = req.params.tourId
        const newReview = new Review({ ...req.body })

        const savedReview = await newReview.save()

        //await creating a new review now update the reviews array of thetour
        await Tour.findByIdAndUpdate(tourId, {
            $push: { reviews: savedReview._id }
        })

        res.status(200).json({
            success: true, message: 'Review Submitted',
            data: savedReview
        })
    } catch (err) {
        res.status(500).json({
            success: false, message: 'Cannot submit the review',
        })
    }
};