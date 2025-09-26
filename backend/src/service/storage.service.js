var ImageKit = require("imagekit");

var imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMAGEKIT_URL_ENDPOINT
}); 

function uploadFile(file){
    return new Promise((resolve, reject) => { //returning promise because we dont know that how much time will it tak eto upload the file 
        imagekit.upload({
            file : file.buffer, //required
            fileName : "Rudrashtakam", //required      
        }, (error, result) => {
            if(error) return reject(error);
            else resolve(result);
        });
    });
}    

module.exports = uploadFile;