//src/routes/supplier.routes.js 

import express from 'express';
import * as supplierController from '../controllers/supplier.controller.js';
import auth from '../middleware/auth.middleware.js';
import role from '../middleware/role.middleware.js';

const router = express.Router();

router.use(auth);

router.post('/', role(['admin', 'manager']), supplierController.createSupplier);
router.get('/', role(['admin', 'manager', 'user']), supplierController.getAllSuppliers);
router.get('/:id', role(['admin', 'manager', 'user']), supplierController.getSupplierById);
router.put('/:id', role(['admin', 'manager']), supplierController.updateSupplier);
router.delete('/:id', role(['admin']), supplierController.deleteSupplier);
export default router;

