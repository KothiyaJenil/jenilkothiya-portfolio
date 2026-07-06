import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
},
  {
    timestamps: true,
  }
);

adminSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }

  this.password = await bcrypt.hash(this.password, 10)
});

adminSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
}

adminSchema.methods.generateToken = function () {
  return jwt.sign({
    id: this._id
  },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d"
    });
}

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;
