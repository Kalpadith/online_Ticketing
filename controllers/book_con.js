import express from 'express';
import mongoose from 'mongoose';


import book from '../models/book.js';

const router = express.Router();

export const getbooks = async (req, res) => { 
    try {
        const Book = await book.find();
       // console.log(Presentation);        
        res.status(200).json(Book)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



export const getbook = async (req, res) => { 
    const { id } = req.params;

    try {
        const Book = await book.findById(id);
        
        res.status(200).json(Book);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const addbook = async (req, res) => {
    const { custName, noOfSeats, date, time, startPoint, endPoint} = req.body;

    const newp = new book({custName, noOfSeats, date, time, startPoint, endPoint })

    try {
        await newp.save();

        res.status(201).json(newp );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatebook = async (req, res) => {
    const { id } = req.params;
    const {custName, noOfSeats, date, time, startPoint, endPoint} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No booking with id: ${id}`);

    const updatebook = {custName, noOfSeats, date, time, startPoint, endPoint, _id: id };

    await book.findByIdAndUpdate(id, updatebook, { new: true });

    res.json(updatebook);
}

export const deletebook = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No booking with id: ${id}`);

    await book.findByIdAndRemove(id);

    res.json({ message: "Booking canceled successfully." });
}



export default router;