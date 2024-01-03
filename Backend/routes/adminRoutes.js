import { Router } from "express"
import { createAdmin, getAdmin, updateAdmin } from '../controllers/adminController.js';
// import { getAdminById} from '../controllers/adminController.js';

const router = Router()

router.post('/add-admin', createAdmin);
// router.get('/get-admin/:id', getAdminById);
router.get('/get-admin', getAdmin)
router.post('/update-admin/:id', updateAdmin)

export default router