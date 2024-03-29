const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 8080;
// General router - Till Assignment 2
const router = require('./router/api')


// Assignment 3 routing
const artistRouter = require('./router/artist/artist');

// Albums
const albumRouter = require('./router/albums/albums');

// Tracks
const trackRouter = require('./router/tracks/tracks');

const staticPath = path.join(__filename, '../_FrontendStarterFiles');



// / after / we can just name our file and it will run that file
app.use(express.static(staticPath))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(router);
app.use('/api/artists', artistRouter);
app.use('/api/albums', albumRouter);
app.use('/api/tracks', trackRouter);


const connection = app.listen(PORT, () => {
    console.log("Server running on Port", PORT);
})


module.exports = { app, connection };