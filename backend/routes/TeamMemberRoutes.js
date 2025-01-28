import express from 'express';
import { 
    createMember,
    getMembers,
    getMember,
    updateMember,
    deleteMember,
    getMemberByName
} from '../controllers/TeamMemberControllers.js';
import { validateApiKey } from './ValidateApiKey.js';
const router = express.Router();

// Get all members
router.get('/', getMembers);

// Get a single member by ID
router.get('/id/:id', getMember);

// Get a member by name
router.get('/name/:name', getMemberByName);

// Create a new member
router.post('/', validateApiKey , createMember);

// Delete a member by ID
router.delete('/:id', validateApiKey, deleteMember);

// Update a member by ID
router.patch('/:id', validateApiKey, updateMember);

export default router;
