import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { newUser } from '../models/users-database.js'



const authenticateToken = (req,res,next)=>{
    let {cookie} = req.headers
    let tokenInHeader = cookie && cookie.split('=')[1]
    if(tokenInHeader===null)res.sendStatus(401)
    jwt.verify(tokenInHeader,process.env.SECRET_KEY,(err,user)=>{
        if(err) return res.sendStatus(403)
        req.user_Email = user_Email
        next()
    })
}




const auth = async (req,res,next)=>{
    const {user_Name,user_Pass} = req.body
    console.log(user_Name);
    const hashedPassword = await checkUser(user_Name)
    bcrypt.compare(user_Pass,hashedPassword,(err,result)=>{
        if(err) throw err
        if(result === true){
            const {user_Name} = req.body
            console.log(user_Name)
            const token = jwt.sign({user_Name:user_Name},process.env.SECRET_KEY,{expiresIn:'1h'})
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
    const {user_Name,user_Pass} = req.body
    const hashedPassword = await checkUser(user_Name)
    bcrypt.compare(user_Name,hashedPassword,(err,result)=>{
        if(err) throw err
        if(result === true){
            const {user_Name} = req.body
            const token = jwt.sign({user_Name:user_Name},process.env.SECRET_KEY,{expiresIn:'1h'})
            res.cookie('jwt',token,{httpOnly:false})
            next()
        }else{
            res.send({msg:'Password doesnt match'})
        }
    })
}



bcrypt.hash(user_Pass, 10, async(err, hash)=> {
    if(err) throw err
    await newUser(user_Name, user_Surname, user_Email, user_Pass)
    res.send({
        msg: "You have created an account"
    })
})