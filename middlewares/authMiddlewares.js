import jwt from 'jsonwebtoken'
import 'dotenv/config.js'
import { User } from '../models/userModel.js'

export const isAuthenticate = async (req, res, next) => {
    try {
        const token = req.cookies.token
        if (!token) {
            return res.json({
                success: false,
                message: "token is not found!!"
            })
        }
        const decode = jwt.verify(token, process.env.JSONWEBTOKEN)
        // send user in req
        req.user = decode
        // console.log(req.user.id)
        next()
    } catch (error) {
        console.log(error)
    }
}

export const isUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id)
        if (user.role !== 'user') {
            return res.status(401).json({
                success: false,
                message: "UnAuthorized Access"
            })
        }
        next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "isUser failed",
            error
        })
    }
}

export const isCompany = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id)
        if (user.role !== 'company') {
            return res.status(401).json({
                success: false,
                message: "UnAuthorized Access"
            })
        }
        next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "isCompany failed",
            error
        })
    }
}

export const isAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id)
        if (user.role !== 'admin') {
            return res.status(401).json({
                success: false,
                message: "UnAuthorized Access"
            })
        }
        next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "isAdmin failed",
            error
        })
    }
}