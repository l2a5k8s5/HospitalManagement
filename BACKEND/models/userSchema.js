import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
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
            validator: (v) => /^\d{10,11}$/.test(v),
            message: 'Mobile number must contain 10 or 11 digits'
        }
    },
    nic: {
        type: String,
        required: [true, 'NIC is required'],
        minlength: [13, 'NIC must contain at least 13 digits'],
        maxlength: [13, 'NIC must contain at most 13 digits']
    },
    dob: {
        type: Date,
        required: [true, "Dob is required"]
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female"]
    },
    password: {
        type: String,
        minlength: [8, "Password must contain at least 8 characters!"],
        required: true,
        select: false,
    },
    role: {
        type: String,
        required: true,
        enum: ["Admin", "Patient", "Doctor"]
    },
    doctorDepartment: {
        type: String
    },
    docAvtar: {
        public_id: String,
        url: String,
    }
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Compare password method
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// Generate JSON Web Token
userSchema.methods.generateJsonWebToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES
    });
};

// Check if the model already exists to avoid OverwriteModelError
export const User = mongoose.models.User || mongoose.model('User', userSchema);
