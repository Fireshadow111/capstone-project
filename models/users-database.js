import {pool} from '../config/config.js'

const getUsers= async()=>{
    const[result] = await pool.query(`
    SELECT * FROM users`)
    if(!result || result.length === 0) {
      this.error()
    }
    return result
  }
  
  const getUser= async(id)=>{
    const[result] = await pool.query(`
    SELECT * 
    FROM users
    WHERE user_ID = ?`,[id])
    if(!id || isNaN(id) || id > result) {
      throw error()
    }
    return result
  }
  
  const addUser= async(user_Name, user_Surname, user_Email, user_Pass)=>{
    const [user] = await pool.query(`
        INSERT INTO users(user_Name, user_Surname, user_Email, user_Pass) VALUES (?,?,?,?)
    `,[user_Name, user_Surname, user_Email, user_Pass])
    return getUsers(user.InsertId)
  }
  
  const deleteUser = async(id)=>{
    const [user] = await pool.query(`
        DELETE FROM users
        WHERE user_ID = ?
    `,[id])
    return getUsers(user.DeleteId)
  } 
  
  const editUser = async(user_Name, user_Surname, user_Email, user_Pass, user_ID)=>{
    await pool.query(`
        UPDATE users
        SET user_Name = ?, user_Surname = ?, user_Email = ?, user_Pass = ?
        WHERE user_ID = ?
    `,[user_Name, user_Surname, user_Email, user_Pass, user_ID])
    return getUsers()
  }



  const newUser = async(user_Name, user_Surname, user_Email, user_Pass)=> {
    await pool.query(`
    INSERT INTO users (user_Name, user_Surname, user_Email, user_Pass)
    VALUES (?,?,?,?);
    `, [user_Name, user_Surname, user_Email, user_Pass])
}

  const checkUser = async(first_Name)=> {
    const [[{password}]] = await pool.query(`
    SELECT user_Pass FROM users WHERE user_Name = ?
    `, [user_Name])
    return password
}
 
  
  
  export {getUsers,getUser,addUser,deleteUser,editUser, newUser,checkUser}