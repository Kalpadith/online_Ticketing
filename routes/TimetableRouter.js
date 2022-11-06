import express from 'express';
import {getTimetables, getTimetableById, setTimetable, updateTimetables , deleteTimetables} from "../controllers/TimetablesController.js";

const router = express.Router();
router.get('/get',getTimetables);
router.get('/get/:id', getTimetableById );
router.post('/add', setTimetable);
router.patch('/update/:id', updateTimetables );
router.delete('/delete/:id', deleteTimetables);


export default router;