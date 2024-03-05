import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { newUser } from '../models/users-database.js'



const authenticateToken = (req,res,next)=>{
    let {cookie} = req.headers
    let tokenInHeader = cookie && cookie.split('=')[1]
    if(tokenInHeader===null)res.sendStatus(401)
    jwt.verify(tokenInHeader,process.env.SECRET_KEY,(err,user)=>{
        if(err) return res.sendStatus(403)
        req.email_Add = email_Add
        next()
    })
}




const auth = async (req,res,next)=>{
    const {first_Name,user_Pass} = req.body
    console.log(first_Name);
    const hashedPassword = await checkUser(first_Name)
    bcrypt.compare(user_Pass,hashedPassword,(err,result)=>{
        if(err) throw err
        if(result === true){
            const {username} = req.body
            console.log(first_Name)
            const token = jwt.sign({first_Name:first_Name},process.env.SECRET_KEY,{expiresIn:'1h'})
            // res.cookie('jwt',token,{httpOnly:false})
            console.log(token);
            res.send({
                token:token,
                msg:'You have been warned'
            })
            next()
        }else{
            res.send({msg:'Password doesnt match'})
        }
    })
   
}

app.post('/login',auth,(req,res)=>{
})



login: async (req,res,next)=>{
    const {first_Name,user_Pass} = req.body
    const hashedPassword = await checkUser(first_Name)
    bcrypt.compare(first_Name,hashedPassword,(err,result)=>{
        if(err) throw err
        if(result === true){
            const {first_Name} = req.body
            const token = jwt.sign({first_Name:first_Name},process.env.SECRET_KEY,{expiresIn:'1h'})
            res.cookie('jwt',token,{httpOnly:false})
            next()
        }else{
            res.send({msg:'Password doesnt match'})
        }
    })
}