const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware')
const { getAll, update, getById, remove, create } = require('../controllers/users.controller');

router.get('/', authMiddleware, getAll);
router.post('/', authMiddleware, create);

router.get('/:id', authMiddleware, getById);
router.put('/:id', authMiddleware, update);
router.delete('/:id', authMiddleware, remove);

module.exports = router;
