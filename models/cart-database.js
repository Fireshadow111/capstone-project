
import {pool} from '../config/config.js'


const postCart = async (user_ID, prod_ID, quantity) => {
    await pool.query(`
        INSERT INTO carts (user_ID, prod_ID, quantity)
        VALUES (?, ?, ?)
    `, [user_ID, prod_ID, quantity]);
};

const getCart = async (user_ID) => {
    const [cartItems] = await pool.query(`
        SELECT * FROM cart WHERE user_ID = ?
    `, [user_ID]);
    return cartItems;
};


const getCarts= async()=>{
    const [result] = await pool.query(`
    SELECT * FROM cart`)
    if (!result || result.length === 0){
        throw error();
    }
    return result
};


const deleteCart = async (user_ID) => {
    await pool.query(`
        DELETE FROM cart
        WHERE user_ID = ? 
    `, [user_ID]);
};


const deleteFromCart = async (user_ID, prod_ID) => {
    await pool.query(`
        DELETE FROM cart
        WHERE userID = ? AND productID = ?
    `, [user_ID, prod_ID]);
};


const getUserID= async (user_Email) => {
    const [[{user_ID}]] = await pool.query(`
    SELECT user_ID 
    FROM users 
    WHERE user_Email = ?
    `, [user_Email])
    return user_ID
};




export{postCart, getCart, deleteCart, getUserID,  deleteFromCart, getCarts }