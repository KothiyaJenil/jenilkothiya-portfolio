import mongoose from "mongoose";

const technologySchema = new mongoose.Schema({
  language: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
});

const educationSchema = new mongoose.Schema({
  degree: {
    type: String,
    required: true
  },
  institution: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  grade: {
    type: String,
    required: true
  },
})

const certificateSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  issuedAt: {
    type: String,
    required: true
  }
})

const profileSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
    max: 10
  },
  GitHub: {
    type: String,
    required: true
  },
  linkedin: {
    type: String,
    required: true
  },
  instagram: {
    type: String,
    required: true
  },
  aboutMe: {
    type: String,
    required: true
  },
  profileImage: {
    type: String,
    required: true
  },
  resumeLink: {
    type: String,
    required: true
  },
  technologies: [technologySchema],
  educations: [educationSchema],
  certificates: [certificateSchema]

})

const Profile = mongoose.model("Profile", profileSchema);
export default Profile;
