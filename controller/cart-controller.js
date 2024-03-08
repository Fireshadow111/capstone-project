
import {postCart, getCart, deleteCart, getUserID } from "../models/cart-database.js";


export default {
    postCart: async (req, res) => {
        // Get emailAdd from cookies
        const user_Email = req.user_Email;    
        console.log(user_Email);
        // Use a function to find the userID based on emailAdd
        try {
            const user_ID = await getUserID(user_Email)
            
            // Assuming prodID and quantity are obtained from request body or query parameters
            const { prod_ID, quantity } = req.body;

            // Insert product into cart table using userID and prodID
            await postCart(user_ID, prod_ID, quantity);

            res.send({ msg: 'Product added to cart successfully' });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send({ error: 'An error occurred while adding product to cart' });
        }
    },
    getCart: async (req, res) => {
        const user_Email = req.user_Email;    
        console.log(user_Email);
        const user_ID = await getUserID(user_Email)
        res.send(await  getCart(user_ID));
    },
    deleteCart: async (req, res) => {
        const user_Email = req.user_Email;    
        console.log(user_Email);
        const user_ID = await getUserID(user_Email)
        res.send(await  deleteCart(user_ID));
    }
}