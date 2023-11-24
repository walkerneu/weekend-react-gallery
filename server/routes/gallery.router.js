const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
const multer  = require('multer')
const upload = multer({ dest: './public/data/uploads/' })

router.post('/', upload.single('uploaded_file'), function (req, res) {
  // req.file is the name of your file in the form above, here 'uploaded_file'
  // req.body will hold the text fields, if there were any 
  console.log(req.file, req.body)
});

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
    let idToUpdate = req.params.id;
        let queryText = `
        UPDATE "gallery"
	        SET "likes" = "likes" + 1
	        WHERE "id" = $1;`;
        const sqlValues = [idToUpdate]
        pool.query(queryText, sqlValues)
            .then((result) => {
                res.sendStatus(200);
            })
            .catch((dbError) => {
                console.log("update likes failed", dbError);
                res.sendStatus(500);
            })
});

// GET /gallery
router.get('/', (req, res) => {  
  const sqlText = `SELECT * FROM "gallery" ORDER BY "likes" DESC;`;
  pool.query(sqlText)
      .then((result) => {
          console.log(`Got stuff back from the database`, result.rows);
          res.send(result.rows);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
          res.sendStatus(500);
      })
});

router.post('/', (req, res) => {
  const img = req.body;
  const sqlText = `INSERT INTO "gallery" ("url", "title", "description")
                   VALUES ($1, $2, $3)`;
  pool.query(sqlText, [img.url, img.title, img.description])
      .then((result) => {
          console.log(`Added image to the database`, img);
          res.sendStatus(201);
      })
      .catch((error) => {
          console.log(`Error making database query`, error);
          res.sendStatus(500);
      })
})

router.delete('/:id', (req, res) => {
  const idToDelete = req.params.id;
  const sqlText = `
      DELETE FROM "gallery"
      WHERE "id" = $1
  `
  const sqlValues = [idToDelete]
  pool.query(sqlText, sqlValues)
      .then((result) => {
          res.sendStatus(200);
      })
      .catch((dbError) => {
          console.log("delete image failed", dbError);
          res.sendStatus(500);
      })
})


module.exports = router;
