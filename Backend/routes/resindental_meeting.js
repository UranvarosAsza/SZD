const { Router } = require('express');
const db = require('../database');
const router = Router();

router.use((req, res, next)=> {
    console.log("Request made to res meeting route");
    next();
});
router.get('/', async (req, res) => {
    console.log("GET REQUEST");
    const resmeet_id = req.body.resmeet_id;
    const results = await db.promise().query(`SELECT * FROM residental_meeting WHERE resmeet_id = '${resmeet_id}' `);  
    res.send(results[0]).status(201);
});
router.post('/', async (req, res) =>{
    console.log("POST REQUEST");
} );


router.put('/', async (req, res) =>{
    console.log("PUT / UPDATE REQUEST");
} );

router.delete('/', async (req, res) => {

    console.log("Delete request to news id: ");
    var resmeet_id = req.body.resmeet_id;
    const deleted_residental_meeting = await db.promise().query(`SELECT title FROM residental_meeting WHERE resmeet_id = '${resmeet_id}' `);
    var results = await db.promise().query(`DELETE FROM residental_meeting WHERE resmeet_id = '${resmeet_id}' `); 
    console.log(deleted_residental_meeting.title, "deleted")
    res.send({ msg:  'Residental_meeting deleted' });
});



module.exports = router;