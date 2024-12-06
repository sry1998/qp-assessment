import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.DB_Name || !process.env.DB_User || !process.env.DB_Password) {
    throw new Error("Missing required environment variables for DB connection");
  }
  
  const sequelize = new Sequelize(
    process.env.DB_Name, 
    process.env.DB_User, 
    process.env.DB_Password,
    {
      host: 'db',
      dialect: 'mysql',
    }
  );
  

export default sequelize;