const { Router } = require('express');

const db = require('../database');
const router = Router();
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

router.post('/add-user', [
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


router.delete('/', async (req, res) => {

    var user_id = req.body.user_id;


    const deleted_username = await db.promise().query(`SELECT username FROM USERS WHERE user_id = '${user_id}' `);
    var results = await db.promise().query(`DELETE FROM USERS WHERE user_id = '${user_id}' `);

    var deletedUN = deleted_username[0][0].username + ' deleted';
    res.send({ msg: deletedUN });
});


module.exports = router;