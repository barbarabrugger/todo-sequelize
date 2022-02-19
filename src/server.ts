import express from "express";
import helmet from "helmet";
import { config } from "dotenv";
import db from "./config/database.config";
import todoRouter from "./todo/routes";

// db.authenticate()... for other databases
db.sync().then(() => { console.log("Connected to database");}).catch(() => {console.log("Error on connection to database");});

// Read entries from .env file
config();

const app = express();
const port = process.env["PORT"] || 3000;

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/v1/", todoRouter);

app.listen(port);
console.log("Server listening on port " + port);