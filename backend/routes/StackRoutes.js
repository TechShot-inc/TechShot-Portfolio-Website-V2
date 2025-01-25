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

const router = express.Router();

// Specific route should come first
router.get('/techStack', getTechStacks);
router.post('/techStack', createTechStack);
router.patch('/techStack/:id', updateTechStack);
router.delete('/techStack/:id', deleteTechStack);

// General routes for stack
// router.get('/', getStack);
// router.get('/:id', getImage);
// router.post('/', createImage);
// router.delete('/:id', deleteImage);
// router.patch('/:id', updateImage);



export default router;
