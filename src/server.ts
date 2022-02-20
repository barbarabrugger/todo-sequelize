import db from "./config/database.config";
import express from "express";
import helmet from "helmet";
import { port } from "./config/server.config";
import todoRouter from "./todo/routes";

// For other databases: db.authenticate()...
db.sync().then((): void => {
  console.info("Connected to database");
}).catch((): void => {
  console.error("Error on connection to database");
});

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/", todoRouter);

app.listen(port);
console.info(`Server listening on port ${port}`);
