
import {postCart, getCart, deleteCart, getUserID, deleteFromCart } from "../models/cart-database.js";


export default {
    postCart: async (req, res) => {
        const user_Email = req.user_Email;    
        console.log(user_Email);
        try {
            const user_ID = await getUserID(user_Email)
            
            const { prod_ID, quantity } = req.body;

            await postCart(user_ID, prod_ID, quantity);

            res.send({ msg: 'Product added to cart successfully' });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send({ error: 'An error occurred while adding product to cart' });
        }
    },
    getCart: async (req, res) => {
        const user_Email = req.user_Email;    
        const user_ID = await getUserID(user_Email)
        res.send(await  getCart(user_ID));
    },
    deleteCart: async (req, res) => {
        const user_Email = req.user_Email;    
        console.log(user_Email);
        const user_ID = await getUserID(user_Email)
        res.send(await  deleteCart(user_ID));
    },

    deleteFromCart: async (req, res) => {
        const user_Email = req.user_Email;
        const {prod_ID} = req.body;   
        const user_ID = await getUserID(user_Email);
        res.send(await  deleteFromCart(user_ID,prod_ID));
    }
}