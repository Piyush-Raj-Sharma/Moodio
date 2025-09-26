const express = require('express');
const multer = require('multer');
const router = express.Router();

const upload = multer({storage: multer.memoryStorage()});
// multer is a middleware that is used when we send some data like any img, video or audio, etc...

router.post('/songs', (req, res) => {
    console.log(res.body);

    res.status(201).json({
        message: 'Song added successfully',
        song: res.body
    })
    
})

module.exports = router;