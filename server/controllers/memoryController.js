import mongoose from 'mongoose';
import Memory from '../models/Memory.js';

//@desc Get All Posts from Database for the Authenticated user
//Auth access
export const getMemories = async (req,res) => {
    const creatorId = req.user.id
    try {
        const memories = await Memory.find({creatorId: creatorId});
        return res.status(201).json(memories);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

//@desc Get a post by post Id
//Auth Access
export const getMemory = async (req,res) => {
    const { id } = req.params
    try {
        const memory = await Memory.findById(id);
        return res.status(201).json(memory);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

//@desc Create a Memory
//Auth access
export const createMemory = async (req,res) => {
    const { id, userName } = req.user;
    const { title, tags, selectedFile } = req.body;
    try {
        const newMemory = new Memory({
            creatorId: id,
            creator: userName,
            title,
            tags,
            selectedFile
        })
        await newMemory.save();
        return res.status(201).json(newMemory);
    } catch (error) {
        return res.status(501).json({error: error.message});
    }
}


export const updateMemory = async (req,res) => {
    const {id} = req.params;
    const {title, selectedFile, tags} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message: `No Memory found with id ${id}`});

    const updatedMemory = { title, selectedFile, tags }

    await Memory.findByIdAndUpdate(id, updatedMemory, {new: true});

    return res.status(201).json(updatedMemory);
}

export const deleteMemory = async (req,res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message: `No Memory found with id ${id}`});

    await Memory.findByIdAndRemove(id);

    return res.status(201).json({message: 'Memory deleted sucessfully'})
}

export const favouriteMemory = async (req,res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message: `No Memory found with id ${id}`});

    const memory = Memory.findById(id);

    const updatedMemory = await Memory.findByIdAndUpdate(id, {isFavourite: !memory.isFavourite}, {new: true});

    return res.status(201).json(updatedMemory);
}