import express from 'express';
import controller from '../controller/users-controller.js'


const router = express.Router();

router
    .route('/')
        .get(controller.getUsers)
        .post(controller.postUser)
        
router
    .route('/:id')
        .get(controller.getUser)
        .delete(controller.deleteUser)
        .patch(controller.patchUser)



export default router