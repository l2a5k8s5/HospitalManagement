

import mongoose from 'mongoose';
import validator from 'validator';

const messageSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'First name is required'],
        minlength: [3, 'First name must contain at least 3 characters']
    },
    lastname: {
        type: String,
        required: [true, 'Last name is required'],
        minlength: [3, 'Last name must contain at least 3 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        validate: {
            validator: (v) => validator.isEmail(v),
            message: 'Please provide a valid email'
        }
    },
    phone: {
        type: Number,
        required: [true, 'Mobile number is required'],
        validate: {
            validator: (v) => /^\d{10}$/.test(v),
            message: 'Mobile number must contain 10  digits'
        }
    },
    message: {
        type: String,
        required: [true, 'Message is required'],
        minlength: [10, 'Message must contain at least 10 characters']
    }
});

export const Message = mongoose.model('Message', messageSchema);
