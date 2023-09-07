const express = require('express');
const users = require('../model/collection.js');

const router = express.Router();



// Insert the data "Vikrant" as name and "Chaudhary" as surname
router.post('/', async (req, res) => {
  try {
    const{name,surname} = req.body;

    const newuser = new users({id:5,name: "Vikrant", surname: "Chaudhary" });
    await newuser.save();     // use the .save() method save all data

    res.status(201).json(newuser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to insert person' });
  }
});


module.exports = router ;


