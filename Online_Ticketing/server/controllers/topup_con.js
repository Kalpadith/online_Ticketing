import express from "express";
import mongoose from "mongoose";
import TopUp from "../models/topup.js";

const router = express.Router();

export const gettopups = async (req, res)  => {
    try{
        const topup = await TopUp.find();
        res.status(200).json(topup);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}

export const gettopup = async (req,res) => {
    const { id } = req.params;
    try{
        const topup = await TopUp.findById(id);

        res.status(200).json(topup);
    }catch(error){
        res.status(404).json({message: error.message});
        
    }
}

export const addtopup = async (req,res) => {
    const {topup_id, topup_amount, created_id, created_time} = req.body;
    const newtopup = new TopUp ({topup_id, topup_amount, created_id, created_time})
    try{
        await newtopup.save();
        res.status(200).json(newtopup);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const updatetopup = async (req,res) => {
    const { id } = req.params;
    const {topup_id, topup_amount, created_id, created_time} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No topup with id: ${id}`);

    const updatetopup = {topup_id, topup_amount, created_id, created_time, _id: id};
    await TopUp.findByIdAndUpdate(id, updatetopup, {new: true});
    res.json(updatetopup);

}

export const deletetopup = async (req, res) =>{
    const {id} =req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No topup with id:${id}`);
    
    await TopUp.findByIdAndRemove(id);

    res.json({message: "Topup deleted successfully."});
}

export default router;

