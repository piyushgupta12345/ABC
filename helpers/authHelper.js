import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import 'dotenv/config.js'

export const hashPassword = async (password) => {
    return await bcrypt.hash(password, 10)
}

export const comparePassword = async (password, savePassword) => {
    return await bcrypt.compare(password, savePassword)
}

export const generateToken = async (user) => {
    return jwt.sign(
        {
            id: user._id
        },
        process.env.JSONWEBTOKEN,
        {
            expiresIn: '40h'
        })
}