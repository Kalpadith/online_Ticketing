import mongoose from 'mongoose';

const timetableSchema = mongoose.Schema({
    date: {
        type:String,
        required: true
    },
    time: {
        type:String,
        required: true
    }
})

const TimeTables = mongoose.model('Timetables', timetableSchema);

export default TimeTables;