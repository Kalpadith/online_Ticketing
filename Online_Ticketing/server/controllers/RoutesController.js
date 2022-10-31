import express from "express";
import mongoose from "mongoose";
import Routes from "../models/Routes.js";

const router = express.Router();

export const getRoutes = async (req, res)  => {
    try{
        const routes = await Routes.find();
        res.status(200).json(routes);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}

export const getRoutesById = async (req,res) => {
    const { id } = req.params;
    try{
        const routes = await Routes.findById(id);

        res.status(200).json(routes);
    }catch(error){
        res.status(404).json({message: error.message});
        
    }
}

export const addRoutes = async (req,res) => {
    const {routeId, startPoint, endPoint,distance} = req.body;
    const newRoutes = new Routes ({routeId, startPoint, endPoint,distance})
    try{
        await newRoutes.save();
        res.status(200).json(newRoutes);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const updateRoutes = async (req,res) => {
    const { id } = req.params;
    const {routeId, startPoint, endPoint,distance} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No routes scheme with id: ${id}`);

    const updateRoutes = {routeId, startPoint, endPoint,distance, _id: id};
    await Routes.findById(id, updateRoutes, {new: true});
    res.json(updateRoutes);

}

export const deleteRoutes = async (req, res) =>{
    const {id} =req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No routes scheme with id:${id}`);
    
    await Routes.findByIdAndRemove(id);

    res.json({message: "Route deleted successfully."});
}

export default router;

