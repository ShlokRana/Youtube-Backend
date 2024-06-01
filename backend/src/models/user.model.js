import mongoose from 'mongoose'
const userSchema=new mongoose.Schema({

},{timestamps: true})

export User= mongoose.model('User',userSchema);