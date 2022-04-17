import express from 'express';
import controller from '../controllers/bookstore'

const router = express.Router();

router.get('/bookstore', controller.getAll);
router.post('/bookstore', controller.create);
router.patch('/bookstore/:id', controller.update);
router.delete('/bookstore/:id', controller.remove);
router.get('/bookstore/:id', controller.get);

export = router;