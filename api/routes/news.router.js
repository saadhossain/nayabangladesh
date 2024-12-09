const express = require('express');
const News = require('../models/news.model');

const router = express.Router();

//Get all the news
router.get('/', async (req, res) => {
    const result = await News.find({}).sort({ createdAt: -1 });
    res.status(200).send(result);
});

//Save new News to the Database
router.post('/', async (req, res) => {
    const payload = req.body;
    //Validation checks
    if (!payload || (typeof payload === 'object' && Object.keys(payload).length === 0)) {
        res.status(400).send('Bad Request! Please provide a valid JSON input.');
        return;
    }
    //Save the new News to the Database
    try {
        const newNews = new News(payload);
        const result = await newNews.save();
        res.status(200).send(result);
    } catch (error) {
        console.error('Error inserting category:', error);
        res.status(500).send(error);
    }
});
//Get the single news by id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const result = await News.findById(id);
    res.status(200).send(result);
});

//Update the Single news
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    const result = await News.findByIdAndUpdate(id, payload);

    if (result.updatedAt > result.createdAt) {
        return res.status(200).send({ message: "Updated successfully" });
    }
});

//Delete the Single News
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await News.findByIdAndDelete(id);
        res.status(200).send({ message: "Deleted successfully", result });
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;