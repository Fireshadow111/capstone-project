import {pool} from '../config/config.js'


const login = async(user_Email)=> {
    const [[{password}]] = await pool.query(`
    SELECT password 
    FROM users 
    WHERE user_Email = ?
    `, [user_Email])
    return password
};


export{login}