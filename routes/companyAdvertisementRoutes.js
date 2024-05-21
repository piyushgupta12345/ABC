import express from 'express'
const router = express.Router()

import {isAuthenticate, isCompany} from '../middlewares/authMiddlewares.js'

import { companyAdvertisement } from '../controllers/companyAdvertisementController.js'

router.post('/sumbit-advertisement', isAuthenticate, isCompany, companyAdvertisement)

export default router