import express from 'express';
import controller from '../controller/cart-controller.js';

const router = express.Router();

router
    .route('/admin')
        .post(controller.postCartByAdmin)

router       
    .route('/')
        .get(controller.getCarts)
        .delete(controller.deleteCart)

router
    .route('/user')
        .get(controller.getUserCart)
        .post(controller.postCart)
        .delete(controller.deleteFromCart)
router
    .route('/user/:id')
        .delete(controller.deleteFromCart)

router
    .route('/:id') 
        .patch(controller.patchCart)
        .delete(controller.deleteCartByID)

export default router