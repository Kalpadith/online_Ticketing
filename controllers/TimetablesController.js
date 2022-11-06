import express from 'express';
import mongoose from 'mongoose';

import TimeTables from "../models/Timetable.js";

const router = express.Router();

export const getTimetables = async (req, res) => {
    try {
        res.status(200).json(await TimeTables.find());
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getTimetableById = async (req, res) => {
    const { id } = req.params;
    try {
        res.status(200).json(await TimeTables.findById(id));
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const setTimetable = async (req, res) => {
    const { date, time} = req.body;
    const newTimetable = new TimeTables(
        {

            date,
            time
        });

    try {
        await newTimetable.save();

        res.status(201).json(newTimetable);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateTimetables = async (req, res) => {
    const { id } = req.params;
    const {  date,time } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No timetables with id: ${id}`);

    const updateTimetable = {  date,time,  _id: id };

    await TimeTables.findByIdAndUpdate(id, updateTimetable, { new: true });

    res.json(updateTimetable);
}

export const deleteTimetables = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No timetables with id: ${id}`);

    await TimeTables.findByIdAndRemove(id);

    res.json({ message: "Timetable deleted successfully." });
}



export default router;