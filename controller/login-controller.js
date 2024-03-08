import {login} from '../models/login-database.js'


export default{

    postLogin: async (req, res) => {
        const { user_Email, user_Password } = req.body;
    
        await login(user_Email, user_Password);
        res.send();
    }

}
