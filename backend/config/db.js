import mongoose, { mongo } from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://greatstack:1122334455@cluster0.5bnznl8.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}