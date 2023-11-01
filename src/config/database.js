const mysql = require('mysql2/promise');
require ('dotenv').config();
//test connection
const connection = mysql.createPool({
   host: process.env.DB_LOCALHOST,
   port: process.env.DB_PORT,    
   user: process.env.DB_USER,        
   password: process.env.DB_PASSWORDS, 
   database: process.env.DB_NAME,
   waitForConnections: true,
   connectionLimit: 10, // Maximum number of connections in the pool
   queueLimit: 0,     
});

module.exports = connection;