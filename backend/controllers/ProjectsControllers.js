import Project from '../models/ProjectSchema.js';
import mongoose from 'mongoose';
import TeamMember from '../models/TeamMemberSchema.js'; // Ensure you import TeamMember

// Get all projects
export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find({}).sort({ createdAt: -1 });
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
};



// Get a single project
export const getProject = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid ID' });
    }

    try {
        const project = await Project.findById(id);
        if (!project) {
            return res.status(404).json({ error: 'No such project' });
        }
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
};


// Add a new project
export const createProject = async (req, res) => {
    const { name, projectOverview, projectImagePath, details, projectMembersId } = req.body;

    let emptyFields = [];
    if (!name) emptyFields.push('name');
    if (!projectOverview) emptyFields.push('projectOverview');
    if (!projectImagePath) emptyFields.push('projectImagePath');
    if (!details || details.length === 0) emptyFields.push('details');
    if (!projectMembersId || projectMembersId.length === 0) emptyFields.push('projectMembersId');
    else {
        details.forEach((detail, index) => {
            if (!detail.imgPath) emptyFields.push(`details[${index}].imgPath`);
            
            if (!detail.descriptionParagraph || detail.descriptionParagraph.length === 0) {
                emptyFields.push(`details[${index}].descriptionParagraph`);
            } else {
                detail.descriptionParagraph.forEach((desc, descIndex) => {
                    if (!desc.header) emptyFields.push(`details[${index}].descriptionParagraph[${descIndex}].header`);
                    if (!desc.mainParagraph) emptyFields.push(`details[${index}].descriptionParagraph[${descIndex}].mainParagraph`);
                    if (!desc.highlightedText) emptyFields.push(`details[${index}].descriptionParagraph[${descIndex}].highlightedText`);
                });
            }
        
            if (!detail.membersID || detail.membersID.length === 0) {
                emptyFields.push(`details[${index}].membersID`);
            } else {
                detail.membersID.forEach((id, idIndex) => {
                    if (!id) emptyFields.push(`details[${index}].membersID[${idIndex}]`);
                });
            }
        });
        
    }

    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the required fields', emptyFields });
    }

    try {
        const project = await Project.create({ name, projectImagePath, projectOverview, details, projectMembersId });
        const memberIds = details.flatMap(detail => detail.membersID);

        await TeamMember.updateMany(
            { _id: { $in: memberIds } },
            { $push: { projects: project._id } }
        );

        res.status(200).json(project);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a project
export const deleteProject = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid ID' });
    }

    try {
        const project = await Project.findByIdAndDelete({ _id: id });

        if (!project) {
            return res.status(400).json({ error: 'No such project' });
        }
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
};

// Update a project
export const updateProject = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid ID' });
    }

    try {
        const project = await Project.findByIdAndUpdate({ _id: id }, {
            ...req.body
        }, { new: true });

        if (!project) {
            return res.status(400).json({ error: 'No such project' });
        }
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
};
