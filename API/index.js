const jwt =require("jsonwebtoken")
const express = require("express");
const fileRoutes = require('./routes/route');
var cors = require('cors')
const app = express();
const cookieParser= require ("cookie-parser")
const dotenv = require('dotenv');
const path = require('path');
const fileupload = require("express-fileupload");
const sessions = require('express-session');

var bodyParser = require('body-parser');
const oneDay = 1000 * 60 * 60 * 24;


require('./database');

app.use(cookieParser());
dotenv.config();

app.use(fileupload())

app.use(cors({ credentials:true, origin:'http://localhost:3000' }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use('/api', fileRoutes.routes);

app.use(sessions({
    secret: "thisismysecrctekeymlesystems",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));

const port = process.env.PORT || 8081;

app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);

})

