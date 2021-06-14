const mongoose = require('mongoose');
const Review = require("./review");

const courseSchema = new mongoose.Schema ({
    courseName: {
        type: String,
        required: true
    },
    authorName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tutor",
        default: null
    },
    price: {
        type: Number,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: null
    },
    discount: {
        type: Number,
        defualt: 0
    },
    total_subscriptions: {
        type: Number,
        default: 0
    },
    course_duration: {
        type: Number,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    reviews: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "review",
        default: null
        
    },
    videos: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "video",
        default: null
    },
    enrolledStudents: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "student",
        default: null
    },
    wishlistedBy: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "student",
        default: null
    }

});

courseSchema.pre('validate', async function (next) {
    this.total_subscriptions = this.enrolledStudents.length

    const reviews = await Review.find();
    
    // ---- Function to calculate the average rating --- //
    Average_rating = reviews.reduce((sum, review) => {
        return sum + review.rating;
    }, 0)/reviews.length
    this.rating = Average_rating.toFixed(2);

    next(); 
});

module.exports = mongoose.model("course", courseSchema);