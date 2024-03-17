import express from 'express';
import controller from '../controller/cart-controller.js';

const router = express.Router();

router
    .route('/')
        .post(controller.postCart)
        .get(controller.getCart)
        .get(controller.getCarts)
        .delete(controller.deleteCart)
        .delete(controller.deleteFromCart)
export default router