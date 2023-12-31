import { Router } from 'express';
import { getProductsPipelineController, getProductByIdController, postAddProductController, putUpdateProductController, deleteProductController, deleteMiddleWare } from '../controllers/products.controller.js';
const router = Router();


router.get('/', getProductsPipelineController);
router.get('/:pid', getProductByIdController);


router.post('/', postAddProductController);


router.put('/:pid', putUpdateProductController);


router.delete('/:pid', deleteMiddleWare, deleteProductController);


export default router;