const { Router } = require('express');

const db = require('../database');
const router = Router();
const md5 = require('md5');
const jwt = require('jsonwebtoken');

const { check, validationResults } = require('express-validator');

async function selectLoggedInUser(param) {

  const loggedInUser = await db.promise().query(
    `SELECT user_id, username, isHouseMaster, adress FROM users WHERE username = '${param}'`);

  return loggedInUser[0][0];
};

async function houseIdfromAdress(param) {
  console.log(house_id[0][0].house_id);
  console.log(typeof (house_id[0][0].house_id));
  return house_id[0][0].house_id;
}

router.use((req, res, next) => {
  console.log("Request made to users route");
  next();
});

router.get('/all', async (req, res) => {
  console.log("users.all request got, and replyed with all the users");
  const results = await db.promise().query(`SELECT * FROM USERS`);
  res.send(results[0]);
});

router.get('/', async (req, res) => {
  console.log("GET REQUEST to user id: ");
  const user_id = req.body.user_id;
  console.log(user_id);
  const results = await db.promise().query(`SELECT * FROM USERS WHERE user_id = '${user_id}' `);
  res.send(results[0]).status(201);
});

router.post('/register', async function (req, res, next) {
  try {
    let { username, email, password, adress, isadmin } = req.body;

    let house_idFromDB = "";
    const hashed_password = md5(password.toString())
    const sql_2 = `SELECT house_id FROM house WHERE adress = ?`
    db.query(sql_2, [adress], (err, result, fields) => {
      house_idFromDB = result[0].house_id;
    });
    const checkUsername = `Select username FROM users WHERE username = ?`;
    db.query(checkUsername, [username], (err, result, fields) => {
      if (!result.length) {

        const sql = `Insert Into users (username, email, password, adress, house_id, isHouseMaster) VALUES ( ?, ?, ?, ?, ?, ? )`

        db.query(
          sql, [username, email, hashed_password, adress, house_idFromDB.toString(), isadmin],
          (err, result, fields) => {
            if (err) {
              res.send({ status: 0, data: err });
              console.log(err)
            } else {
              let token = jwt.sign({ data: result }, 'secret')
              res.send({ status: 1, data: result, token: token });
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
    //console.log(req.body);
    const hashed_password = md5(password.toString())
    const sql = `SELECT * FROM users WHERE username = ? AND password = ?`
    db.query(
      sql, [username, hashed_password],
      function (err, result, fields) {
        if (result[0] == undefined) {
          res.send({ status: 400, data: err });
        } else {
          let token = jwt.sign({ data: result }, 'secret')
          res.send({ status: 200, data: result, token: token, body: selectLoggedInUser(username) });
          console.log('user login complete');
        }
      })
  } catch (error) {
    res.send({ status: 0, error: error });
  }
});

router.delete('/', async (req, res) => {
  var user_id = req.body.user_id;
  const deleted_username = await db.promise().query(`SELECT username FROM USERS WHERE user_id = '${user_id}' `);
  var results = await db.promise().query(`DELETE FROM USERS WHERE user_id = '${user_id}' `);
  var deletedUN = deleted_username[0][0].username + ' deleted';
  res.send({ msg: deletedUN });
});

module.exports = router;