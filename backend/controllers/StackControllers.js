import mongoose from 'mongoose';
import TechStack from '../models/StackSchema.js';

export const getStack = async(req,res) => {
    const stack = await Stack.find({}).sort({createdAt:-1})
    res.status(200).json(stack)
}

export const getTechStacks = async (req, res) => {
    try {
        const techStacks = await TechStack.find({});
        res.status(200).json(techStacks);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createTechStack = async (req, res) => {
    const { category, technologies } = req.body;

    // Check for empty fields in the category and technologies
    if (!category || !technologies || technologies.length === 0) {
        return res.status(400).json({ error: 'Category and technologies must be provided' });
    }

    try {
        const newTechStack = new TechStack({
            category,
            technologies
        });
        await newTechStack.save();
        res.status(201).json(newTechStack);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
export const updateTechStack = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid ID' });
    }

    try {
        const updatedTechStack = await TechStack.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        if (!updatedTechStack) {
            return res.status(404).json({ error: 'No such tech stack' });
        }
        res.status(200).json(updatedTechStack);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
export const deleteTechStack = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid ID' });
    }

    try {
        const deletedTechStack = await TechStack.findByIdAndDelete(id);
        if (!deletedTechStack) {
            return res.status(404).json({ error: 'No such tech stack' });
        }
        res.status(200).json({ message: 'Tech stack deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// get an image
export const getImage = async(req,res) =>{
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'Invalid ID'})
    }

    const image = await Stack.findById(id)

    if(!image) {
        return res.status(404).json({error:'No such image'})
    }
    res.status(200).json(image)
}

// Add a new image
export const createImage = async (req, res) => {
    const { name , imgPath} = req.body;

    // Check for empty fields in the image name and path
    let emptyFields = [];
    if (!name) {
        emptyFields.push('name');
    }
    if (!imgPath) {
        emptyFields.push('imgPath');
    } 

    // Return an error response if there are any empty fields
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the required fields', emptyFields });
    }
    // Continue with your logic if all fields are filled
    try {
        const image = await Stack.create({ name, imgPath});
        res.status(200).json(image);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// delete an image
export const deleteImage = async (req,res) => {
    const {id}=req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'Invalid ID'})
    }

    const image = await Stack.findByIdAndDelete({_id:id})

    if(!image) {
        return res.status(400).json({error:'No such image'})
    }
    res.status(200).json(Stack)
}

// update an image
export const updateImage = async (req,res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'Invalid ID'})
    }
    const image = await Stack.findByIdAndUpdate({_id:id},{
    ...req.body
    })
    if(!image) {
        return res.status(400).json({error:'No such image'})
    }
    res.status(200).json(image)
}