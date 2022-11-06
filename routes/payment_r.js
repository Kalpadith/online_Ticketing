import express from 'express';

import {
    getpayments,
    addpayment,
    getpayment,
    updatepayment,
    deletepayment,
    //login,
    //getpaymentsFromGroup
} from '../controllers/payment_con.js';

const router = express.Router();

router.get('/get', getpayments);
router.post('/add', addpayment);
router.get('/:id', getpayment);
router.patch('/:id', updatepayment);
router.delete('/:id', deletepayment);
//router.post('/login', login);
//router.get('/group/:id', getpaymentsFromGroup);

export default router;
