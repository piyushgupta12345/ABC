import express from 'express'
const router = express.Router()

import { signupController, signinController, logoutController } from '../controllers/authController.js'

router.post('/signup',signupController)
router.post('/signin',signinController)
router.get('/logout',logoutController)

export default router