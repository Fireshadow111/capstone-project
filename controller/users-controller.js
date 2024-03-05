import {getUsers,getUser,addUser,deleteUser,editUser} from '../models/users-database.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const SECRET_KEY = process.env.SECRET_KEY

export default{

    getUsers: async(req,res)=>{
      res.send(await getUsers())
  },
  
  getUser: async(req,res)=>{
      res.send(await getUser(+req.params.id))
  },
  
  addUser: async (req, res) => {
    const { user_Name, user_Surname, user_Email, user_Pass } = req.body;
    bcrypt.hash(user_Pass, 10, async (err, hash) => {
        if (err) throw err;
        await addUser(user_Name, user_Surname, user_Email, user_Pass);
        res.send(await getUsers());

        const token = jwt.sign({ email: user_Email, SECRET_KEY }, { expiresIn: '1h' });

        res.cookie('token', token, {httpOnly: true});

        res.send({
            msg: "Your account has been created successfully"
        })
    });
},
  
  deleteUser: async(req,res)=>{
      res.send(await deleteUser(req.params.id));   
  },
  
  editUser: async(req,res)=>{
      const [user] = await getUser(+req.params.id)
  
      let {user_Name, user_Surname, user_Email, user_Pass} = req.body
  
      user_Name ? user_Name=user_Name: {user_Name}=user
  
      user_Surname ? user_Surname= user_Surname: {user_Surname}=user
  
      user_Email ? user_Email= user_Email: {user_Email}=user
  
      user_Email ? user_Email = user_Email: {user_Email} = user
  
      user_Pass ? user_Pass = user_Pass: {user_Pass} = user
  
  
      await editUser(user_Name, user_Surname, user_Email, user_Pass, +req.params.id)
      
      res.json(await getUsers())
  },

//   hash password
// signUpUser:('/users',(req,res)=>{
//     const {user_Name, user_Surname, user_Email, user_Pass} = req.body
//     bcrypt.hash(user_Pass, 10, async(err, hash)=> {
//         if(err) throw err
//         await newUser(user_Name, user_Surname, user_Email, user_Pass)
//         res.send({
//             msg: "You have created an account"
//         })
//     })
// })
  
  
  
  }
  
  
  