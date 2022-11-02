import express from 'express';

import { gettokens, gettoken, addtoken, updatetoken, deletetoken } from '../controllers/Token_con.js';

const router = express.Router();

router.get('/token', gettokens);
router.post('/addtoken', addtoken);
router.get('/:id', gettoken);
router.patch('/:id', updatetoken);
router.delete('/:id', deletetoken);


export default router;
