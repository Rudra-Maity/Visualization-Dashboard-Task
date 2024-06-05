const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');


router.get('/data', dataController.GetData);
router.post('/data', dataController.AddData);

module.exports = router;
