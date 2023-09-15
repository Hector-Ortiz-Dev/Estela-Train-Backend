import mongoose, { connect } from "mongoose"

export const connectDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://MiinishBat:EqDoL8ZlosB7JIP2@estelatraindb.eipir28.mongodb.net/?retryWrites=true&w=majority')
        console.log(">>> DB is connected")
    } catch(error) {
        console.log(error);
    }
};