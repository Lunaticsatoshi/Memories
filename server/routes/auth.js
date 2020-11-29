import express from 'express';
//middleware
import authenticateToken from '../middleware/auth.js';
import { loginUser, registerUser } from '../controllers/auth.js';


const router = express.Router();

router.get('/', authenticateToken, (req,res) => {
    res.status(200).json({user: req.user.id, userName: req.user.userName}); //Remove in production
})

router.post('/login', loginUser);
router.post('/register', registerUser);

export default router;