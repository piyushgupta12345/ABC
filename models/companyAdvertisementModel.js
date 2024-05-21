import mongoose, { Schema } from 'mongoose'

const companyAdvertisementSchema = new Schema({
    companyName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    phone: {
        type: Number,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    campaignDuration: {
        type: String,
        required: true
    },
    targetAudience: {
        type: String,
        required: true
    }
}, { timestamps: true })

export const CompanyAdvertisement = mongoose.model('CompanyAdvertisement', companyAdvertisementSchema)