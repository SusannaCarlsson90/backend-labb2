// Importera, databasanslutning & Express-instans
// 1. Importera paket
const express = require("express");
const Database = require("better-sqlite3");
const cors = require("cors");
// 2. Koppla mot SQLite-databasen
const db = new Database("workexperience.db");
// 3. Skapa Express-instans
const app = express();
// 4. Middlewares
app.use(cors()); // Tillåt cross-origin
app.use(express.json()); // Parsa JSON-body
// 5. Starta servern
app.listen(5000, () => console.log("Server på port 5000"));

//Routes: 
//GET (hämta data )

//experiences alla erfarenheter
app.get("/workexperience", (req, res) => {
  const experiences = db.prepare(*SELECT FROM workexperience).all();
  res.json(experiences);
});

//GET En specifik erfarenhet
app.get("/workexperience/:id", (req, res) => {
const experience = db.prepare("SELECT * FROM experiences WHERE id = ?"),get(req.params.id);
if (!experience) return res.status(404).json({error: "Not found"});
res.json(experience)
});

//POST (lägg till data)

app.post("/workexperience", (req, res) => {
  const { companyname, jobtitle, location, startdate, enddate, description } = req.body; //Data från request bodyn
  if (!companyname || !jobtitle)
    return res.status(400).json({message: "companyname och titlename krävs"});
const stmt = db.prepare(`
INSERT INTO workexperience (companyname, jobtitle, location, startdate, enddate, description) VALUES (?,?,?,?,?,?)`);

try {const result = stmt.run(companyname, jobtitle, location, startdate, enddate, description);
res.status(201).json({id: result.lastInsertRowid, ...req.body});
} catch (error) {
 res.status(500).json({message: "Could not insert experience"});
 }
}); 



