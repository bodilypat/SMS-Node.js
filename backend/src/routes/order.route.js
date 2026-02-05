//src/routes/order.routes.js 

import express from 'express';
import * as orderController from '../controllers/order.controller.js';
import auth from '../middlewares/auth.middleware.js';

const router = express.Router();

router.use(auth);

router.post('/', orderController.createOrder);
router.get('/:orderId', orderController.getOrderById);
router.put('/:orderId', orderController.updateOrder);
router.delete('/:orderId', orderController.deleteOrder);
router.get('/', orderController.getAllOrders);

export default router;

