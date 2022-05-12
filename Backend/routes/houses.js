const { Router } = require('express');
const db = require('../database');
const router = Router();

router.use((req, res, next)=> {
    console.log("Request made to houses route");
    next();
});

router.get('/', async (req, res) =>{
    console.log("GET REQUEST");
} );

router.post('/', async (req, res) =>{
    console.log("POST REQUEST");
} );


router.get('/', async (req, res) => {
    console.log("GET REQUEST");
    const house_id = req.body.house_id;
    const results = await db.promise().query(`SELECT * FROM HOUSE WHERE house_id = '${house_id}' `);  
    res.send(results[0]).status(201);
});

router.delete('/', async (req, res) => {

    console.log("Delete request houses id: ");
    var house_id = req.body.house_id;
    const deleted_house = await db.promise().query(`SELECT adress FROM NEWS WHERE house_id = '${house_id}' `);
    var results = await db.promise().query(`DELETE FROM HOUSE WHERE house_id = '${house_id}' `); 
    console.log(deleted_house.adress, "deleted")
    res.send({ msg:  'House deleted' });
});


module.exports = router;