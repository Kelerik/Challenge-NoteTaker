// dependencies
const fs = require("fs");
const path = require("path");
const { nanoid } = require("nanoid");
// data
let db = require("../db/db");

const saveDb = (noteObj) => {
   return new Promise((resolve, reject) => {
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
      fs.writeFile(
         path.join(__dirname, "../db/db.json"),
         JSON.stringify(db, null, 2),
         (err) => {
            if (err) {
               reject(err);
               return;
            }
            resolve(noteObj);
         }
      );
   });
};

module.exports = saveDb;
