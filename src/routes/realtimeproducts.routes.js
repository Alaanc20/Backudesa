import { Router } from 'express';
import { getRealTimeProductsController } from '../controllers/realtimeproducts.controller.js';
import { isPremiumOrAdminMiddleware } from '../controllers/sessions.controller.js';
const router = Router();


router.get('/', isPremiumOrAdminMiddleware, getRealTimeProductsController);

export default router;