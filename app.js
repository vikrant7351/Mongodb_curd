const express = require('express');
const bodyparser = require('body-parser');
const connect = require('./model/database');
const itemroutes = require('./routes/userroute');
const deleteItems = require('./routes/delete');
const readItems = require('./routes/read');
// const updateitem = require('./routes/update')


const app = express();

app.use(bodyparser.json());


app.use('/userroute',itemroutes);
app.use('/read',readItems);
app.use('/delete/:id',deleteItems);
// app.use('./update/:id',updateitem);


let port = 4000;
app.listen(port,()=>{
    console.log(`this port running on ${port}`);
});