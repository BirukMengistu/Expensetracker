const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
dotenv.config({path: './config/config.env'});
const app = express();


const transaction = require('./routes/transactions');
app.use('api/v1/transactions', transaction)
app.get('/' , (req ,res) => res.send('Hello Expense tracker user'));
const PORT = process.env.PORT || 5000;

app.listen(PORT ,console.log(`Server running in ${process.env.NODE_ENV} node on port ${PORT}`.yellow.bold));