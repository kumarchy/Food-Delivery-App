import mongoose, { mongo } from "mongoose";

export const connectDB=async ()=>{
  // await mongoose.connect('mongodb+srv://lamphu:lamphu112233@cluster0.fl1yz.mongodb.net/food-del').then(()=>console.log("DB Connected"));

  await mongoose.connect('mongodb://localhost:27017/foodDel').then(()=>console.log("DB Connected"));
}
