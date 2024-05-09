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
app.use(cors())
app.use(cookieParser())

// import and mounting authRoutes
import authRoutes from './routes/authRoutes.js'
app.use('/api/v1/auth', authRoutes)

// import and mounting userRoutes
import userRoutes from './routes/userRoutes.js'
app.use('/api/v1/user', userRoutes)

// app listen
app.listen(PORT, () => {
    console.log(`Server is listening at the port http://localhost:${PORT}`)
})