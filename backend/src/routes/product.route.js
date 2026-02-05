//src/routes/product.routes.js 

import express from 'express';
import * as productController from '../controllers/product.controller.js';
import auth from '../middlewares/auth.middleware.js';
import role from '../middlewares/role.middleware.js';

const router = express.Router();

router.use(auth);

router.post('/', auth, role(['admin']), productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.put('/:id', auth, role(['admin']), productController.updateProduct);
router.delete('/:id', auth, role(['admin']), productController.deleteProduct);
export default router;

