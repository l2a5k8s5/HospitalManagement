import { catchAsyncErrors } from "./catchAsyncErrors.js";
import ErrorHandler from "./errorMiddleware.js";
import jwt from 'jsonwebtoken';
import { User } from "../models/userSchema.js";

// Middleware to check if the admin is authenticated
export const isAdminAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const token = req.cookies.adminToken; // Ensure this matches the cookie name set during login

  if (!token) {
      return next(new ErrorHandler("Admin not authenticated!", 401));
  }
// Authentication
  try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = await User.findById(decoded.id);

      if (!req.user) {
          return next(new ErrorHandler("User not found!", 404));
      }
      // Authorization
      if (req.user.role !== "Admin") {
          return next(new ErrorHandler(`${req.user.role} not authorized for this.`, 403));
      }

      next();
  } catch (error) {
      return next(new ErrorHandler("Invalid token!", 401));
  }
});


// Middleware to check if the patient is authenticated
export const isPatientAuthenticated = catchAsyncErrors(async (req, res, next) => {
    const token = req.cookies.PatientToken;

    if (!token) {
        return next(new ErrorHandler("Patient not authenticated!", 401));
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = await User.findById(decoded.id);

        if (!req.user) {
            return next(new ErrorHandler("User not found!", 404));
        }

        if (req.user.role !== "Patient") {
            return next(new ErrorHandler(`${req.user.role} not authorized for this.`, 403));
        }

        next();
    } catch (error) {
        console.error("Token verification error:", error); // Log the error for debugging
        return next(new ErrorHandler("Invalid token!", 401));
    }
});
