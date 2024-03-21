import {pool} from '../config/config.js'

const getUsers= async()=>{
    const[result] = await pool.query(`
    SELECT * FROM users`)
    if(!result || result.length === 0) {
      this.error()
    }
    return result
  }
  
  const getUser= async(user_Email)=>{
    const [result] = await pool.query(`
    SELECT * 
    FROM users
    WHERE user_Email = ?`,[user_Email])
    return result
  }

  const getUserByID = async(id)=>{
    const [result] = await pool.query(`
    SELECT * 
    FROM users
    WHERE user_ID = ?`,[id])
    return result
};

  
  const postUser= async(user_Name, user_Email, user_Pass,user_Role)=>{
    const [user] = await pool.query(`
        INSERT INTO users(user_Name, user_Email, user_Pass, user_Role) VALUES (?,?,?,?)
    `,[user_Name, user_Email, user_Pass, user_Role])
    return getUsers(user.InsertId)
  }
  
  const deleteUser = async(id)=>{
    const [user] = await pool.query(`
        DELETE FROM users
        WHERE user_ID = ?
    `,[id])
    return getUsers(user.DeleteId)
  } 
  
  const patchUser = async(user_Name, user_Email, user_Pass, user_Role, user_ID)=>{
    await pool.query(`
        UPDATE users
        SET user_Name = ?, user_Email = ?, user_Pass = ?, user_Role = ?
        WHERE user_ID = ?
    `,[user_Name, user_Email, user_Pass, user_Role, user_ID])
    return getUsers()
  }


  const patchUserProfile = async(user_Name, user_Email, user_Pass, user_Role)=>{
    await pool.query(`
        UPDATE users
        SET user_Name = ?, user_Email = ?, user_Pass = ?, user_Role = ?
        WHERE user_Email = ?
    `,[user_Name, user_Email, user_Pass, user_Role])
    return getUsers()
};



  const login = async(user_Email)=> {
    const [[{user_Pass}]] = await pool.query(`
    SELECT user_Pass 
    FROM users 
    WHERE user_Email = ?
    `, [user_Email])
    return user_Pass
};


const getUserRole = async (user_Email) => {
  const [[{user_Role}]] = await pool.query(`
  SELECT user_Role 
  FROM users 
  WHERE user_Email = ?
  `, [user_Email])
  return user_Role
};
  
  
  export {getUsers,getUser,postUser,deleteUser,patchUser, login, getUserByID, patchUserProfile,getUserRole}