const Database = require("better-sqlite3");

const db = new Database("workexperience.db");

db.exec(`
  CREATE TABLE workexperience (
  ID INTEGER PRIMARY KEY AUTOINCREMENT,
  companyname TEXT NOT null,
  jobtitle TEXT NOT null, 
  location TEXT NOT null,
  startdate TEXT,
  enddate TEXT,
  description TEXT
)
`);

console.log("Databas och tabell skapad");
