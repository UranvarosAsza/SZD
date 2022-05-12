const { Router } = require('express');
const db = require('../database');
const router = Router();

router.use((req, res, next)=> {
    console.log("Request made to financial route");
    next();
});

router.get('/', async (req, res) => {
    console.log("GET REQUEST");
    const financial_id= req.body.financial_id;
    const results = await db.promise().query(`SELECT * FROM financial WHERE financial_id = '${financial_id}' `);  
    res.send(results[0]).status(201);
});

router.post('/', async (req, res) =>{
    console.log("POST REQUEST");
} );


router.put('/', async (req, res) =>{
    console.log("PUT / UPDATE REQUEST");
} );

router.delete('/', async (req, res) => {

    console.log("Delete request financial id: ");
    var financial_id = req.body.financial_id;
    const delted_financial = await db.promise().query(`SELECT title FROM financial WHERE financial_id = '${financial_id}' `);
    var results = await db.promise().query(`DELETE FROM financial WHERE financial_id = '${financial_id}' `); 
    console.log(deleted_house.title, "deleted")
    res.send({ msg:  'Financial record deleted' });
});


module.exports = router;