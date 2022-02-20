import { config } from "dotenv";
import { Sequelize } from "sequelize";

config();

const db = new Sequelize("app", "", "", {
  // eslint-disable-next-line no-process-env
  storage: process.env.DB_STORAGE ?? "./tmp/database.sqlite",
  dialect: "sqlite",
  logging: false
});

export default db;
