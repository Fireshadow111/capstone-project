
import {pool} from '../config/config.js'


const postCart = async (user_ID, prod_ID, quantity) => {
    await pool.query(`
        INSERT INTO cart (user_ID, prod_ID, quantity)
        VALUES (?, ?, ?)
    `, [user_ID, prod_ID, quantity]);
};

const patchCart = async(user_ID, quantity, prod_ID, id)=>{
    await pool.query(`
        UPDATE cart
        SET user_ID= ?, quantity = ?, prod_ID = ?
        WHERE order_ID = ?
    `,[user_ID, quantity, prod_ID, id])
    return getCarts()
};

const getUserCart = async (user_ID) => {
    const [cartItems] = await pool.query(`
        SELECT 
            c.quantity AS sold_quantity,
            p.price AS price_per_unit,
            (c.quantity * p.price) AS total_price,
            p.prod_URL,
            p.prod_Name,
            p.prod_ID
        FROM 
            cart c
        JOIN 
            products p ON c.prod_ID = p.prod_ID
        WHERE 
            c.User_ID = ?
    `, [user_ID]);
    return cartItems;
};




const getCart = async (order_ID) => {
    const [cartItems] = await pool.query(`
        SELECT * FROM cart WHERE order_ID = ?
    `, [order_ID]);
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
        WHERE user_ID = ? AND prod_ID = ?
    `, [user_ID, prod_ID]);
};

const deleteCartByID = async (order_ID) => {

    await pool.query(`
        DELETE FROM cart
        WHERE order_ID = ? 
    `, [order_ID]);
};


const getUserID= async (user_Email) => {
    const [[{user_ID}]] = await pool.query(`
    SELECT user_ID 
    FROM users 
    WHERE user_Email = ?
    `, [user_Email])
    return user_ID
};








export{postCart, getCart, deleteCart, getUserID,  deleteFromCart, getCarts, patchCart, getUserCart, deleteCartByID}