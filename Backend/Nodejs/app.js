const express = require('express');
const mongoose=require('mongoose');
const MongoStore = require('connect-mongo');
const dotenv = require('dotenv');
const morgan = require('morgan');
const session = require('express-session');

dotenv.config({ path: './config.env' });

var app=express();
const PORT = process.env.PORT||3100;

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})


app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine','ejs');
app.use(morgan("dev"));
app.use(session({
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI
    }),
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(express.urlencoded({extended : false}));
app.use(session({
    secret : 'secret',
    resave : true,
    saveUninitialized : true
}));
app.use('/register',require('./register_route'));
app.listen(PORT,console.log(`listening at ${PORT}`));