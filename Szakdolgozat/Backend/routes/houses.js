const { Router } = require('express');
const db = require('../database');
const router = Router();

router.use((req, res, next) => {
    console.log("Request made to houses route");
    next();
});

router.get('/all', async (req, res) => {
    console.log("houses.all request got, and replyed with all the houses");

    const results = await db.promise().query(`SELECT * FROM house`);
    res.send(results[0]);
});


router.post('/', async (req, res) => {
    console.log("POST REQUEST");
    const { adress, numberoffloors, HM_id } = req.body;
    console.log("POST :", adress, numberoffloors, HM_id);
    if (adress && numberoffloors && HM_id) {
        try {
            db.promise().query(`INSERT INTO house(adress, numberoffloors, HM_id)
                VALUES ( '${adress}', '${numberoffloors}', '${HM_id}')`);
            res.status(201).send({ msg: 'Cretated house' });

        } catch (err) {
            console.log(err);
        }
    }
});

router.get('/adresses', async (req, res) => {
    console.log('all adresses request');
    const adresses = await db.promise().query(`SELECT distinct adress from house`);
    res.send(adresses[0]);
});

router.get('/', async (req, res) => {
    console.log("GET REQUEST");
    const house_id = req.body.house_id;
    const results = await db.promise().query(`SELECT * FROM HOUSE WHERE house_id = '${house_id}' `);
    res.send(results[0]).status(201);
});

router.delete('/', async (req, res) => {

    console.log("Delete request houses id: ");
    var house_id = req.body.house_id;
    const deleted_house = await db.promise().query(`SELECT adress FROM house WHERE house_id = '${house_id}' `);
    var results = await db.promise().query(`DELETE FROM HOUSE WHERE house_id = '${house_id}' `);
    var deletedH = deleted_house[0][0].adress + ' deleted';
    res.send({ msg: deletedH });
});

module.exports = router;