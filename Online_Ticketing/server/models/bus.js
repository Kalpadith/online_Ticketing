import mongoose from 'mongoose';
const busSchema =mongoose.Schema({
    busNumber: {
        type: String,
        required: true
    },
    startPoint: {
        type: String,
        required: true   
    },
    endPoint: {
        type: String,
        required: true   
    },
    driverName: {
        type: String,
        required: true   
    },
    conducterName: {
        type: String,
        required: true   
    }
})
var bus = mongoose.model('bus', busSchema);

export default bus;
