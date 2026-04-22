const express = require("express");
const Database = require("better-sqlite3");
const cors = require("cors");

const db = new Database("workexperience.db");
const app = express();

app.use(cors());
app.use(express.json());

// GET
app.get("/workexperience", (req, res) => {
  try {
    const rows = db.prepare("SELECT * FROM workexperience").all();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST
app.post("/workexperience", (req, res) => {
  const { companyname, jobtitle, location, startdate, enddate, description } =
    req.body;
  try {
    const stmt = db.prepare(
      "INSERT INTO workexperience (companyname, jobtitle, location, startdate, enddate, description) VALUES (?, ?, ?, ?, ?, ?)"
    );
    const result = stmt.run(
      companyname,
      jobtitle,
      location,
      startdate,
      enddate,
      description
    );
    //Skickar med ID som både 'id' och 'ID' så det inte kan bli fel i frontend, tog mig 3h.
    res.status(201).json({
      id: result.lastInsertRowid,
      ID: result.lastInsertRowid,
      ...req.body,
    });
  } catch (err) {
    console.error("FEL VID POST:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// DELETE - Radera
app.delete("/workexperience/:id", (req, res) => {
  try {
    const id = req.params.id;
    //Kollar både ID och id för säkerhets skull
    const stmt = db.prepare(
      "DELETE FROM workexperience WHERE id = ? OR ID = ?"
    );
    const result = stmt.run(id, id);
    res.status(200).json({ message: "Raderat" });
  } catch (err) {
    console.error("FEL VID DELETE:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(5001, () => console.log("Servern rullar på 5001"));
