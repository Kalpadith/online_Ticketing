import mongoose from 'mongoose';

const inspectorSchema = mongoose.Schema({

    inspectorId: {
        type: String,
        maxlength:4,
        unique:true,
        required:true

    },
    BusId: {
        type: String,
        required:true

    },
    inspectorName: {
        type: String,
        maxlength:100,
        required:true

    }
})

const Inspector = mongoose.model('inspector', inspectorSchema);

export default Inspector;
