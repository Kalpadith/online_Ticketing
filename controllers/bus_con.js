import express from 'express';
import mongoose from 'mongoose';


import bus from '../models/bus.js';

const router = express.Router();

export const getbuses = async (req, res) => { 
    try {
        const Bus = await bus.find();
             
        res.status(200).json(Bus)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



export const getbus = async (req, res) => { 
    const { id } = req.params;

    try {
        const Bus = await bus.findById(id);
        
        res.status(200).json(Bus);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const addbus = async (req, res) => {
    const { busNumber, startPoint, endPoint, driverName, conducterName} = req.body;

    const newb = new bus({busNumber, startPoint, endPoint, driverName, conducterName })

    try {
        await newb.save();

        res.status(201).json(newb );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatebus = async (req, res) => {
    const { id } = req.params;
    const {busNumber, startPoint, endPoint, driverName, conducterName} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No busses with id: ${id}`);

    const updatebus = {busNumber, startPoint, endPoint, driverName, conducterName, _id: id };

    await bus.findByIdAndUpdate(id, updatebus, { new: true });

    res.json(updatebus);
}

export const deletebus = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No busses with id: ${id}`);

    await bus.findByIdAndRemove(id);

    res.json({ message: "Bus deleted successfully." });
}



export default router;