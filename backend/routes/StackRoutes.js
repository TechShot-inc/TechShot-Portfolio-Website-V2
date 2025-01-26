import express from 'express';
import { 
    getStack, 
    getImage, 
    createImage, 
    updateImage, 
    deleteImage,
    getTechStacks,
    createTechStack, 
    updateTechStack, 
    deleteTechStack, 
} from '../controllers/StackControllers.js';
import { validateApiKey } from './ValidateApiKey.js';
const router = express.Router();

// Specific route should come first
router.get('/techStack', getTechStacks);
router.post('/techStack', validateApiKey ,createTechStack);
router.patch('/techStack/:id', validateApiKey, updateTechStack);
router.delete('/techStack/:id', validateApiKey, deleteTechStack);

// General routes for stack
// router.get('/', getStack);
// router.get('/:id', getImage);
// router.post('/', createImage);
// router.delete('/:id', deleteImage);
// router.patch('/:id', updateImage);



export default router;
