import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const statusSchema = new Schema({ 
    status: {
        type: String,
        required: true
    },
    type: {
        type:String,
        required: true
    }
}, { timestamps: false });

const Status = mongoose.model('Status', statusSchema);
export default Status;