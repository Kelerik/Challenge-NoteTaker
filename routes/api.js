const router = require("express").Router();
const db = require("../db/db");

router.get("/notes", (req, res) => {
   res.json(db);
});

module.exports = router;
