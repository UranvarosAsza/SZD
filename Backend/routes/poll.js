const { Router } = require('express');
const db = require('../database');
const router = Router();

router.use((req, res, next) => {
    console.log("Request made to poll route");
    next();
});

router.get('/all', async (req, res) => {
    console.log("poll.all request got, and replyed with all the polls");

    const results = await db.promise().query(`SELECT * FROM poll`);
    res.send(results[0]);
});

router.get('/', async (req, res) => {
    console.log("GET REQUEST");
    const poll_id = req.body.financial_id;
    const results = await db.promise().query(`SELECT * FROM poll WHERE poll_id = '${poll_id}' `);
    res.send(results[0]).status(201);
});

router.post('/', async (req, res) => {
    console.log("POST REQUEST");
    const { title, description, label, house_id} = req.body;
    console.log("POST :", title, description,label, house_id);
    if ( title && description && label && house_id) {
        try {
            db.promise().query(`INSERT INTO poll( title, description, label, house_id)
                VALUES ( '${title}', '${description}', '${label}', '${house_id}')`);
            res.status(201).send({ msg: 'Cretated poll' });

        } catch (err) {
            console.log(err);
        }
    }
});

router.delete('/', async (req, res) => {

    console.log("Delete request poll id: ");
    var poll_id = req.body.financial_id;
    const delted_poll = await db.promise().query(`SELECT title FROM poll WHERE poll_id = '${poll_id}' `);
    var results = await db.promise().query(`DELETE FROM poll WHERE poll_id = '${poll_id}' `);
  
    var deletedP = delted_poll[0][0].title + ' deleted';
    res.send({ msg: deletedP });
});

module.exports = router;