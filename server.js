const express = require('express');
// import {express} from 'express';
const connect = require('./model/database');
const bodyParser = require('body-parser');

const routes = require('./routing');


const app = express();
const port = 4000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));       // both are same work
// app.use(bodyParser.urlencoded({extended:true}))



app.use('/routing',routes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  