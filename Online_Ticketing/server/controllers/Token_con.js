import express from 'express';
import mongoose from 'mongoose';
import token from '../models/Token.js';


const router = express.Router();

export const gettokens = async (req, res) => {
    try {
        const rp = await token.find();

        res.status(200).json(rp);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const gettoken = async (req, res) => {
    const { id } = req.params;

    try {
        const tk = await token.findById(id);

        res.status(200).json(tk);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addtoken = async (req, res) => {
    const {issuedDate, validity_period,start_point, end_point,route_no} = req.body;

    const newtoken = new token({issuedDate, validity_period,start_point, end_point,route_no})

    try {
        await newtoken.save();

        res.status(201).json(newtoken );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatetoken = async (req, res) => {
    const { id } = req.params;
    const {issuedDate, validity_period,start_point, end_point,route_no} = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No token with id: ${id}`);

    const updatetoken = {issuedDate, validity_period,start_point, end_point,route_no, _id: id };

    await token.findByIdAndUpdate(id, updatetoken, { new: true });

    res.json(updatetoken);
}

export const deletetoken = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No token with id: ${id}`);

    await token.findByIdAndRemove(id);

    res.json({ message: "Token deleted successfully." });
}



export default router;
