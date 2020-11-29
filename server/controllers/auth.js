import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(401).json({ error: "Fields cannot be empty" });
    }
    if (password.length <= 4) {
     return res
        .status(401)
        .json({ error: "Password should be more than 4 charaters" });
    }
    const userDoc = await User.findOne({ email: email });
    // console.log(userDoc);
    if (!userDoc) {
      return res.status(404).json({ error: "User Not Found!!" });
    }
    try {
      if (await bcrypt.compare(password, userDoc.password)) {
        const payload = { user: { id: userDoc._id, userName: userDoc.userName } };
        const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: 24 * 3 * 60 * 60,
        }); //Add changes in production
        return res.status(201).json({ accessToken: accessToken });
      } else {
        return res.status(401).json({ error: "Invalid Email or Password!!" });
      }
    } catch {
      return res.status(422).send("something went wrong!!");
    }
  } catch (err) {
    return res.status(501).json({ error: err });
  }
};

export const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    if (!email || !password || !userName ) {
      return res.status(401).json({ error: "Fields cannot be empty" });
    }
    if (password.length <= 4) {
      return res
        .status(401)
        .json({ error: "Password should be more than 4 charaters" });
    }

    const userDoc = await User.findOne({ email: email });
    if (userDoc) {
      return res.status(401).json({ error: "User already exists !!" });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        userName: userName,
        email: email,
        password: hashedPassword,
      });
      const savedUser = await newUser.save(); //change in production
      return res
        .status(201)
        .json({ message: "User sucessfully created!!", user: savedUser });
    }
  } catch (err) {
    return res.status(500).json({ err: err });
  }
};
