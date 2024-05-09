import express from 'express'
const router = express.Router()

import { isAuthenticate } from '../middlewares/authMiddlewares.js'

import { getUser, getAllUser, updateUser, deleteUser } from '../controllers/userController.js'

router.get('/getuser/:id', getUser)
router.get('/getalluser', getAllUser)
router.put('/updateuser/:id', isAuthenticate, updateUser)
router.delete('/deleteuser/:id', isAuthenticate, deleteUser)

export default router