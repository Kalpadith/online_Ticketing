import express from 'express';
import mongoose from 'mongoose';
import userAcc from '../models/user_account.js';

import Users from '../models/user_account.js';


const router = express.Router();

export const login = async (req, res) => {
    try {

        const {email, password} = req.body;
        const user = await Users.findOne({user_email: email});

        if (user == null) throw new Error('invalid email');

        if (user.user_password === password) {
            user.user_password = '';
            res.status(200).json(user);
            return;
        }
        res.status(401).json({message: 'password is incorrect'});

    } catch (error) {
        console.log('ERROR OCCURRED WHILE LOGGING')
        console.error(error);
        res.status(404).json({message: error.message});
    }
}

export const getusers = async (req, res) => {
    try {
        const user = await userAcc.find();

        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getuser = async (req, res) => {
    const {id} = req.params;

    try {
        const user = await userAcc.findById(id);

        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const adduser = async (req, res) => {
    const {user_name, user_type, user_address,user_Email,user_password,user_passportNo,user_phoneNo} = req.body;

    const newusers = new userAcc(req.body)

    try {
        await newusers.save();

        res.status(201).json(newusers);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}


export const updateuser = async (req, res) => {
    const {id} = req.params;
    const {user_name, user_type, user_address,user_Email,user_password,user_passportNo,user_phoneNo} = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updateduser = {user_name, user_type, user_address,user_Email,user_password,user_passportNo,user_phoneNo, _id: id};

    await userAcc.findByIdAndUpdate(id, updateuser, {new: true});

    res.json(updateduser);
}

export const deleteuser = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Users.findByIdAndRemove(id);

    res.json({message: "User Removed successfully."});
}

export const searchEmail = async(req, res) => {
    const {user_Email} = req.params;
    try{
        const searchingEmail = await userAcc.find({"user_Email":user_Email});
        res.status(200).json(searchingEmail);
    }catch(error){
        res.status(404).json({message: error.message}); 
    }
}
// export const getUsersFromGroup = async (req, res) => {
//     const {id} = req.params;
//     try {
//         const result = await Users.find({user_groups: id}).select('_id user_email user_Fname user_Lname user_designation user_avatar');
//         res.status(200).json(result);
//     } catch (error) {
//         res.status(404).json({message: error.message});
//     }
// }



export default router;
