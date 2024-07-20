import express from 'express';
import { getPasswords, createPassword, updatePassword, deletePassword } from '../controllers/passwordController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware, getPasswords);
router.post('/', authMiddleware, createPassword);
router.patch('/:id', authMiddleware, updatePassword);
router.delete('/:id', authMiddleware, deletePassword);

export default router;

