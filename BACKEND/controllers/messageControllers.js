import {catchAsyncErrors} from "../middlewares/catchAsyncErrors.js"
import { Message } from "../models/messageSchema.js"
import ErrorHandler from "../middlewares/errorMiddleware.js"
export const sendMessage=catchAsyncErrors(async (req,res,next)=>{
    const {firstname,lastname,email,message,phone}=req.body;
    console.log(req.body);

    if(!firstname || !lastname || !email || !message || !phone)
    {
        return next(new ErrorHandler("Please Fill Full form!",400))
    }
    await Message.create({firstname,lastname,email,message,phone});
    res.status(200).json({
        success:true,
        message:"Sent Successfully..."
    });
    
})  