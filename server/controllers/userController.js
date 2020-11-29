import User from "../models/User.js";
import mongoose from 'mongoose';

//@desc Get user by Id
//Auth Access
export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({message: 'User not Found'});
        }

        return res.status(201).json({user : user});
    } catch (error) {
        return res.status(500).json({error: error});
    }
}

//@desc Post Update a User by Id
//Auth Access
export const updateUser = async (req,res) => {
    const { id } = req.user;
    const { userName } = req.body

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message: 'User not Found'});

    const updatedUser = { userName };

     await User.findByIdAndUpdate(id, updatedUser, {new: true});

     return res.status(201).json(updatedUser);
}