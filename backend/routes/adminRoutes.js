const express = require('express');
const router = express.Router();
const { deleteEntity, getEntityList } = require('../controllers/adminController');

router.delete('/:entityType/:id', deleteEntity);
router.get('/:entityType', getEntityList);

module.exports = router;
