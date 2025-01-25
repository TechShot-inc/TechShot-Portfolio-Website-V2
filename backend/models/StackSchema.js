import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const techSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    imgPath: {
        type: String,
        required: true,
    }
});

const stackSchema = new Schema({
    category: {
        type: String,
        required: true,
    },
    technologies: [techSchema]
}, { timestamps: true });

export default mongoose.model('TechStack', stackSchema);