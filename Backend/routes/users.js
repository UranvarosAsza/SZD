const { Router } = require('express');

const db = require('../database');
const router = Router();

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

router.post('/add-user', (req, res) => {
    const { username, password } = req.body;
    console.log("POST :",    username , password );
    if (username && password) {
        try {
           
            
            res.status(201).send({ msg: 'Cretated user' });
            
        } catch (err) {
            console.log(err);
        }
    }
});


router.delete('/', async (req, res) => {

    console.log("Delete REQUEST to user id: ");
    var user_id = req.body.user_id;
    const deleted_username = await db.promise().query(`SELECT username FROM USERS WHERE user_id = '${user_id}' `);
    var results = await db.promise().query(`DELETE FROM USERS WHERE user_id = '${user_id}' `); 
    console.log(deleted_username.username, "deleted")
    res.send({ msg:  'User deleted' });
});


module.exports = router;