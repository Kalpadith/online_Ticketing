import express from 'express';

import { getbuses, addbus, getbus, updatebus, deletebus } from '../controllers/bus_con.js';

const router = express.Router();

router.get('/getb', getbuses);
router.post('/addb', addbus);
router.get('/:id', getbus);
router.patch('/:id', updatebus);
router.delete('/:id', deletebus);


export default router;