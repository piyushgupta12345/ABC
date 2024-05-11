import { User } from '../models/userModel.js'
import { hashPassword, comparePassword, generateToken } from '../helpers/authHelper.js'

// User Register 
export const signupController = async (req, res) => {
    try {
        // fetch data from frontend
        const { name, email, password, role } = req.body

        // check all field required
        if (!name || !email || !password ) {
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
            message: 'User register successfully',
            user
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'User register failed !!!',
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

        res.status(200).cookie('token', token,{httpOnly: false}).json({
            success: true,
            message: 'User login successfully',
            user
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'User login failed !!!',
            error
        })
    }
}

// User Logout
export const logoutController = (req, res) => {
    try {
        return res.status(200).cookie('token', '', { maxAge:0, httpOnly: false }).json({
            success: true,
            message: 'User logout successfully'
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'User logout failed !!!',
            error
        })
    }
}