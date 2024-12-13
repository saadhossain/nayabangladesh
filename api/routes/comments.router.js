const express = require('express');
const Comments = require('../models/comments.model');
const crypto = require('crypto');

const router = express.Router();

//Get all the Comments
router.get('/', async (req, res) => {
    const query = {};
    try {
        const result = await Comments.find(query).sort({ createdAt: -1 });
        res.status(200).send(result);
    } catch (error) {
        console.error('Error inserting category:', error);
        res.status(500).send(error);
    }
});

//Get all comments for a specific news
router.get('/news/:newsId', async (req, res) => {
    const { newsId } = req.params;
    const query = { newsId: newsId };
    try {
        const result = await Comments.find(query).sort({ createdAt: -1 });
        res.status(200).send(result);
    } catch (error) {
        console.error('Error inserting category:', error);
        res.status(500).send(error);
    }
});

//Save new Comment to the Database
router.post('/', async (req, res) => {
    const payload = req.body;
    //Validation checks
    if (!payload || (typeof payload === 'object' && Object.keys(payload).length === 0)) {
        res.status(400).send('Bad Request! Please provide a valid JSON input.');
        return;
    }
    const generateImage = (name) => {
        const hash = crypto.createHash('md5').update(name.toLowerCase()).digest('hex');
        return `https://www.gravatar.com/avatar/${hash}?d=identicon`;
    };
    //Save the new News to the Database
    try {
        const newComment = new Comments({ ...payload, image: generateImage(payload.readerName) });
        const result = await newComment.save();
        res.status(200).send(result);
    } catch (error) {
        console.error('Error inserting Comment:', error);
        res.status(500).send(error);
    }
});
//Get the single comment by id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const result = await News.findById(id);
    res.status(200).send(result);
});

//Update the Single comment
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    const result = await News.findByIdAndUpdate(id, payload);

    if (result.updatedAt > result.createdAt) {
        return res.status(200).send({ message: "Updated successfully" });
    }
});

// Update a single comment item partially
router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    try {
        const result = await News.findByIdAndUpdate(id, updateData, { new: true });
        res.status(200).send({ message: 'Updated successfully', data: result });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});


//Delete the Single Comment
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