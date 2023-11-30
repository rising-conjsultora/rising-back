require('dotenv').config();
// const DB_USER = "admin";
// const DB_PASSWORD = "admin123456";
// const DB_HOST = "web-personal.1hnuc3c.mongodb.net";
// const API_VERSION = "v1";
// const IP_SERVER = "localhost";
// const JWT_SECRET_KEY = "gR7cH9Svfj8JLe4c186Ghs48hheb3902nh5DsA";
// const IP_DATABASE='localhost'
// const PORT_DB = 27017;


const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
// const API_VERSION = process.env.API_VERSION;
const IP_SERVER = process.env.IP_SERVER;
// const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const JWT_SECRET_KEY ="gR7cH9Svfj8JLe4c186Ghs48hheb3902nh5DsA"
const IP_DATABASE=process.env.IP_DATABASE;
const PORT_DB = process.env.PORT_DB;

module.exports = {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  // API_VERSION,
  IP_SERVER,
  JWT_SECRET_KEY,

  IP_DATABASE,
  PORT_DB
};
