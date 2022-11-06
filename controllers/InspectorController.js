import express from 'express';
import mongoose from 'mongoose';
import Inspector from '../models/Inspector.js';

const router = express.Router();

export const getInspectors = async (req, res) => {
    try {
        const inspector = await Inspector.find();

        res.status(200).json(inspector);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getInspectorById = async (req, res) => {
    const { id } = req.params;

    try {
        const inspector = await Inspector.findById(id);

        res.status(200).json(inspector);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addInspector = async (req, res) => {
    const { inspectorId, BusId, inspectorName } = req.body;

    const newInspectors = new Inspector({inspectorId, BusId, inspectorName})

    try {
        await newInspectors.save();

        res.status(200).json(newInspectors);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateInspector = async (req, res) => {
    const { id } = req.params;
    const {inspectorId, BusId, inspectorName} = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No inspector with id: ${id}`);

    const updateInspector = {inspectorId, BusId, inspectorName, _id: id };

    await Inspector.findByIdAndUpdate(id, updateInspector, { new: true });

    res.json(updateInspector);
}

export const deleteInspector = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No inspector with id: ${id}`);

    await Inspector.findByIdAndRemove(id);

    res.json({ message: "Bus inspector deleted successfully." });
}



export default router;
