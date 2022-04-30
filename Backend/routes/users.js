const { Router } = require('express');

const db = require('../database');
const router = Router();

router.use((req, res, next)=> {
    console.log("Request made to users route");
    next();
});

router.get('/all',async (req, res)=> {
    console.log("users.all request got, and replyed with all te users");

    const results = await db.promise().query(`SELECT * FROM USERS`);
    res.send(results[0]);
    //res.send("users/all endpoint works");
}) ;   

router.post('/add-user', (req, res)=> {
    const { username, password } = req.body;
    
    if( username && password ){
        try {
            db.promise().query(`INSERT INTO USERS VALUES('${username}', '${password}')`);
            res.status(201).send({msg : 'Cretated user'}); 
        } catch (err) {
            console.log(err);
        }
    }
});

module.exports = router;