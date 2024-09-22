import express from 'express';
import {signupValidation, loginValidation} from "../middlewares/authValidation.js";
import {signup, login} from '../controllers/authController.js';
const router = express.Router();

router.post('/login', loginValidation, login);
    
router.post('/signup', signupValidation, signup);//here first the signup is validated and using the next() goes to signup(i.e The signup controller)

export default router;