const connection = require('../config/database');
const {getAllUsers,getUserById,updateUserById} = require('../services/CRUDservice');

const getHomePage = async (req,res)=>{
     let results = await getAllUsers();
    console.log(results);
    return res.render('index.ejs',{ listUsers : results });
  };

const getCreatePage = (req, res) => {
    res.render('CreateUsers.ejs');
};

const getUpdatePage = async (req, res) => {
     const userId = req.params.id
    let user = await getUserById(userId);
    res.render('edit.ejs',{ userEdit : user });
};

const postCreateUser = async (req, res) => {
        console.log(req.body);

        let name = req.body.name;
        let email = req.body.email;
        let city = req.body.city;

        res.send('Create New User');

        let [results,fields] = await connection.query(
            `INSERT INTO users (name,email,city) Values(?,?,?)`,[name,email,city],);
            console.log(results);
        
};

const postUpdateUser = async (req, res) => {
        let name = req.body.name;
        let email = req.body.email;
        let city = req.body.city;
        let userId = req.body.userId;

       await updateUserById(name,email,city,userId);
            res.redirect('/');
        
};    
module.exports = {
    getHomePage,
    getCreatePage,
    getUpdatePage,
    postCreateUser,
    postUpdateUser
}
        //      Values(?,?,?)`,
        //     [name,email,city],`)
        // connection.query(
        //     `INSERT INTO users (name,email,city)
        //      Values(?,?,?)`,
        //     [name,email,city],

        //     (err, results) => {

        //         console.log(results);
        //     }
        // );

//         connection.query(
//   'SELECT id,name,emailcity from users',
//   function(err, results, fields) {
//     console.log(results); 
//   }
// );
