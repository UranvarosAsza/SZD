const { Router } = require('express');
const db = require('../database');
const router = Router();

router.use((req, res, next) => {
    console.log("Request made to res meeting route");
    next();
});
router.get('/all', async (req, res) => {
    console.log("residental_meet.all request got, and replyed with all the res meets");

    const results = await db.promise().query(`SELECT * FROM residental_meeting`);
    res.send(results[0]);

});

router.get('/:house_id', async (req, res) => {
    const house_id = req.params.house_id;
    //console.log(req.params);
    const results = await db.promise().query(`SELECT * from residental_meeting WHERE house_id = '${house_id}'`);
    //console.log(results[0]);
    res.send(results[0]);
} );

router.get('/', async (req, res) => {
    console.log("GET REQUEST");
    const resmeet_id = req.body.resmeet_id;
    const results = await db.promise().query(`SELECT * FROM residental_meeting WHERE resmeet_id = '${resmeet_id}' `);
    res.send(results[0]).status(201);
});
router.post('/', async (req, res) => {
    console.log("POST REQUEST");
    const { title, description, house_id } = req.body;
    console.log("POST :", title, description,  house_id);
    if (title && description && house_id) {
        try {
            db.promise().query(`INSERT INTO residental_meeting(title, description, house_id)
                VALUES ( '${title}', '${description}', '${house_id}' )`);
            res.status(201).send({ msg: 'Cretated Residental meeting' });

        } catch (err) {
            console.log(err);
        }
    }
});


router.put('/', async (req, res) => {
    console.log("PUT / UPDATE REQUEST");
});

router.delete('/', async (req, res) => {

    var resmeet_id = req.body.resmeet_id;
    const deleted_residental_meeting = await db.promise().query(`SELECT title FROM residental_meeting WHERE resmeet_id = '${resmeet_id}' `);
    var results = await db.promise().query(`DELETE FROM residental_meeting WHERE resmeet_id = '${resmeet_id}' `);

    var deletedRM = deleted_residental_meeting[0][0].title + ' deleted';
    res.send({ msg: deletedRM });
});

module.exports = router;