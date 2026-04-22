# Arbetserfarenhet API (Uppgift 1)

En RESTful webbtjänst byggd med Node.js och Express för att hantera arbetserfarenheter.

## Teknikval

- **Runtime:** Node.js
- **Framework:** Express.js
- **Databas:** SQLite via `better-sqlite3`
- **CORS:** Aktiverat för kommunikation med frontend

## Installation & Körning

1. Installera beroenden: `npm install`
2. Initiera databasen: `node setup.js`
3. Starta servern: `node server.js`
   Servern körs som standard på `http://localhost:5001`.

## API-Endpoints

- `GET /workexperience` - Hämtar alla poster.
- `GET /workexperience/:id` - Hämtar en specifik post.
- `POST /workexperience` - Lägger till en ny post.
- `PUT /workexperience/:id` - Uppdaterar en befintlig post.
- `DELETE /workexperience/:id` - raderar en post.
