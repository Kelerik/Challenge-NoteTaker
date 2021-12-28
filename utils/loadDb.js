// dependencies
const fs = require("fs");
const path = require("path");

const loadDb = () => {
   return JSON.parse(
      fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf-8")
   );
};

module.exports = loadDb;
