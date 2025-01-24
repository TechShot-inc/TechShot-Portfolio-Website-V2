import mongoose from 'mongoose';

const { Schema } = mongoose;

const projectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    details: [{
        imgPath: {
            type: String,
            required: true,
        },
        descriptionParagraph: {
            type: String,
            required: true,
        },
        membersID: [{
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'TeamMember'  // Corrected to your use case, assuming 'TeamMember' is the model name
        }],
        index: {
            type: Number,
            required: true,
        }
    }]
}, { timestamps: true });

export default mongoose.model('Project', projectSchema);
