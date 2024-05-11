import mongoose, { Schema } from 'mongoose'

const profileSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    phone: {
        type: Number
    },
    location: {
        type: String
    },
    bio: {
        type: String
    },
    instagram: {
        type: String
    },
    twitter: {
        type: String
    }
}, { timestamps: true })

export const Profile = mongoose.model('Profile', profileSchema)