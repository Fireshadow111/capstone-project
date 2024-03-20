
import {pool} from '../config/config.js'


const postCart = async (user_ID, prod_ID, quantity) => {
    await pool.query(`
        INSERT INTO carts (user_ID, prod_ID, quantity)
        VALUES (?, ?, ?)
    `, [user_ID, prod_ID, quantity]);
};

const patchCart = async(user_ID, quantity, prod_ID, id)=>{
    await pool.query(`
        UPDATE cart
        SET user_ID= ?, quantity = ?, prod_ID = ?
        WHERE prod_ID = ?
    `,[user_ID, quantity, prod_ID, id])
    return getCarts()
};

const getUserCart = async (user_ID) => {
    const [cartItems] = await pool.query(`
        SELECT 
            c.quantity AS sold_quantity,
            p.amount AS price_per_unit,
            (c.quantity * p.amount) AS total_price,
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
        WHERE user_ID = ? AND productID = ?
    `, [user_ID, prod_ID]);
};

const deleteCartByID = async (user_ID) => {
    // Removes cart on admin
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



const updateProductQuantity = async (user_ID) => {
    // Update the quantity of products in stock after checkout
    await pool.query(`
    UPDATE products p
    JOIN (
        SELECT c.prod_ID, SUM(c.quantity) AS total_sold
        FROM cart c
        WHERE c.User_ID = ?
        GROUP BY c.prod_ID
    ) AS soldTotals ON p.prod_ID = soldTotals.prod_ID
    SET p.quantity = p.quantity - soldTotals.total_sold;
    `, [user_ID]);
};




export{postCart, getCart, deleteCart, getUserID,  deleteFromCart, getCarts, patchCart,getUserCart, updateProductQuantity, deleteCartByID}