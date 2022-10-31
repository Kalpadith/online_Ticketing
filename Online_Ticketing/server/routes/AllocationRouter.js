import express from 'express';

import { getAllocations, getAllocationById, addAllocation, updateAllocation, deleteAllocation } from '../controllers/AllocationsController.js';

const router = express.Router();

router.get('/get', getAllocations);
router.get('/get/:id', getAllocationById);
router.post('/add', addAllocation);
router.patch('/update/:id', updateAllocation);
router.delete('/delete/:id', deleteAllocation);


export default router;