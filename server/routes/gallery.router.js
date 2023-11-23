const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

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
  const sqlText = `SELECT * FROM "gallery" ORDER BY "id";`;
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


module.exports = router;
