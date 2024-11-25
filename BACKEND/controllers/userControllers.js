import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { User } from "../models/userSchema.js";
import { generateToken } from '../utils/jwtTokens.js';
import cloudinary from "cloudinary";
import bcrypt from 'bcrypt'; // Make sure to import bcrypt

// Patient Registration
export const patientRegister = catchAsyncErrors(async (req, res, next) => {
    const { firstname, lastname, email, phone, password, gender, dob, nic, role } = req.body;

    if (!firstname || !lastname || !email || !phone || !password || !gender || !dob || !nic || !role) {
        return next(new ErrorHandler("Please fill out the full form!", 400));
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return next(new ErrorHandler("User already registered!", 400));
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    const user = await User.create({ firstname, lastname, email, phone, password: hashedPassword, gender, dob, nic, role });

    res.status(201).json({
        success: true,
        message: "User registered successfully.",
        user
    });
});

// Login Function   
export const login = catchAsyncErrors(async (req, res, next) => {
    const { email, password, role } = req.body;

    // Check for missing fields
    if (!email || !password  || !role) {
        return next(new ErrorHandler("Please provide all details!", 400));
    }

    // Find user by email and include password for comparison
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return next(new ErrorHandler("Invalid email or password.", 400));
    }

    // console.log("Entered password:", password);
    // console.log("Stored hashed password:", user.password);

    // check password match

    // const isPasswordMatch=await user.comparePassword(password);
    // if(!isPasswordMatch)
    // {
    //     return next (new ErrorHandler("Invalid Pasword",400));
    // }

    // Check user role
    if (role !== user.role) {
        return next(new ErrorHandler("User with this role is not registered!", 400));
    }
    // Generate token
    
    generateToken(user, "User logged in successfully!", 201, res);
});
/// Add New Admin
export const addNewAdmin = catchAsyncErrors(async (req, res, next) => {
    const { firstname, lastname, email, phone, password, gender, dob, nic } = req.body;

    // Check for missing fields
    if (!firstname || !lastname || !email || !phone || !password || !gender || !dob || !nic) {
        return next(new ErrorHandler("Please fill out the full form!", 400));
    }

    // Check if the admin already exists
    const isRegistered = await User.findOne({ email });
    if (isRegistered) {
        return next(new ErrorHandler(`${isRegistered.role} with this email already exists`, 400));
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new admin
    const admin = await User.create({ 
        firstname, 
        lastname, 
        email, 
        phone, 
        password: hashedPassword, // Store the hashed password
        gender, 
        dob, 
        nic, 
        role: "Admin" 
    });

    res.status(201).json({
        success: true,
        message: "New admin registered.",
        admin 
    });
});

// Get All Doctors
export const getAllDoctors = catchAsyncErrors(async (req, res, next) => {
    const doctors = await User.find({ role: "Doctor" });
    res.status(200).json({
        success: true,
        doctors
    });
});

// Get User Profile
export const getUserDetails  = catchAsyncErrors(async (req, res, next) => {
    try {
        const user = req.user ;
        res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
});

// Log Out Admin
export const logOutAdmin = catchAsyncErrors(async (req, res, next) => {
    res.cookie("adminToken", "", {
        httpOnly: true,
        expires: new Date(Date.now())
    });
    res.status(200).json({
        success: true,
        message: "Admin logged out successfully!",
    }); 
});

// Log Out Patient
export const logOutPatient = catchAsyncErrors(async (req, res, next) => {
    res.cookie("PatientToken", "", {
        httpOnly: true,
        expires: new Date(Date.now())
    });
    res.status(200).json({
        success: true,
        message: "Patient logged out successfully!",
    });
});

// Add New Doctor
export const addNewDoctor = catchAsyncErrors(async (req, res, next) => {
    // Check for uploaded files
    if (!req.files || Object.keys(req.files).length === 0) {
        return next(new ErrorHandler("Doctor Avatar Required!", 400));
    }

    const { docAvtar } = req.files;
    const allowedFormats = ["image/png", "image/jpeg", "image/webp"];

    // Validate file format
    if (!allowedFormats.includes(docAvtar.mimetype)) {
        return next(new ErrorHandler("File Format not Supported", 400));
    }


    // parsing body     
    const { firstname, lastname, email, phone, password, gender, dob, nic, doctorDepartment } = req.body;

    // Check for missing fields
    if (!firstname || !lastname || !email || !phone || !password || !gender || !dob || !nic || !doctorDepartment) {
        return next(new ErrorHandler("Please provide all fields!", 400));
    }

    // Check if the user is already registered
    const isRegistered = await User.findOne({ email });
    if (isRegistered) {
        return next(new ErrorHandler(`${isRegistered.role} already registered with this email!`, 400));
    }

    // Upload to Cloudinary
    const cloudinaryResponse = await cloudinary.uploader.upload(docAvtar.tempFilePath);
    if (!cloudinaryResponse || cloudinaryResponse.error) {
        return next(new ErrorHandler("Cloudinary Error: Unable to upload the image", 500));
    }  

    // // Hash the password before saving
    // const hashedPassword = await bcrypt.hash(password, 10); // Ensure you're hashing the password

    // Create the new doctor
    const doctor = await User.create({
        firstname,
        lastname,
        email,
        phone,
        password,// hashedPassword, // Store the hashed password
        gender,
        dob,
        nic,
        doctorDepartment,
        role: "Doctor",
        docAvtar: {
            public_id: cloudinaryResponse.public_id,
            url: cloudinaryResponse.secure_url,
        }
    });
    
    res.status(201).json({
        success: true,
        message: "New Doctor Registered.",
        doctor,
    });
});
