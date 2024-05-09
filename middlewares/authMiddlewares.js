import jwt from 'jsonwebtoken'
import 'dotenv/config.js'

export const isAuthenticate = async (req,res,next) =>{
    try {
        const token = req.cookies.token
        if(!token){
            return res.json({
                success:false,
                message:"token is not found!!"
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