import express from 'express'
import {google,signup,signin} from '../controllers/auth.controller.js';
import {create} from '../controllers/post.controller.js';
const router =express.Router();

router.post("/signUp",signup)
router.post("/signin",signin)
router.post("/google",google)



 export default router