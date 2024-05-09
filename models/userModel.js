import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
   name: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true
   },
   password: {
      type: String,
      required: true
   },
   role:{
      type:String,
      enum:['user', 'admin', 'influencer'],
      default:'user'
   }
},{timestamps:true})

export const User = mongoose.model('User', userSchema)