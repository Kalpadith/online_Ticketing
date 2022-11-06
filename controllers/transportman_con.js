import express from "express";
import mongoose from "mongoose";
import TransportMan from "../models/transportman.js";

const router = express.Router();

export const gettransportmans = async (req, res)  => {
    try{
        const transportman = await TransportMan.find();
        res.status(200).json(transportman);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}

export const gettransportman = async (req,res) => {
    const { id } = req.params;
    try{
        const transportman = await TransportMan.findById(id);

        res.status(200).json(transportman);
    }catch(error){
        res.status(404).json({message: error.message});
        
    }
}

export const addtransportman = async (req,res) => {
    const {transportman_id, transportman_name, transportman_email, transportman_password, transportman_address, transportman_phonenumber, transportman_nic} = req.body;
    const newtransportman = new TransportMan ({transportman_id, transportman_name, transportman_email, transportman_password, transportman_address, transportman_phonenumber, transportman_nic})
    try{
        await newtransportman.save();
        res.status(200).json(newtransportman);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const updatetransportman = async (req,res) => {
    const { id } = req.params;
    const {transportman_id, transportman_name, transportman_email, transportman_password, transportman_address, transportman_phonenumber, transportman_nic} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Transport Manager with id: ${id}`);

    const updatetransportman = {transportman_id, transportman_name, transportman_email, transportman_password, transportman_address, transportman_phonenumber, transportman_nic, _id: id};
    await TransportMan.findByIdAndUpdate(id, updatetransportman, {new: true});
    res.json(updatetransportman);

}

export const deletetransportman = async (req, res) =>{
    const {id} =req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Transport Manager with id:${id}`);
    
    await TransportMan.findByIdAndRemove(id);

    res.json({message: "Transport Manager deleted successfully."});
}

export default router;

