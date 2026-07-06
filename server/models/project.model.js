import mongoose from "mongoose";


const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  descriptions: {
    type: String,
    required: true,
  },
  technologies: {
    type: [String],
    required: true,
  },
  githubUrl: {
    type: String,
  },
  liveUrl: {
    type: String,
  },
  images: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Published", "Draft"],
    default: "published"
  },
},
  {
    timeseries: true
  });


const Product = mongoose.model("projects", projectSchema);
export default Product;
