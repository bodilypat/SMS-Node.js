//src/routes/category.routes.js 

import express from 'express';
import * as categoryController from '../controllers/category.controller.js';
import auth from '../middlewares/auth.middleware.js';
import role from '../middlewares/role.middleware.js';

const router = express.Router();

router.use(auth);

router.post('/', auth, role(['admin']), categoryController.createCategory);
router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);
router.put('/:id', auth, role(['admin']), categoryController.updateCategory);
router.delete('/:id', auth, role(['admin']), categoryController.deleteCategory);

export default router;

