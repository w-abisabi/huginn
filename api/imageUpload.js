const crypto = require('crypto');
const path = require('path');
const GridFsStorage = require('multer-gridfs-storage');
const { createImgClient } = require("../src/helpers/img-helper");

const mongoose = require('mongoose')
const mongoURI = process.env.ATLAS_URI;
// const conn = mongoose.createConnection(mongoURI)

const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'images'
        };
        resolve(fileInfo);
      });
    });
  }
});

const upload = multer({ storage });

exports.handler = async (event) => {
  const imgClient = createImgClient();
  // let errorStatusCode = 500;
  await imgClient.connect();
  const images = imgClient.imagesCollection();

  if (event.httpMethod === "POST") {
    //upload image
  }

  if (event.httpMethod === "GET") {
    console.log(JSON.stringify(images));
  }
}

// const client = await MongoClient.connect('mongodb://yourhost:27017');
// const db = client.db('database')
// const storage = new GridFSStorage({ db, client});


// storage.on('connection', (db) => {  
//   //Setting up upload for a single file  
//   upload = multer({ storage });  
// }); 

