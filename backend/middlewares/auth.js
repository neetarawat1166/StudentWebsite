import JWT from 'jsonwebtoken'
import { UserModel } from '../models/userModels.js';


export const isAuthenticated = async (req, res, next) => {
    // console.log(req)
    const token = req.cookies.token;
    // console.log("hii token_auth",token)
    
    if(!token){
        return res.status(404).json({
            success: false,
            message: "User Not authorized"
        })
    }

    const decode = JWT.verify(token, process.env.JWT_SECURE)

    const user = await UserModel.findById(decode.id);
    //console.log(user)
    req.user = user;
    next()
}





