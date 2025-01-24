import express from 'express';
import { 
    getResources, 
    getResource, 
    createResource, 
    updateResource, 
    deleteResource 
} from '../controllers/ResourceControllers.js';  // Make sure the path is correct and add '.js'

const router = express.Router();

// Route to get all resources
router.get('/', getResources);

// Route to get a specific resource by ID
router.get('/:id', getResource);

// Route to create a new resource
router.post('/', createResource);

// Route to delete a specific resource by ID
router.delete('/:id', deleteResource);

// Route to update a specific resource by ID
router.patch('/:id', updateResource);

export default router;
