import express from 'express';

import { getbooks, addbook, getbook, updatebook, deletebook } from '../controllers/book_con.js';

const router = express.Router();

router.get('/getbk', getbooks);
router.post('/addbk', addbook);
router.get('/:id', getbook);
router.patch('/:id', updatebook);
router.delete('/:id', deletebook);


export default router;