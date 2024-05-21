import express from 'express'
import { connectToDb } from './config/db.js'
import 'dotenv/config.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'

// create app 
const app = express()

// database call
connectToDb()

// PORT 
const PORT = process.env.PORT || 6005

// mi
app.use(express.json())
app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials:true
    }
))
app.use(cookieParser())

// import and mounting authRoutes
import authRoutes from './routes/authRoutes.js'
app.use('/api/v1/auth', authRoutes)

// import and mounting userRoutes
import userRoutes from './routes/userRoutes.js'
app.use('/api/v1/user', userRoutes)

// import and mounting profileRoutes
import profileRoutes from './routes/profileRoutes.js'
app.use('/api/v1/profile', profileRoutes)

// import and mounting companyAdvertisementuserRoutes
import companyAdvertisementRoutes from './routes/companyAdvertisementRoutes.js'
app.use('/api/v1/company', companyAdvertisementRoutes)

// app listen
app.listen(PORT, () => {
    console.log(`Server is listening at the port http://localhost:${PORT}`)
})