const express = require('express');
const users = require('../model/collection.js');

const router = express.Router();


router.get('/', async (req, res) => {
    try {
      const people = await users.find(); // Use the .find() method to retrieve all documents
      res.status(200).json(people);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve data' });
    }
  });
  
  
  
  
  module.exports = router;