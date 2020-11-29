import express from 'express';

//middleware
import authenticateToken from '../middleware/auth.js';
//Controllers

import { getUser, updateUser } from '../controllers/userController.js';

const router = express.Router();

//@route Get user
router.get('/user', authenticateToken, getUser);

//@route Post Update User
router.post('/user', authenticateToken, updateUser);
export default router;