import fs from 'fs';
import path from 'path';
import { Sequelize, DataTypes, Dialect } from 'sequelize';
import process from 'process';
import { Sequelize as SequelizeType, ModelStatic } from 'sequelize';
import configJSON from '../config/config.json'
// Simport './associations'; 

// Load configuration based on the environment
const env = process.env.NODE_ENV || 'development';
const config = configJSON[env as keyof typeof configJSON];

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect as any,
});

export default sequelize;