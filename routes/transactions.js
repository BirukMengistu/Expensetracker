const express = require('express');
const router = express.Router();
const { getTransactions, addTransactions ,deleteTransactions} = require('../controller/TransactionController');

router
.route('/')
.post(addTransactions)
.get(getTransactions);

router
.route('/:id')
.delete(deleteTransactions);


module .exports = router;