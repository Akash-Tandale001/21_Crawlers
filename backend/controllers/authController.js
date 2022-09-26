const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.createStartupUser = async (req, res, next) => {
  try {
    let token = req.headers.authentication;
    const verifytoken = jwt.verify(token, process.env.REACT_APP_JWT_SECRETKEY);
    if (!verifytoken)
      return res.status(401).json({ error: "Unauthorized request" });
    let dateCreated = new Date();
    await User.create({
      name: req.body.name,
      phone: req.body.phone,
      city: req.body.city,
      email: req.body.email,
      password: req.body.password,
      userType: req.body.userType,
      dateCreated: dateCreated,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.status(400).json({ status: "error", error: err.message });
  }
};
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: "Please Provide email and password" });
  }
  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      res.status(400).json({ error: "invalide credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      res.status(401).json({ error: "invalide credentials" });
    }
    jwt.sign(
      { user },
      process.env.REACT_APP_JWT_SECRETKEY,
      { expiresIn: "2d" },
      (err, token) => {
        if (!err) {
          res.status(201).json({
            success: true,
            message: "user login succesful",
            userType: user.userType,
            token: token,
          });
        } else {
          res.status(500);
        }
      }
    );
  } catch (error) {
    res.status(400).json({ status: "error", error: error.message });
  }
};

exports.forgotPassword = async () => {
  const { email, password, confirmPassword } = req.body;
  try {
    if(password != confirmPassword){
      res.status(401).json({status:"error" , message:"Password and Confirm Password is not matching"})
    }
    await User.updateOne({ email: email }, { $set: { password: password } });
    res.status(200).json({ status: "ok" });
  } catch (error) {
    res.status(400).json({ status: "error", error: error.message });
  }
};
