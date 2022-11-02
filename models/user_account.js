import mongoose from 'mongoose';

const user_AccountSchema = mongoose.Schema({
   
    user_name: {
        type: String,
        required: true
    },
    user_type: {
        type: String,
        required: true
    },
    user_address: {
        type: String,
        required: true
    },
    user_Email: {
        type: String,
        required: true,
        unique: true
    },
    user_password: {
        type: String,
        required: true
    },
    user_passportNo: {
        type: String,
        required: true
    },
    // user_avatar: {
    //     type: String,
    // },
    user_phoneNo: {
        type: String,
        required: true,
        unique: true
    }


})

const userAcc = mongoose.model('users', user_AccountSchema);

export default userAcc;
