import dotenv from "dotenv";
import path from 'path'

const currentModuleDir = path.dirname(new URL(import.meta.url).pathname);
const rootDir = path.join(currentModuleDir, '..', '..', '.env');

dotenv.config({
  path: rootDir
});

const apiDatabase = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  };  

export default apiDatabase