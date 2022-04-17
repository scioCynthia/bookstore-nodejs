import express from 'express';
import controller from '../controllers/book'

const router = express.Router();

router.get('/book', controller.getAll);
router.post('/book', controller.create);
router.patch('/book/:id', controller.update);
router.delete('/book/:id', controller.remove);
router.get('/book/:id', controller.get);

export = router;