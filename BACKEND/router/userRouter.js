import express from 'express';
import { addNewAdmin, addNewDoctor, getAllDoctors, getUserDetails, login, logOutAdmin, logOutPatient, patientRegister } from '../controllers/userControllers.js'; // Ensure this path is correct
import { isAdminAuthenticated, isPatientAuthenticated } from'../middlewares/auth.js'

const router = express.Router();

// Define routes
router.post('/patient/register', patientRegister); 
router.post('/login', login);
router.post('/admin/addnew',   addNewAdmin)
router.get('/doctors', getAllDoctors);
 router.get('/patient/me',getUserDetails);
  // router.get('/patient/me',getUserDetails);

router.get('/admin/me', isAdminAuthenticated,getUserDetails);
router.get('/admin/me',getUserDetails);

router.get('/admin/logout', isAdminAuthenticated ,logOutAdmin);
router.get('/patient/logout' , isAdminAuthenticated, logOutPatient);
router.post('/doctor/addnew', isAdminAuthenticated, addNewDoctor);



export default router;
 