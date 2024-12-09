const express = require('express');
const Categories = require('../models/category.model');

const router = express.Router();

//Get all the Category
router.get('/', async (req, res) => {
    const result = await Categories.find({}).sort({ createdAt: -1 });
    res.status(200).send(result);
});

//Save new category to the Database
router.post('/', async (req, res) => {
    const payload = req.body;

    //Validation checks
    if (!payload || (typeof payload === 'object' && Object.keys(payload).length === 0)) {
        res.status(400).send('Bad Request! Please provide a valid JSON input.');
        return;
    }
    //Save the new Category to the Database
    try {
        const newCat = new Categories(payload);
        const result = await newCat.save();
        res.status(200).send(result);
    } catch (error) {
        console.error('Error inserting category:', error);
        res.status(500).send(error);
    }
});

//Get the single category by id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const result = await Categories.findById(id);
    res.status(200).send(result);
});

//Update single category by Id
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    const result = await Categories.findByIdAndUpdate(id, payload);

    if (result.updatedAt > result.createdAt) {
        return res.status(200).send({ message: "Updated successfully" });
    }
});

//Delete single category
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Categories.findByIdAndDelete(id);
        res.status(200).send({ message: "Deleted successfully", result });
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;