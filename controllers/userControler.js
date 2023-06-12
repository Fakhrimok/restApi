const User= require("../models/userSchema")
//function used for create method
const addUser= async (req, res) => {
    const users= req.body;
    try {
        const newUser = await User.create(users);
      res.status(200).json({ msg: "success", users: newUser });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  };
  //function used for read method
  const getUser = async (req, res) => {
    try {
      const newUser = await User.find();
      res.status(200).json({ msg: "getUser", newUser });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }}
  
//function used for update method
const updateUser = async (req, res) => {
    try {
      const newUser = await User.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body }
      );
  
      res
        .status(200)
        .json({ msg: "updated", newUser: { ...newUser._id, ...req.body } });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  };
//function used for delete method
  const deleteUser=async (req, res) => {
    try {
      const newUser = await User.findOneAndDelete({ _id: req.params.id });
      if (!newUser) {
        return res.status(404).json({ msg: "user not found" });
      }
      res.status(200).json({ msg: "deleted", newUser });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  };


  module.exports={addUser,getUser,updateUser,deleteUser}