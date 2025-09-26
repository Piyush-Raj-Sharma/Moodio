const express = require('express');
const multer = require('multer');
const router = express.Router();

const upload = multer({storage: multer.memoryStorage()}); //memorystorage is the server's RAM (multer will temperory store the data for sometime here)
// multer is a middleware that is used when we need to read the data coming in the form-data format

router.post('/songs', upload.single('audio') ,(req, res) => {
    console.log(req.body);
    console.log(req.file); //file will be available in req.file when we use multer middleware
    // req.body will contain all the text fields
    // req.file will contain the file
    res.status(201).json({
        message: 'Song added successfully',
        song: req.body
    })
    
})

module.exports = router;