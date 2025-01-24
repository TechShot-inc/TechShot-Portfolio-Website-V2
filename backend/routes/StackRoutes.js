import express from 'express';
import { 
    getStack, 
    getImage, 
    createImage, 
    updateImage, 
    deleteImage 
} from '../controllers/StackControllers.js';

const router = express.Router();

// Retrieve the whole stack
router.get('/', getStack);

// Retrieve a specific image by ID
router.get('/:id', getImage);

// Create a new image entry
router.post('/', createImage);

// Delete a specific image by ID
router.delete('/:id', deleteImage);

// Update a specific image by ID
router.patch('/:id', updateImage);

export default router;
