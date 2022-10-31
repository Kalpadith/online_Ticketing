import mongoose from 'mongoose';
const allocationsSchema =mongoose.Schema({
    allocatedDate: {
        type: String,
        required: true
    },
    allocatedTime: {
        type: String,
        required: true   
    },
    busId: {
        type: String,
        required: true,
        unique:true   
    },
    timetableId: {
        type: String,
        required: true   
    }
})
var Allocations = mongoose.model('allocations', allocationsSchema);

export default Allocations;
