import { User } from '../models/userModel.js'

export const getUser = async (req, res) => {
    try {
        // get id from req.params 
        const { id } = req.params

        // get user
        const getUser = await User.findById(id).select('-password')
        res.status(200).json({
            success: true,
            message: 'User get successfully',
            getUser
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'User get failed !!!'
        })
    }
}

// get All User Controller
export const getAllUser = async (req, res) => {
    try {
        // get all user
        const getAllUser = await User.find({}).select('-password')
        res.status(200).json({
            success: true,
            message: 'User get all successfully',
            getAllUser
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'User get all failed !!!'
        })
    }
}

// update User Controller
export const updateUser = async (req, res) => {
    try {
        // data fetch from frontend
        const { name, email, password } = req.body

        // update user
        const updateUser = await User.findByIdAndUpdate(req.user.id, { name, email, password }, { new: true })
        res.status(200).json({
            success: true,
            message: 'User update successfully',
            updateUser
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'User update failed !!!'
        })
    }
}

// delete User Controller
export const deleteUser = async (req, res) => {
    try {
        // delete user
        const deleteUser = await User.findByIdAndDelete(req.user.id)
        res.status(200).json({
            success: true,
            message: 'User delete successfully',
            deleteUser
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'User delete failed !!!'
        })
    }
}