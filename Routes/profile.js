const express = require("express");
const Router = express.Router();
const auth = require("../Auth/auth");
const Tutor = require("../Model/tutor");
const Student = require("../Model/student");
const Profile = require("../Model/profile");

Router.patch("/profile/:id", auth, async(req, res) => {
    
    try {
        const newProfile = new Profile ({ 
            ...req.body
        });
        await newProfile.save();
        const student = await Student.findById({_id:req.params.id});
        const tutor = await Tutor.findById({ _id: req.params.id });

        if (student) {
            student.profileInfo.push(newProfile);
        } else {
            tutor.profileInfo.push(newProfile);
        }

        res.status(200).send({message: "Profile updated", profileInfo: newProfile});

    } catch (error) {
        console.log("Error while updating profile", error);
        res.status(500).send({message: "Error in updating profile", error:error.message});
    }
});


module.exports = Router;