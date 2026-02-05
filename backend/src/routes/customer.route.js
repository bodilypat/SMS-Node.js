//src/routes/customer.routes.js 

import express from 'express';
import * as customerController from '../controllers/customer.controller.js';
import auth from '../middlewares/auth.middleware.js';

const router = express.Router();

router.use(auth);

router.get('/', customerController.getAllCustomers);
router.get('/:id', customerController.getCustomerById);
router.post('/', customerController.createCustomer);
router.put('/:id', customerController.updateCustomer);
router.delete('/:id', customerController.deleteCustomer);
export default router;

