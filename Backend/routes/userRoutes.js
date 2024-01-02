import { Router } from "express"
import { createAdmin, getAllAdmins } from '../controllers/adminController.js';
// import { getAdminById} from '../controllers/adminController.js';

const router = Router()

router.post('/add-admin', createAdmin);
// router.get('/get-admin/:id', getAdminById);
router.get('/get-admin', getAllAdmins)

export default router