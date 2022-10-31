import mongoose from 'mongoose';

const routesSchema = mongoose.Schema({
   
    routeId: {
        type: String,
        maxlength:4,
        required: true
    },
    startPoint: {
        type: String,
        maxlength:40,
        required: true   
    },
    endPoint: {
        type: String,
        maxlength:40,
        required: true   
    },
    distance: {
        type: Number,
        required: true   
    }

})

var Routes = mongoose.model('routes', routesSchema);

export default Routes;