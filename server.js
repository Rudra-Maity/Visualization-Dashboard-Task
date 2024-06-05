const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/routes');
const path = require('path');
require('dotenv').config(); 
require('./config/conn')

const app = express();

app.use(express.query());
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname,'resources','client','build')))

app.use('/', apiRoutes);
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'resources', 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
