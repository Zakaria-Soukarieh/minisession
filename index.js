import express from "express";
import dotenv from "dotenv";
import db from "./config/db.js";

dotenv.config();

const port = process.env.PORT || 3000;

await db();

const app = new express();
app.use(express.json());
app.get("/", (req, res) => { res.send("hello world"); });
app.listen(port, () => console.log(`server started on port ${port}`));

