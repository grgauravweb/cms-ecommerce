const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const route = require('./routes/route.js');
const app = express();
require('dotenv').config();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect(process.env.mongo_uri)

.then( () => console.log("Mongo is connected"))

.catch(err => console.log(err))

app.use('/', route); 


app.listen(process.env.PORT || 9999, function () {

    console.log(`CMS Server running on port ` + (process.env.PORT || 9999 ));
    
})