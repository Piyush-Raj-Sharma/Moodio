const express = require('express');
const multer = require('multer');
const uploadFile = require('../service/storage.service')
const songModel = require('../model/songs.model');
const router = express.Router();

const upload = multer({storage: multer.memoryStorage()}); //memorystorage is the server's RAM (multer will temperory store the data for sometime here)
// multer is a middleware that is used when we need to read the data coming in the form-data format

router.post('/songs', upload.single('audio') , async (req, res) => {
    console.log(req.body);
    console.log(req.file); //file will be available in req.file when we use multer middleware
    // req.body will contain all the text fields
    // req.file will contain the file
    
    const fileData = await uploadFile(req.file);
    // console.log(fileData);
    const song = await songModel.create({
        title: req.body.title,
        artist: req.body.artist,
        audio: fileData.url,
        mood: req.body.mood
    })

    res.status(201).json({
        message: 'Song added successfully',
        song: song
    })
    
})

router.get('/songs', async (req, res) => {
    const {mood} = req.query;
    const songs = await songModel.find({
        mood: mood
    })

    res.status(200).json({
        messsage: "Songs fetched successfully!",
        song: songs
    })
})
module.exports = router;