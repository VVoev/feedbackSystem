const express = require('express');
const mongoose = require('mongoose');
const passportConfig = require('./services/passport.js')
const keys = require('./config/keys')
require('./models/User');

mongoose.connect(keys.mongoURI);

const app = express();
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
});