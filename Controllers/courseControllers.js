const Course = require("../Model/course");
const Video = require("../Model/video");
const Tutor = require("../Model/tutor");
const Student = require("../Model/student");
const { cloudinary } = require("../Utils/clodinary");


module.exports = {
    addCourse: async(req, res) => {

        try {

            console.log("User details provided during AUTH: ", req.user);

            const course_data = new Course({
                ...req.body
            });

            // const convertedBuffer = await bufferConversion(req.file.originalname, req.file.buffer);

            const uploadedImage = await cloudinary.uploader.upload(req.body.thumbnail, { upload_preset: "cloudversity-dev", });

            console.log("Cloudversity response: ", uploadedImage);

            course_data.thumbnail = uploadedImage.secure_url;
            course_data.authorName = req.user.id;

            await course_data.save();

            const tutor = await Tutor.findById({ _id: req.user.id });
            tutor.createdCourses.push(course_data._id);

            await tutor.save();

            res.status(200).send({ message: "Congratulations...New course added!", courseData: course_data });

        } catch (error) {
            console.log("Error while creating course: ", error);

            res.send({ message: "Couldn't create the course", error: error.message });
        };
    },

    getAllCourses: async (req, res) => {
        try {
            const courseData = await Course.find()
                .populate("videos", ["videoLink", "title", "videoLength", "publicId"])
                .populate("reviews", ["reviewBody", "rating"])
                .populate("authorName", ["firstName", "lastName", "createdCourses"])
                .populate("wishlistedBy")   // chaining populate to get multiple fields populated
                .exec();

            res.send({ message: "Fetched successfully", data: courseData });

        } catch (error) {

            console.log("Error: ", error);
            res.status(400).send({ message: "Error while fetching", error: error.message });
        };
    },
    
    getSingleCourse: async (req, res) => {
        try {

            const requestedCourse = await Course.findById({ _id: req.params.courseId })
                .populate("reviews", ["reviewBody", "rating"])
                .populate("videos", ["videoLink", "title", "publicId", "videoLength"])
                .populate("authorName", ["firstName", "lastName"])
                .populate("wishlistedBy")
                .exec();

            res.status(200).send({ requestedCourse });

        } catch (error) {
            console.log("Error occurred while fetching the course...", error);
            res.status(500).send({ message: "Couldn't fetch the course", error: error.message });
        };
    },
}