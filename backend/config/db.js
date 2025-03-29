import mongoose, { mongo } from "mongoose";

export const connectDB=async ()=>{
  await mongoose.connect('mongodb+srv://chaudharykumar228:dhangadhi10@cluster0.fej7nqu.mongodb.net/food-del').then(()=>console.log("DB Connected"));

  // await mongoose.connect('mongodb://localhost:27017/foodDel').then(()=>console.log("DB Connected"));
}
