import express from 'express';
import controller from '../controller/products-controller.js';

const router = express.Router();

router
    .route('/')
        .get(controller.getProducts)
        .post(controller.addProduct)
        
router
    .route('/:id')
        .get(controller.getProduct)
        .delete(controller.deleteProduct)
        .patch(controller.editProduct)



export default router