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
