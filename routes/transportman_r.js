import express from 'express';

import {
    gettransportmans,
    addtransportman,
    gettransportman,
    updatetransportman,
    deletetransportman,
    //login,
    //gettransportmansFromGroup
} from '../controllers/transportman_con.js';

const router = express.Router();

router.get('/get', gettransportmans);
router.post('/add', addtransportman);
router.get('/:id', gettransportman);
router.patch('/:id', updatetransportman);
router.delete('/:id', deletetransportman);
//router.post('/login', login);
//router.get('/group/:id', gettransportmansFromGroup);

export default router;
