//cart table functions
import {pool} from '../config/config.js'


const postCart = async (user_ID, prod_ID, quantity) => {
    // Insert new row into cart table with userID, productID, and quantity
    await pool.query(`
        INSERT INTO carts (user_ID, prod_ID, quantity)
        VALUES (?, ?, ?)
    `, [user_ID, prod_ID, quantity]);
};

const getCart = async (user_ID) => {
    // Retrieve cart contents for the user based on userID
    const [cartItems] = await pool.query(`
        SELECT * FROM cart WHERE user_ID = ?
    `, [user_ID]);
    return cartItems;
};


const deleteCart = async (user_ID) => {
    // Remove a product from the user's cart
    await pool.query(`
        DELETE FROM cart
        WHERE user_ID = ? 
    `, [user_ID]);
};

const getUserID= async (user_Email) => {
    const [[{user_ID}]] = await pool.query(`
    SELECT user_ID 
    FROM users 
    WHERE user_Email = ?
    `, [user_Email])
    return user_ID
};




export{postCart, getCart, deleteCart, getUserID }