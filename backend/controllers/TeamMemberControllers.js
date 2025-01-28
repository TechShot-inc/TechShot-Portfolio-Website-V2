import mongoose from 'mongoose';
import Member from '../models/TeamMemberSchema.js';
// get all members
export const getMembers = async (req, res) => {
    const members = await Member.find({}).sort({ createdAt: -1 })
    res.status(200).json(members)
}
// get a single member
export const getMember = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid ID' })
    }

    const member = await Member.findById(id).populate('projects');

    if (!member) {
        return res.status(404).json({ error: 'No such member' })
    }
    res.status(200).json(member)
}

export const getMemberByName = async (req, res) => {
    const { name } = req.params;

    try {
        const member = await Member.findOne({ name }).populate('projects');

        if (!member) {
            return res.status(404).json({ error: 'No such member' });
        }

        res.status(200).json(member);
    } catch (error) {
        // console.error('Error fetching member by name:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// ========================== Administrator Only ============================= //
// Add a new member
export const createMember = async (req, res) => {
    const { name, email, linkedin, git, projects, imgPath } = req.body;

    // Create an array of field names and their corresponding values
    const fields = { name, email, linkedin, git, imgPath };

    // Filter out the field names where the value is empty (falsy)
    let emptyFields = Object.keys(fields).filter(field => !fields[field]);


    if (emptyFields.length > 0 && projects) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields });
    }

    // Continue with your logic if all fields are filled

    try {
        const member = await Member.create({ name, email, linkedin, git, projects: projects || [], imgPath: imgPath || "" })
        res.status(200).json(member)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}
// delete a Member
export const deleteMember = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid ID' })
    }

    const member = await Member.findByIdAndDelete({ _id: id })

    if (!member) {
        return res.status(400).json({ error: 'No such member' })
    }
    res.status(200).json(member)
}


// update a member

export const updateMember = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid ID' })
    }

    const member = await Member.findByIdAndUpdate({ _id: id }, {
        ...req.body
    })
    if (!member) {
        return res.status(400).json({ error: 'No such workout' })
    }
    res.status(200).json(member)
}