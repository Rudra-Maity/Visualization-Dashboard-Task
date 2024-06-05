const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/routes');
const path = require('path');
const favicon=require('express-favicon');
const morgan=require('morgan');
require('dotenv').config(); 
require('./config/conn')

const app = express();

app.use(express.query());
app.use(express.json());
app.use(morgan())
app.use(express.static(path.join(__dirname,'resources','client','build')))
app.use(favicon(path.join(__dirname, 'resources', 'client', 'build', 'favicon.png')));

app.use('/', apiRoutes);
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'resources', 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
