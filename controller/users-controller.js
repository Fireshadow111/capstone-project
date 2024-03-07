import { getUsers, getUser, postUser, deleteUser, patchUser } from '../models/users-database.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY;

export default {
    getUsers: async (req, res) => {
        res.send(await getUsers());
    },

    getUser: async (req, res) => {
        res.send(await getUser(+req.params.id));
    },

    postUser: async (req, res) => {
        const { user_Name, user_Email, user_Pass, user_Role } = req.body;
        try {
            // Hashing the password using bcrypt
            const hashedPassword = await bcrypt.hash(user_Pass, 10);

            await postUser(user_Name, user_Email, hashedPassword, user_Role);

            const token = jwt.sign({ email: user_Email }, SECRET_KEY, { expiresIn: '1h' });

            res.cookie('token', token, { httpOnly: true });

            res.send({
                msg: "Your account has been created successfully"
            });
        } catch (error) {
            console.error("Error creating account", error);
            res.status(500).send({ error: "An error has occurred" });
        }
    },

    deleteUser: async (req, res) => {
        res.send(await deleteUser(req.params.id));
    },

    patchUser: async (req, res) => {
        const [user] = await getUser(+req.params.id);

        let { user_Name, user_Email, user_Pass, user_Role } = req.body;

        user_Name ? (user_Name = user_Name) : ({ user_Name } = user);

        user_Email ? (user_Email = user_Email) : ({ user_Email } = user);

        user_Pass ? (user_Pass = user_Pass) : ({ user_Pass } = user);

        user_Role ? (user_Role = user_Role) : ({ user_Role } = user);

        await patchUser(user_Name, user_Email, user_Pass, user_Role, +req.params.id);

        res.json(await getUsers());
    },

    // Hash password
    postSignUp: async (req, res) => {
        const { user_Name, user_Email, user_Pass, user_Role } = req.body;
        try {
            // Hashing the password using bcrypt
            const hashedPassword = await bcrypt.hash(user_Pass, 10);

            await signUser(user_Name, user_Email, hashedPassword, user_Role);

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
        res.send(res.msg);
    }
};
