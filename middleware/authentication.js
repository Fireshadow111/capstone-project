import { login } from "../models/users-database.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const authenticate = (req,res,next) => {
    let {cookie} = req.headers
    let tokenInHeader = cookie && cookie.split('=')[1]
    if(tokenInHeader===null) res.sendStatus(401)
    console.log(tokenInHeader)
    jwt.verify(tokenInHeader, process.env.SECRET_KEY, (err, user)=>{
        if(err)return res.sendStatus(403)
        req.user = user
        req.user_Email = user.user_Email;
        next()
    })
}

const certificate = async(req,res,next) => {
    const {user_Email, user_Pass} = req.body
    const hashedPassword = await login(user_Email)
    bcrypt.compare(user_Pass, hashedPassword, (err,result)=>{
        if(err) throw err
        if(result === true){
            const {user_Email} = req.body
            const token = jwt.sign({user_Email:user_Email}, process.env.SECRET_KEY,{expiresIn: '1h'})
            
            console.log(token);

            res.cookie('token', token,{ httpOnly:false, expiresIn:'1hr'});
            res.send({
                token:token,
                msg: 'You have logged in! YAY!'
            })
            next();
        }else{
            res.send({msg: 'The email or password is incorrect'})
        }
    })
}



export { authenticate, certificate };


