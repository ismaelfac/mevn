const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

require('../models/Task');

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

router.post('/', async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.json({
        status: 200
    });
});

router.put('/:id', async(req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 201
    });
});

module.exports = router;