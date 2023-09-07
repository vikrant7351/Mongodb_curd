const express = require('express');
const Items = require('./models');

const router = express.Router();

router.post('/items', async (req, res) => {
    try {
        // console.log(req.body);
        const newItem = new Items(req.body);
        await newItem.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/items', async (req, res) => {
    try {
        const items = await Items.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


router.post('/itemsGet', async (req, res) => {
    const ite = req.body.id;
    try {
        console.log(ite)

        const items = await Items.findByIdAndUpdate(
            ite, { name: req.body.name, surname: req.body.surname },
            { new: true }
        );
        if (items) {
            res.json(items);
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete('/items/:id', async (req, res) => {
    try {
        const ite = req.params.id;
        console.log(ite);
        const items = await Items.findByIdAndDelete(ite);
        if (items) {
            res.json({ message: 'Item deleted' });
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
