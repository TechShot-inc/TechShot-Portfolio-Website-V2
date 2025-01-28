import express from 'express';
import {
    createProject,
    getProjects,
    getProject,
    getProjectByName,
    updateProject,
    deleteProject
} from '../controllers/ProjectsControllers.js';  // Ensure the path is correct and include '.js'
import { validateApiKey } from './ValidateApiKey.js';
const router = express.Router();

// Route to get all projects
router.get('/', getProjects);

// Route to get a specific project by ID
router.get('/:id', getProject);
router.get('/name/:name',getProjectByName)
// Route to create a new project
router.post('/', validateApiKey,createProject);

// Route to delete a specific project by ID
router.delete('/:id', validateApiKey, deleteProject);

// Route to update a specific project by ID
router.patch('/:id', validateApiKey, updateProject);

export default router;
