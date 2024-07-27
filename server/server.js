import express from "express";
import pg from "pg";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

app.get("/", function (request, response) {
  response.send("This has driven me insane");
});

app.get("/messages", async function (request, response) {
  const result = await db.query(`SELECT * FROM messages`);
  const messages = result.rows;
  response.json(messages);
});

app.post("/messages", function (request, response) {
  console.log(request.body);
  response.json("Is this damn thing actually working?");
  //db.query(
  // `INSERT INTO messages (name, message)`[
  //(request.body.name, request.body.message)
  // ]
  //);
});

app.listen(8080, function () {
  console.log("Server started if this actually works port 8080!");
});
