const router = require("express").Router();
const { loadDb, saveDb, deleteDb } = require("../utils/db");

router.get("/notes", (req, res) => {
   res.json(loadDb());
});

router.post("/notes", (req, res) => {
   res.json(saveDb(req.body));
});

router.delete("/notes/:id", (req, res) => {
   res.json(deleteDb(req.params.id));
});

module.exports = router;
