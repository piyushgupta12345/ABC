import express from 'express'
const router = express.Router()

import { isAuthenticate } from '../middlewares/authMiddlewares.js'

import { createProfile, getProfile, getAllProfile, updateProfile } from '../controllers/profileController.js'


router.post('/createprofile', isAuthenticate, createProfile)
router.get('/getprofile/:id', isAuthenticate, getProfile)
router.get('/getallprofile', isAuthenticate, getAllProfile)
router.put('/updateprofile/:id', isAuthenticate, updateProfile)

export default router