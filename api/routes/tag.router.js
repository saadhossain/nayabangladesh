const express = require('express');
const Tags = require('../models/tag.model');

const router = express.Router();

//Get all the Tags
router.get('/', async (req, res) => {
    const result = await Tags.find({}).sort({ createdAt: -1 });
    res.status(200).send(result);
});

//Save new Tag to the Database
router.post('/', async (req, res) => {
    const payload = req.body;

    //Validation checks
    if (!payload || (typeof payload === 'object' && Object.keys(payload).length === 0)) {
        res.status(400).send('Bad Request! Please provide a valid JSON input.');
        return;
    }
    //Save the new tag to the Database
    try {
        const newTag = new Tags(payload);
        const result = await newTag.save();
        res.status(200).send(result);
    } catch (error) {
        console.error('Error inserting category:', error);
        res.status(500).send(error);
    }
});

//Get the Single tag by id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const result = await Tags.findById(id);
    res.status(200).send(result);
});

//Update the single tag
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    const result = await Tags.findByIdAndUpdate(id, payload);

    if (result.updatedAt > result.createdAt) {
        return res.status(200).send({ message: "Updated successfully" });
    }
});

//Delete the Single tag
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Tags.findByIdAndDelete(id);
        res.status(200).send({ message: "Deleted successfully", result });
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;