import mongoose from 'mongoose';

const memorySchema = mongoose.Schema({
    creatorId: {
        type: String,
        required: true
    },
    creator:{
        type: String,
        required: true
    },
    title: {
        type: String,
        requiered: true
    },
    tags: [String],
    selectedFile: {
        type: String,
        required: true
    },
    isFavourite: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    }
})

const Memory = mongoose.model('Memory', memorySchema);

export default Memory;