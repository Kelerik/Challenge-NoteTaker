// dependencies
const fs = require("fs");
const loadDb = require("./loadDb");
const path = require("path");

const deleteDb = (noteId) => {
   const db = loadDb();
   return new Promise((resolve) => {
      // create new array without the item containing the specified id
      let newDb = db.filter((noteObj) => noteObj.id != noteId);
      // write file
      fs.writeFileSync(
         path.join(__dirname, "../db/db.json"),
         JSON.stringify(newDb, null, 2)
      );
      resolve(newDb);
   });
};

module.exports = deleteDb;
