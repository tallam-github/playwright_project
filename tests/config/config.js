// config/config.js
import dotenv from 'dotenv';

// Load environment variables from .env into process.env
dotenv.config();

export const config = {
  baseURL: process.env.BASE_URL,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
};
