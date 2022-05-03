//basic seeder for the database in the future conatining SQL commands to fill the db
const mysql = require('mysql2');
const fs = require('fs');
//const Connection = require('mysql2/typings/mysql/lib/Connection');
//const bcrypt = require('bcryptjs');

require('dotenv').config();

const seedQuery = fs.readFileSync("db/seed.sql",{
    encoding: "utf-8"
});


const connection= mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORT,
    user:   process.env.USER,   
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    multipleStatements: true,
})

connection.connect();


//users table
console.log('Seeding.... ');

connection.query(seedQuery, err =>{
    if(err){

        throw err;
    }
})

console.log("MySQL db Seeding ended.");
connection.end();
/*

INSERT INTO users (username, password) VALUES ('Adam', '1111');
INSERT INTO users (username, password) VALUES ('Eve', '2222');
INSERT INTO users (username, password) VALUES ('Lucifer', '3333');
INSERT INTO users (username, password) VALUES ('God', '4444');
INSERT INTO users (username, password) VALUES ('Wasabi', '5555');
*/