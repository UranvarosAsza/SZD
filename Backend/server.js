const express = require('express');
const usersRoute = require('./routes/users');
const app = express();

//auth0:
const {auth} = require('express-openid-connect');
//user-profile
const { requiresAuth } = require('express-openid-connect');

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'a long, randomly-generated string stored in env',
    baseURL: 'http://localhost:4000',
    clientID: 'f3DozEF6KcCinklsRHkcJKG3cPzhVZtB',
    issuerBaseURL: 'https://dev-iskwh67q.eu.auth0.com'
};
app.use(auth(config));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.listen(4000);


app.use('/users' , usersRoute);

app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
});

app.get('/', (req, res)=>{
    console.log("get req from client");

    res.send("Server works at port 4000");
})