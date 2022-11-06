import express from 'express';

import {getRoutes, getRoutesById, addRoutes, updateRoutes, deleteRoutes } from '../controllers/RoutesController.js';

const router = express.Router();

router.get('/get', getRoutes);
router.get('/get/:id', getRoutesById);
router.post('/add', addRoutes);
router.patch('/update/:id', updateRoutes);
router.delete('/delete/:id', deleteRoutes);

export default router;