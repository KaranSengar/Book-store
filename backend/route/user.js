import express from 'express';
import { login, signup } from '../Controller/usercontroller.js';

const router = express.Router();

router.post('/',signup)
router.post('/login',login)

export default router

