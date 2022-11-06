import express from 'express';

import {
    getusers,
    adduser,
    getuser,
    updateuser,
    deleteuser,
    login
    // getUsersFromGroup
} from '../controllers/user_account_con.js';

const router = express.Router();

router.get('/getuser', getusers);
router.post('/adduser', adduser);
router.get('/:id', getuser);
router.patch('/:id', updateuser);
router.delete('/:id', deleteuser);
router.post('/login', login);
router.get('/search', searchEmail);

//router.get('/group/:id', getUsersFromGroup);



export default router;
