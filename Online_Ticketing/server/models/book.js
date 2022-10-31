import mongoose from 'mongoose';
const bookSchema =mongoose.Schema({
    custName: {
        type: String,
        required: true
    },
    noOfSeats: {
        type: String,
        required: true   
    },
    date: {
        type: String,
        required: true   
    },
    time: {
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
    }
})
var book = mongoose.model('book', bookSchema);

export default book;
