// dependencies
const fs = require("fs");
const path = require("path");
const loadDb = require("./loadDb");
const { nanoid } = require("nanoid");

const saveDb = (noteObj) => {
   let db = loadDb();
   return new Promise((resolve) => {
      // validate data
      if (!noteObj.title) {
         reject("Error: 'title' property missing");
         return;
      } else if (!noteObj.text) {
         reject("Error: 'text' property missing");
         return;
      }
      // generate new uuid
      noteObj.id = nanoid();
      // add to db
      db.push(noteObj);
      // write file
      fs.writeFileSync(
         path.join(__dirname, "../db/db.json"),
         JSON.stringify(db, null, 2)
      );
      resolve(noteObj);
   });
};

module.exports = saveDb;
