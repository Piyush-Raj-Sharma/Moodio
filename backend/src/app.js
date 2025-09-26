const express = require('express');
const songRoutes = require('./routes/songs.routes')



const app = express();
app.use(express.json());

app.use('/', songRoutes);




module.exports = app;