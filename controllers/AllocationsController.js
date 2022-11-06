import express from 'express';
import mongoose from 'mongoose';


import Allocations from '../models/Allocations.js';

const router = express.Router();

export const getAllocations = async (req, res) => { 
    try {
        const Allocation = await Allocations.find();     
        res.status(200).json(Allocation)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



export const getAllocationById = async (req, res) => { 
    const { id } = req.params;

    try {
        const Allocation = await Allocations.findById(id);
        
        res.status(200).json(Allocation);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const addAllocation = async (req, res) => {
    const { allocatedDate, allocatedTime, busId, timetableId } = req.body;

    const newAllocation = new Allocations({allocatedDate, allocatedTime, busId, timetableId })

    try {
        await newAllocation.save();

        res.status(201).json(newAllocation);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateAllocation = async (req, res) => {
    const { id } = req.params;
    const { allocatedDate, allocatedTime, busId, timetableId } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No allocations with id: ${id}`);

    const updateAllocation = {allocatedDate, allocatedTime, busId, timetableId, _id: id };

    await Allocations.findByIdAndUpdate(id, updateAllocation, { new: true });

    res.json(updateAllocation);
}

export const deleteAllocation = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No allocations with id: ${id}`);

    await Allocations.findByIdAndRemove(id);

    res.json({ message: "Allocation deleted successfully." });
}



export default router;