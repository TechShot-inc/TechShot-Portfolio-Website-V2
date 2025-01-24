import express from 'express';
import {
    createProject,
    getProjects,
    getProject,
    updateProject,
    deleteProject
} from '../controllers/ProjectsControllers.js';  // Ensure the path is correct and include '.js'

const router = express.Router();

// Route to get all projects
router.get('/', getProjects);

// Route to get a specific project by ID
router.get('/:id', getProject);

// Route to create a new project
router.post('/', createProject);

// Route to delete a specific project by ID
router.delete('/:id', deleteProject);

// Route to update a specific project by ID
router.patch('/:id', updateProject);

export default router;
