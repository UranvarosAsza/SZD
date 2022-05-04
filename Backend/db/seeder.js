//basic seeder for the database
const mysql = require('mysql2');
const fs = require('fs');

require('dotenv').config();

const seedQuery = fs.readFileSync("db/seed.sql",{
    encoding: "utf-8"
});

//.env inports for connecting to db
const connection= mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORT,
    user:   process.env.USER,   
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    multipleStatements: true,
})

connection.connect();

console.log('Seeding.... ');

connection.query(seedQuery, err =>{
    if(err){

        throw err;
    }
})

console.log("MySQL db Seeding ended.");
connection.end();