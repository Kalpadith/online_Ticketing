import express from "express";
import mongoose from "mongoose";
import Payment from "../models/payment.js";

const router = express.Router();

export const getpayments = async (req, res)  => {
    try{
        const payment = await Payment.find();
        res.status(200).json(payment);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}

export const getpayment = async (req,res) => {
    const { id } = req.params;
    try{
        const payment = await Payment.findById(id);

        res.status(200).json(payment);
    }catch(error){
        res.status(404).json({message: error.message});
        
    }
}

export const addpayment = async (req,res) => {
    const {payment_id, payment_date, payment_amount} = req.body;
    const newpayment = new Payment ({payment_id, payment_date, payment_amount})
    try{
        await newpayment.save();
        res.status(200).json(newpayment);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const updatepayment = async (req,res) => {
    const { id } = req.params;
    const {payment_id, payment_date, payment_amount} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No payment with id: ${id}`);

    const updatepayment = {payment_id, payment_date, payment_amount, _id: id};
    await Payment.findByIdAndUpdate(id, updatepayment, {new: true});
    res.json(updatepayment);

}

export const deletepayment = async (req, res) =>{
    const {id} =req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No payment with id:${id}`);
    
    await Payment.findByIdAndRemove(id);

    res.json({message: "Payment deleted successfully."});
}

export default router;

