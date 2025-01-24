import mongoose from 'mongoose';
import Project from './ProjectSchema.js';
const Schema = mongoose.Schema

const memberSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gmail: {
        type: String,
        required: true
    },
    linkedin: {
        type: String,
        required: true
    },
    git: {
        type: String,
        required: true
    },
    projects: [{
        type: Schema.Types.ObjectId,
        ref: 'Project'  // Reference to the Project schema
    }],
    imgPath: {
        type: String,
        required: true
    }
}, {timestamps: true})
export default mongoose.model('TeamMember', memberSchema);