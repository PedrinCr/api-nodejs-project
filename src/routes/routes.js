import express from 'express';
import { register, login } from '../controllers/auth_controller.js';
import { validateToken } from '../middlewares/validateToken.js';

const router = express.Router();

router.get('/me', validateToken, (req, res) => {
  res.send('Working!');
});

router.post('/register', register);
router.post('/login', login);

export default router;
