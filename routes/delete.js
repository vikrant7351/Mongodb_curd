const express = require('express');
const users = require('../model/collection.js');

const router = express.Router();


router.delete('/', async (req, res) => {
  try {
    const itemId = req.params.id;
    console.log(itemId);

    const deleteItem = await users.findByIdAndDelete({ id: itemId });
    if (!deleteItem) {
      res.status(500).json({ message: 'item not found' });
    }
    res.status(500).json({ message: 'item delete sucessfully' });
  } catch (error) {
    res.status(500).json({ error: 'an error occoured' });
  }

});

module.exports = router;