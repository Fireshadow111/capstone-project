import { getUsers, getUser, postUser, deleteUser, patchUser, login, userInfo, getUserByID, patchUserProfile } from '../models/users-database.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY;

export default {
    getUsers: async (req, res) => {
        res.send(await getUsers());
    },

    getUser: async(req,res)=>{
        const user_Email = req.user_Email;
        res.send(await getUser(user_Email))
    },

    


    deleteUser: async (req, res) => {
        res.send(await deleteUser(req.params.id));
    },

   

    patchUser: async (req, res) => {
        const [user] = await getUser(+req.params.id);

        let { user_Name, user_Email, user_Pass, user_Role } = req.body;

        user_Name ? user_Name=user_Name: {user_Name} = user

        user_Email ? user_Email=user_Email: {user_Email} = user

        user_Pass ? user_Pass=user_Pass: {user_Pass} = user

        user_Role? user_Role=user_Role: {user_Role} = user
        
        if (user_Pass) {
         
            try {
                user_Pass = await bcrypt.hash(user_Pass, 10);
            } catch (error) {
                console.error("Error hashing password:", error);
                res.status(500).send({ error: "An error occurred while hashing the password" });
                return;
            }
        } else {
    
            user_Pass = user.user_Pass;
        }
        await patchUser(user_Name, user_Email, user_Pass, user_Role, +req.params.id)
        
        res.send(await getUsers());
    },

    patchUserProfile: async (req, res) => {
        const email = req.user_Email;
        
        const [user] = await getUser(email);

        let {user_Name, user_Email, user_Pass, user_Role } = req.body;

        user_Name ? user_Name=user_Name: {user_Name} = user

        user_Email ? user_Email=user_Email: {user_Email} = user

        user_Pass ? user_Pass=user_Pass: {user_Pass} = user

        user_Role ? user_Role=user_Role: {user_Role} = user     

        if (user_Pass) {
            // If present, hash the password
            try {
                user_Pass = await bcrypt.hash(user_Pass, 10);
            } catch (error) {
                console.error("Error hashing password:", error);
                res.status(500).send({ error: "An error occurred while hashing the password" });
                return;
            }
        } else {
            // If not present, use the existing password from the database
            user_Pass = user.user_Pass;
        }

        // Update user data in the database
        await patchUserProfile(user_Name, user_Email, user_Pass, user_Role);

        // Return updated user data
        res.send(await getUsers());
    },



    postUser: async (req, res) => {
        const { user_Name, user_Email, user_Pass, user_Role } = req.body;
        try {
            const hashedPassword = await bcrypt.hash(user_Pass, 10);

            await postUser(user_Name, user_Email, hashedPassword, user_Role);

            res.send({
                msg: "You have created an account"
            });
        } catch (error) {
            console.error("Error creating account", error);
            res.status(500).send({ error: "An error has occurred" });
        }
    },

    postLogin: async (req, res) => {
        const { user_Email, user_Password } = req.body;
    
        await login(user_Email, user_Password);
        res.send();
    }

 
};
