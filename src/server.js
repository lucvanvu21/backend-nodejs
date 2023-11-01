const express = require('express');
require ('dotenv').config();
const configViewEngine = require('./config/viewengine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');

const app = express();
const port = process.env.PORT || 8081;

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
//viewengine
configViewEngine(app);
// const listuserss = async (req,res) => {
// let [results,fields] = await connection.query('SELECT id,name,emailcity from users');
// console.log(results);}
// connection.query(
//   'SELECT id,name,emailcity from users',
//   function(err, results, fields) {
//     console.log(results); 
//   });
//khai bao routes
app.use(webRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});