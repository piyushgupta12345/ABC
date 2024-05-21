import { User } from '../models/userModel.js'
import { hashPassword, comparePassword, generateToken } from '../helpers/authHelper.js'
import jwt from 'jsonwebtoken'

// User Register 
export const signupController = async (req, res) => {
    try {
        // fetch data from frontend
        const { name, email, password, role } = req.body

        // check all field required
        if (!name || !email || !password) {
            return res.status(200).json({
                success: false,
                message: 'All field required'
            })
        }

        // check email validation 
        if (!email.includes('@')) {
            return res.status(200).json({
                success: false,
                message: 'Please enter a valid email'
            })
        }

        // check userExists or not
        const userExists = await User.findOne({ email })
        if (userExists) {
            return res.status(201).json({
                success: false,
                message: 'User allready exits'
            })
        }

        // passwordHashed
        const hashedPassword = await hashPassword(password)

        // create User
        const user = await User.create({ name, email, password: hashedPassword, role })

        // generate token
        const token = await generateToken(user)

        res.status(201).cookie('token', token, { httpOnly: false }).json({
            success: true,
            message: `${user.name.toUpperCase()} register successfully`,
            user
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Register failed !!!',
            error
        })
    }
}

// User Login 
export const signinController = async (req, res) => {
    try {
        // fetch data from frontend
        const { email, password } = req.body

        // check all field required
        if (!email || !password) {
            return res.status(200).json({
                success: false,
                message: 'All field required'
            })
        }

        // check email validation 
        if (!email.includes('@')) {
            return res.status(200).json({
                success: false,
                message: 'Please enter a valid email'
            })
        }

        // check userExists or not
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(201).json({
                success: false,
                message: 'User not exits'
            })
        }

        // match password
        const matchPassword = comparePassword(password, user.password)
        if (!matchPassword) {
            return res.status(200).json({
                success: false,
                message: 'password not match'
            })
        }

        // generate token
        const token = await generateToken(user)
        console.log(user)

        res.status(200).cookie('token', token, { httpOnly: false }).json({
            success: true,
            message: `Welcome to the ${user.name.toUpperCase()}`,
            user
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Login failed !!!',
            error
        })
    }
}

// User Logout
export const logoutController = (req, res) => {
    try {
        return res.status(200).cookie('token', '', { maxAge: 0, httpOnly: false }).json({
            success: true,
            message: 'Logout successfully'
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Logout failed !!!',
            error
        })
    }
}

// User forgetPassword
export const forgetPasswordController = async (req, res) => {
    try {
        // fetch email from frontend
        const { email } = req.body

        // check email field required
        if (!email) {
            return res.status(200).json({
                success: false,
                message: 'Email field is required'
            })
        }

        // check email validation 
        if (!email.includes('@')) {
            return res.status(200).json({
                success: false,
                message: 'Please enter a valid email'
            })
        }

        // check userExists or not
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(201).json({
                success: false,
                message: 'User not exits'
            })
        }

        const secret = process.env.JSONWEBTOKEN + user.password

        const token = jwt.sign({ email: user.email, _id: user._id }, secret, { expiresIn: '5m' })

        const link = `http://localhost:7645/api/v1/auth/forget-password/${user._id}/${token}`
        console.log(link)

        return res.status(200).json({
            success: true,
            message: 'cxvdvbhv',
            link,
            token
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'bbbnt failed !!!',
            error
        })
    }
}

// User resetPassword
export const resetPasswordController = async (req, res) => {
    try {
        // fetch email from frontend
        const { id, token } = req.params

        // check userExists or not
        const user = await User.findOne({ _id: id })
        if (!user) {
            return res.status(201).json({
                success: false,
                message: 'User not exits'
            })
        }

        const secret = process.env.JSONWEBTOKEN + user.password

        // token match
        const match = jwt.verify(token, secret)
        if (!match) {
            return res.status(201).json({
                success: false,
                message: 'not same'
            })
        }

        const link = `http://localhost:7645/api/v1/auth/reset-password/${id}/${token}`
        console.log(link)
        return res.status(200).json({
            success: true,
            message: 'cxvdvbhv',
            link
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'bbbnt failed !!!',
            error
        })
    }
}