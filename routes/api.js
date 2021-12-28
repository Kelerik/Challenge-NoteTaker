const router = require("express").Router();
const db = require("../db/db");
const saveDb = require("../utils/saveDb");

router.get("/notes", (req, res) => {
   res.json(db);
});

router.post("/notes", (req, res) => {
   saveDb(req.body)
      .then((output) => {
         res.json(output);
      })
      .catch((err) => {
         res.send(err);
      });
});

module.exports = router;
