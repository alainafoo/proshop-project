import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();
import { 
    addOrderItems, 
    getMyOrders, 
    getOrderById, 
    updateOrderToPaid, 
    updateToDelivered, 
    getOrders  } from '../controllers/orderController.js';

router.route('/').post(protect,addOrderItems).get(protect, admin, getOrders);
router.route('/mine').get(protect,getMyOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrderToPaid);
router.route('/:id/deliver').put(protect, admin, updateToDelivered);


export default router;

