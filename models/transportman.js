import mongoose from 'mongoose';

const transportmanSchema = mongoose.Schema({
    transportman_id: {
        type: String,
        required: true
    },
    transportman_name: {
        type: String,
        required: true
    },
    transportman_email: {
        type: String,
        required: true
    },
    transportman_password: {
        type: String,
        required: true
    },
    transportman_address: {
        type: String,
        required: true
    },
    transportman_phonenumber: {
        type: Number,
        required: true
    },
    transportman_nic: {
        type: String,
        required: true
    }
})

const transportmans = mongoose.model('transportmans', transportmanSchema);

export default transportmans;