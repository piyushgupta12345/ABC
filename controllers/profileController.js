import { Profile } from "../models/profileModel.js";

// create Profile controller
export const createProfile = async (req, res) => {
    try {
        // fetch data from frontend
        const { phone, location, bio, instagram, twitter, user } = req.body

        // create profile
        const profile = await Profile.create({ phone, location, bio, instagram, twitter, user: req.user.id });
        res.status(200).json({
            success: true,
            message: 'create profile successfully',
            profile
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'create profile failed !!!'
        })
    }
}

// singal Profile controller
export const getProfile = async (req, res) => {
    try {
        // getProfile
        const getProfile = await Profile.findOne({ user: req.params.id })
        res.status(200).json({
            success: true,
            message: 'get profile successfully',
            getProfile
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'get profile failed !!!'
        })
    }
}

// all Profile controller
export const getAllProfile = async (req, res) => {
    try {
        // getAllProfile
        const getAllProfile = await Profile.find({})
        res.status(200).json({
            success: true,
            message: 'get all profile successfully',
            getAllProfile
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'get all profile failed !!!'
        })
    }
}

// update Profile controller
export const updateProfile = async (req, res) => {
    try {
        // fetch data from frontend
        const { phone, location, bio, instagram, twitter } = req.body
        // updateProfile
        const updateProfile = await Profile.findByIdAndUpdate({ user: req.params.id }, { phone, location, bio, instagram, twitter }, { new: true })
        res.status(200).json({
            success: true,
            message: 'update profile successfully',
            updateProfile
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'update profile failed !!!'
        })
    }
}