const { Router } = require('express');
const { check } = require('express-validator');
const db = require('../database');
const router = Router();

router.use((req, res, next) => {
    console.log("Request made to news route");
    next();
});

router.get('/all', async (req, res) => {
    console.log("news.all request got, and replyed with all the news");

    const results = await db.promise().query(`SELECT * FROM NEWS`);
    res.send(results[0]);
});

router.get('/:house_id', async (req, res) => {
    const house_id = req.params.house_id;
    //console.log(req.params);
    const results = await db.promise().query(`SELECT * from NEWS WHERE house_id = '${house_id}'`);
    //console.log(results[0]);
    res.send(results[0]);
} );

router.get('/', async (req, res) => {
    console.log("GET REQUEST");
    const news_id = req.body.news_id;
    const results = await db.promise().query(`SELECT * FROM NEWS WHERE news_id = '${news_id}' `);
    res.send(results[0]).status(201);
});

router.post('/', (req, res) => {

    const { title, description, label } = req.body;

    console.log("POST REQUEST");
    console.log(title, description, label);
    if (title && description && label) {
        try {
            db.promise().query(`INSERT INTO news(title,description,label)
             VALUES('${title}','${description}','${label}')`);
            res.status(201).send({ msg: 'Cretated news' });
        } catch (err) {
            console.log(err);
        }
    }
});


router.put('/', async (req, res) => {
    console.log("PUT / UPDATE REQUEST");
    res.status(201).send({ msg: 'OK' });
});

router.delete('/', async (req, res, next) => {

    console.log("Delete request to news id: ");
    var news_id = req.body.news_id;
    check('news_id').isNumeric.withMessage("News id must be a number")
        .notEmpty().withMessage("News id canot be empty")
        .isLength({ min: 1 }).withMessage("News Id have to be at least 1 character long ");

    const deleted_news = await db.promise().query(`SELECT title FROM NEWS WHERE news_id = '${user_id}' `);
    var results = await db.promise().query(`DELETE FROM NEWS WHERE news_id = '${news_id}' `);
    console.log(deleted_news.title, "deleted")
    res.send({ msg: 'News deleted' });
});



module.exports = router;