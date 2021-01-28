const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
