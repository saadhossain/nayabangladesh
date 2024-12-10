const express = require('express');
const News = require('../models/news.model');

const router = express.Router();

//Get all the news
router.get('/', async (req, res) => {
    const query = {};
    try {
        const result = await News.find(query).sort({ createdAt: -1 });
        res.status(200).send(result);
    } catch (error) {
        console.error('Error inserting category:', error);
        res.status(500).send(error);
    }
});

//Get news by category
router.get('/category', async (req, res) => {
    const { cat, page, limit } = req.query;

    try {
        const news = await News.find({ 'category.slug': cat })
            .sort({ createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(Number(limit));

        const total = await News.countDocuments({ 'category.slug': cat });

        res.status(200).send({
            news,
            total,
        });
    } catch (error) {
        console.error('Error fetching news by category:', error);
        res.status(500).send(error);
    }
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
// Update a single news item partially
router.patch('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const result = await News.findByIdAndUpdate(
            id,
            { $inc: { readingCount: 1 } },
            { new: true }
        );
        res.status(200).send({ message: 'Updated successfully', data: result });
    } catch (error) {
        res.status(500).send(error.message);
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