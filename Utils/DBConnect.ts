import { PropertiesReader } from "./PropertiesReader";

const mysql = require('mysql2')
const prop = new PropertiesReader()
let host = prop.getDecryptedProperty('hostname')
let username = prop.getDecryptedProperty('hostname')
let password = prop.getDecryptedProperty('password')
let database = prop.getDecryptedProperty('database')

const connection = mysql.createConnection({
  host: host,
  user: username,
  password: password,
  database: database
});

module.exports = connection;