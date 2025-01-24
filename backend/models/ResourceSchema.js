import mongoose from 'mongoose';

const Schema = mongoose.Schema

const resourceSchema = new Schema({
    imgPath:{
        type:String,
        required:true,
    },
    paragraph:{
        type:String,
        required:true,
    },
    link:{
        type:String,
        required:true,   
    }

},{timestamps:true})

export default mongoose.model('Resource', resourceSchema);