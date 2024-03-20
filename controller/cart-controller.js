
import {postCart, getCart, deleteCart, getUserID,  deleteFromCart, getCarts, patchCart,getUserCart, updateProductQuantity, deleteCartByID } from "../models/cart-database.js";


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
    getUserCart: async (req, res) => {
        try {
            const user_Email = req.user_Email;
            const user_ID = await getUserID(user_Email);
            const userCart = await getUserCart(user_ID);
            res.send(userCart);
        } catch (error) {
            console.error("Error fetching user cart:", error);
            res.status(404).send({msg:"There are no Items in cart"});
        }
    },

    deleteCart: async (req, res) => {
        const user_Email = req.user_Email;    
        const user_ID = await getUserID(user_Email)
        updateProductQuantity(user_ID)
        await deleteCart(user_ID);
        res.send({msg:'Thank you for your purchase'})
    },

    deleteFromCart: async (req, res) => {
        const user_Email = req.user_Email  
        const prod_ID = parseInt(+req.params.id)
        const user_ID = await getUserID(user_Email)
        res.send(await  deleteFromCart(user_ID,prod_ID))
    },

    getCarts: async (req, res) => {
        try {
            const carts = await getCarts();
            res.send(carts);
        } catch (error) {
            console.error("Error fetching carts:", error);
            res.status(404).send({msg:"No carts available"});
        }
    },

    deleteCartByID: async(req,res)=>{
        res.send(await deleteCartByID(+req.params.id));   
    },

    postCartByAdmin: async (req, res) => {
        try{
            const { user_ID, prod_ID, quantity } = req.body;
            
            await postCart(user_ID, prod_ID, quantity);

            res.send({ msg: 'Product added to cart successfully' });
        }catch (error) {
            console.error('Error:', error);
            res.status(500).send({ error: 'An error occurred while adding product to cart' });
        }
    },

    patchCart: async(req,res)=>{
        const [cart] = await getCart(+req.params.id)

        let {user_ID, quantity, prod_ID,} = req.body

        user_ID ? user_ID=user_ID: {user_ID} = cart

        quantity ? quantity=quantity: {quantity} = cart

        prod_ID ? prod_ID=prod_ID: {prod_ID} = cart

        await patchCart(user_ID, quantity, prod_ID,+req.params.id)
        
        res.send(await getCarts())
    }

}