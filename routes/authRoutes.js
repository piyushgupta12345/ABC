import express from 'express'
const router = express.Router()

import { signupController, signinController, logoutController, forgetPasswordController, resetPasswordController } from '../controllers/authController.js'

router.post('/signup',signupController)
router.post('/signin',signinController)
router.get('/logout',logoutController)
router.post('/forget-password',forgetPasswordController)
router.get('/reset-password/:id/:token',resetPasswordController)

export default router