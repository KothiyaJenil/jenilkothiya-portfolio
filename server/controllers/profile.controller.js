import Admin from "../models/admin.model.js";
import Profile from "../models/profile.model.js";

export const adminProfile = async (req, res) => {
  try {
    const id = req.admin.id;
    const admin = await Admin.findById(id).select("-password");
    res.status(200).json({ success: true, admin });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const userProfileDetail = async (req, res) => {
  try {

    const [user, profile] = await Promise.all([
      Admin.find().select("-password"),
      Profile.findOne()
    ])

    res.status(200).json({ success: true, user, profile })

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export const updateUserProfileDetail = async (req, res) => {
  try {

    const id = req.params.id;
    const profile = await Admin.findById(id);
    

    if (profile) {
      const updateAdmin = await Admin.findOneAndUpdate({ _id: id }, req.body.user[0], { new: true, runValidators: true });
      const updateProfile = await Profile.findOneAndUpdate({},  req.body.profile[0], { new: true, runValidators: true });

      if (!updateAdmin || updateProfile) {
        res.status(500).json({ success: true, message: "profile not update" });
      }
      res.status(201).json({ success: true, message: "profile update" });
    }

  } catch (error) {
    res.status(500).json({ success: false, message: error.message, });
  }
};
