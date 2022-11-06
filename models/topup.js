import mongoose from 'mongoose';

const topupSchema = mongoose.Schema({
    topup_id: {
        type: String,
        required: true
    },
    topup_amount: {
        type: Number,
        required: true
    },
    created_id: {
        type: String,
        required: true
    },
    created_time: {
        type: String,
        required: true
    }
})

const topups = mongoose.model('topups', topupSchema);

export default topups;