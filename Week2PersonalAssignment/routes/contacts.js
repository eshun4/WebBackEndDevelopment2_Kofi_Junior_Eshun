const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAllRecords);

router.get('/:id', contactsController.getOneRecord);

module.exports = router;