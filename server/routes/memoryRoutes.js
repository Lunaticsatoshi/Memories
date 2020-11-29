import express from 'express';

//Middelware
import authenticateToken from '../middleware/auth.js';

//controllers
import {getMemories, getMemory, createMemory, updateMemory, deleteMemory, favouriteMemory} from '../controllers/memoryController.js';

const router = express.Router();

//@route Get All Memories
router.get('/memories', authenticateToken, getMemories);

//@route Get MemorybyId
router.get('/memory/:id', authenticateToken, getMemory);

//@route Post Create Memory
router.post('/memory/new', authenticateToken, createMemory);

//@route Post Update Memory
router.post('/memory/update/:id', authenticateToken, updateMemory);

//@route delete Delete Memory
router.delete('/memory/:id', authenticateToken, deleteMemory);

//@route post Favourite Memory
router.post('/memory/like/:id', authenticateToken, favouriteMemory);

export default router