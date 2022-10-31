import express from 'express';

import {
    gettopups,
    addtopup,
    gettopup,
    updatetopup,
    deletetopup,
    //login,
    //gettopupsFromGroup
} from '../controllers/topup_con.js';

const router = express.Router();

router.get('/get', gettopups);
router.post('/add', addtopup);
router.get('/:id', gettopup);
router.patch('/:id', updatetopup);
router.delete('/:id', deletetopup);
//router.post('/login', login);
//router.get('/group/:id', gettopupsFromGroup);

export default router;
