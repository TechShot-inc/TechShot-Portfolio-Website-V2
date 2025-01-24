import mongoose from 'mongoose';

const Schema = mongoose.Schema

const stackSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    imgPath:{
        type:String,
        required:true,
    },
},{timestamps:true})

export default mongoose.model('Stack', stackSchema);