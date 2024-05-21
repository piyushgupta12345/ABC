import { CompanyAdvertisement } from '../models/companyAdvertisementModel.js'

// CompanyAdvertisement 
export const companyAdvertisement = async (req, res) => {
    try {
        // fetch data from frontend
        const { companyName, email, phone, budget, campaignDuration, targetAudience } = req.body

        // check all field required
        if (!companyName || !email || !phone || !budget || !campaignDuration || !targetAudience) {
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

        // sumbit CompanyAdvertisement
        const user = await CompanyAdvertisement.create({ companyName, email, phone, budget, campaignDuration, targetAudience })

        res.status(201).json({
            success: true,
            message: `Advertisement request submit successfully`,
            user
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Advertisement request submition failed !!!',
            error
        })
    }
}