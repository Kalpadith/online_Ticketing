
import mongoose from 'mongoose';

const tokenSchema = mongoose.Schema({

    issuedDate: {
        type: String,
        required: true
    },
    validity_period: {
        type: String,
        required: true
    },
    start_point: {
        type: String,
        required: true
    },
    end_point: {
        type: String,
        required: true
    },
    route_no: {
        type: String,
        required: true
    }
})

const  token = mongoose.model('token',  tokenSchema);

export default  token;






// submission_id:
//     :
// "sub0001"
// submission_name
//     :
//     "first submission"
// Submission_category
//     :
//     "reserch project"
// document
//     :
//     "word"
// due_date
//     :
//     "2022/06/03"
// submission
//     :
//     "added"
// studentgroup_no
//     :
//     "GRP1"