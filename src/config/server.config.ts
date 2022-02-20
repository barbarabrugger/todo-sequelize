import { config } from "dotenv";

// Read entries from .env file
config();

// eslint-disable-next-line no-process-env
export const port = process.env.PORT ?? 3_000;
