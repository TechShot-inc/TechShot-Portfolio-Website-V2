import mongoose from 'mongoose';

const { Schema } = mongoose;

const projectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    projectOverview:{
        type: String,
        required: true
    },
    projectImagePath:{
        type: String,
        required: true
    },
    details: [{
        imgPath: {
            type: String,
            required: true,
        },
        descriptionParagraph: [{
            header:{
                type: String,
                required: true, 
            },
            mainParagraph:{
                type: String,
                required: true, 
            },
            highlightedText:{
                type: String,
                required: true, 
            }
        }],
        membersID: [{
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'TeamMember'
        }],
        index: {
            type: Number,
            required: true,
        }
    }],
    projectMembersId:[{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'TeamMember'
    }]
}, { timestamps: true });

export default mongoose.model('Project', projectSchema);

