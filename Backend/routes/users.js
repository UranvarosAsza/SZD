const { Router } = require('express');

const db = require('../database');
const router = Router();
const md5 = require('md5');
const jwt = require('jsonwebtoken');

const { check, validationResults } = require('express-validator');

router.use((req, res, next) => {
    console.log("Request made to users route");
    next();
});

router.get('/all', async (req, res) => {
    console.log("users.all request got, and replyed with all the users");

    const results = await db.promise().query(`SELECT * FROM USERS`);
    res.send(results[0]);
    //res.send("users/all endpoint works");
});

router.get('/', async (req, res) => {
    console.log("GET REQUEST to user id: ");
    const user_id = req.body.user_id;
    console.log(user_id);
    const results = await db.promise().query(`SELECT * FROM USERS WHERE user_id = '${user_id}' `);
    res.send(results[0]).status(201);
});

/* GET users listing. */
router.post('/register', async function (req, res, next) {
    try {
      let { username, email, password } = req.body; 
     
      const hashed_password = md5(password.toString())
      const checkUsername = `Select username FROM users WHERE username = ?`;
      db.query(checkUsername, [username], (err, result, fields) => {
        if(!result.length){
          const sql = `Insert Into users (username, email, password) VALUES ( ?, ?, ? )`
          db.query(
            sql, [username, email, hashed_password],
          (err, result, fields) =>{
            if(err){
              res.send({ status: 0, data: err });
            }else{
              let token = jwt.sign({ data: result }, 'secret')
              res.send({ status: 1, data: result, token : token });
              console.log('user registration complete');
            }
           
          })
        }
      });
      
     
    } catch (error) {
      res.send({ status: 0, error: error });
    }
});

router.post('/login', async function (req, res, next) {
    try {
      let { username, password } = req.body; 
     
      const hashed_password = md5(password.toString())
      const sql = `SELECT * FROM users WHERE username = ? AND password = ?`
      db.query(
        sql, [username, hashed_password],
      function(err, result, fields){
        if(err){
          res.send({ status: 0, data: err });
        }else{
          let token = jwt.sign({ data: result }, 'secret')
          res.send({ status: 1, data: result, token: token });
          console.log('user login complete');
        }
       
      })
    } catch (error) {
      res.send({ status: 0, error: error });
    }
});
  
/*
router.post('/register', [
    check('username').notEmpty().withMessage("username id canot be empty")
        .isLength({ min: 1 }).withMessage("username have to be at least 1 character long "),
    check('password').notEmpty().withMessage("password canot be empty"),
],
    (req, res) => {
        const { username, password } = req.body;
        console.log("POST :", username, password);
        if (username && password) {
            try {
                db.promise().query(`INSERT INTO USERS(username, password) VALUES ('${username}','${password}' )`);

                res.status(201).send({ msg: 'Cretated user' });

            } catch (err) {
                console.log(err);
            }
        }
    });
*/

router.delete('/', async (req, res) => {

    var user_id = req.body.user_id;


    const deleted_username = await db.promise().query(`SELECT username FROM USERS WHERE user_id = '${user_id}' `);
    var results = await db.promise().query(`DELETE FROM USERS WHERE user_id = '${user_id}' `);

    var deletedUN = deleted_username[0][0].username + ' deleted';
    res.send({ msg: deletedUN });
});


module.exports = router;
