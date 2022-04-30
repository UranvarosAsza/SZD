const express = require('express');
const usersRoute = require('./routes/users');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.listen(4000);

//app.use(cors);
app.use('/users' , usersRoute);
app.get('/', (req, res)=>{
    console.log("get req from client");

    res.send("Server works at port 4000");
})