import express from 'express';

import { getInspectors, getInspectorById, addInspector, updateInspector, deleteInspector } from '../controllers/InspectorController.js';

const router = express.Router();

router.get('/get', getInspectors);
router.get('/get/:id', getInspectorById);
router.post('/add', addInspector);
router.patch('/update/:id', updateInspector);
router.delete('/delete/:id', deleteInspector);


export default router;
