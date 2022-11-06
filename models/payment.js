import mongoose from 'mongoose';

const paymentSchema = mongoose.Schema({
    payment_id: {
        type: String
    },
    payment_date: {
        type: String,
        required: true
    },
    payment_amount: {
        type: Number,
        required: true
    }
})

const payments = mongoose.model('payments', paymentSchema);

export default payments;
