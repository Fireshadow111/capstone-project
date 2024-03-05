import {pool} from '../config/config.js'

const getProducts= async()=>{
    const[result] = await pool.query(`
    SELECT * FROM products`);
    if(!result || result.length === 0){
        throw console.error();
    }
    return result
}

const getProduct= async(id)=>{
    const[result] = await pool.query(`
    SELECT * 
    FROM products
    WHERE prod_ID = ?`,[id])
    if(!id || isNaN(id) || id > result){
        throw console.error();
    }
    return result
}

const postProduct= async(prod_URL, prod_Name, category, price)=>{
    const [product] = await pool.query(`
        INSERT INTO products(prod_URL, prod_Name, category, price) VALUES (?,?,?,?)
    `,[prod_URL, prod_Name, category, price])
    return getProducts(product.InsertId)
}

const deleteProduct = async(id)=>{
    const [product] = await pool.query(`
        DELETE FROM products
        WHERE prod_ID = ?
    `,[id])
    return getProducts(product.DeleteId)
} 

const patchProduct = async(prod_URL, prod_Name, category, price,prod_ID)=>{
    await pool.query(`
        UPDATE products
        SET prod_URL = ?, prod_Name = ?, category = ?, price = ?
        WHERE prod_ID = ?
    `,[prod_URL, prod_Name, category, price,prod_ID])
    return getProducts()
}



export {getProducts,getProduct,postProduct,deleteProduct,patchProduct}