const connection = require('../config/database');

const getAllUsers = async () =>{
     let [results,fields] = await connection.query('select * from users');
     return results;
};

const getUserById = async (userId) =>{
     let [results,fields] = await connection.query('select * from users where id = ?', [userId]);
    console.log(results);
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}

const updateUserById = async (name,email,city,userId) =>{
     let [results,fields] = await connection.query(
            ` UPDATE users SET name = ?, email = ?,city = ? WHERE id = ?`,[name,email,city,userId],);
}
module.exports = {
    getAllUsers,
    getUserById,
    updateUserById
};