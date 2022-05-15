const { Router } = require('express');
const db = require('../database');
const router = Router();

router.use((req, res, next) => {
    console.log("Request made to financial route");
    next();
});
router.get('/all', async (req, res) => {
    console.log("financial.all request got, and replyed with all the financial tables");

    const results = await db.promise().query(`SELECT * FROM financial   `);
    res.send(results[0]);
});


router.get('/', async (req, res) => {
    console.log("GET REQUEST");
    const financial_id = req.body.financial_id;
    const results = await db.promise().query(`SELECT * FROM financial WHERE financial_id = '${financial_id}' `);
    res.send(results[0]).status(201);
});

router.post('/', async (req, res) => {
    console.log("POST REQUEST");
    const { title, description, plan, fact, nextplan, house_id } = req.body;
    console.log("POST :", title, description, plan, fact, nextplan, house_id);
    if ( title && description && plan && fact && nextplan && house_id) {
        try {
            db.promise().query(`INSERT INTO financial( title, description, plan, fact, nextplan, house_id)
                VALUES ( '${title}', '${description}', '${plan}', '${fact}', '${nextplan}', '${house_id}' )`);
            res.status(201).send({ msg: 'Cretated financial table' });

        } catch (err) {
            console.log(err);
        }
    }
});


router.put('/', async (req, res) => {
    console.log("PUT / UPDATE REQUEST");
});

router.delete('/', async (req, res) => {

    console.log("Delete request financial id: ");
    var financial_id = req.body.financial_id;
    const delted_financial = await db.promise().query(`SELECT title FROM financial WHERE financial_id = '${financial_id}' `);
    var results = await db.promise().query(`DELETE FROM financial WHERE financial_id = '${financial_id}' `);
    //console.log(deleted_house.title, "deleted")
    //res.send({ msg:  'Financial record deleted' });

    var deletedF = delted_financial[0][0].title + ' deleted';
    res.send({ msg: deletedF });
});


module.exports = router;