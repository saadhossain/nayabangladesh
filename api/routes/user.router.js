const express = require('express');
const Users = require('../models/user.model');
const bcrypt = require('bcrypt');

const router = express.Router();

//Get all user
router.get('/', async (req, res) => {
    const result = await Users.find({}).sort({ createdAt: -1 });
    res.status(200).send(result);
});

//Save new user to the Database
router.post('/', async (req, res) => {
    const payload = req.body;

    const isExist = await Users.findOne({ email: payload.email });
    if (isExist) {
        return res.send({ status: false, message: 'User already exist, Please login to your account.' });
    }

    //Save the new User to the Database
    try {
        const hashPassword = await bcrypt.hash(payload.password, 10);
        const user = new Users({ ...payload, password: hashPassword });
        const result = await user.save();
        res.status(200).send(result);
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).send(error);
    }
});
//Get a Single user by Id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const result = await Users.findById(id);
    res.status(200).send(result);
});

//Get a Single user by Email
router.get('/single/:email', async (req, res) => {
    const { email } = req.params;
    try {
        const result = await Users.findOne({ email: email });
        if (!result) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});


//Update a single user
router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    let hashPassword;
    try {
        if (payload.password) {
            const makehash = await bcrypt.hash(payload.password, 10);
            hashPassword = makehash;
        }
        //Update the user
        const result = await Users.findByIdAndUpdate({ _id: userId }, { $set: { ...payload, password: hashPassword } });
        //Check if the user updated
        if (result.updatedAt > result.createdAt) {
            return res.status(200).send({ message: "Updated successfully" });
        }
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).send(error);
    }
});
//Delete a single user
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Users.findByIdAndDelete(id);
        res.status(200).send({ message: "Deleted successfully", result });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(400).send(error.message);
    }
});

module.exports = router;