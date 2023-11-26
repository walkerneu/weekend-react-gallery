const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
const multer  = require('multer')
const cloudinary = require("../utils/cloudinary");
const upload = multer({ dest: './public/data/uploads/' })

router.post('/', upload.single("file"), async (req, res) => {
    // req.file is the name of your file in the form, here 'uploaded_file'
    // req.body will hold the text fields, if there were any
    console.log('req.file, req.body', req.file, req.body)
      // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, { public_id: req.body.name } )
      console.log('result', result)
      const sqlText = `
          INSERT INTO "gallery" 
              ("url", "title", "description")
            VALUES 
              ($1, $2, $3)`;
      pool.query(sqlText, [result.secure_url, req.body.name, req.body.description])
          .then((result) => {
            console.log(`Added image to the database`);
            res.sendStatus(201);
          })
          .catch((dbError) => {
            console.log("upload image failed", dbError);
            res.sendStatus(500);
          })
  });

module.exports = router;