import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    abbreviation: {
        type: String,
        trim: true,
        require: true
    },
}, {
    timestamps: true
})

export default mongoose.model('City', citySchema)