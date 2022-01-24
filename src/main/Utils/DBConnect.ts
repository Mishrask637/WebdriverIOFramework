import { PropertiesReader } from "./PropertiesReader";
import { Encrypt } from "./Encrypt";
import { ReadConfig } from "../config/ReadConfig";
const mysql = require('mysql2')
const prop = new PropertiesReader();
const encrypt = new Encrypt();
const readConf = new ReadConfig();
/* let host = prop.getDecryptedProperty('hostname')
let username = prop.getDecryptedProperty('hostname')
let password = prop.getDecryptedProperty('password')
let database = prop.getDecryptedProperty('database') */

let host = encrypt.getEncrypteddata(readConf.getdbHostname());
let username = encrypt.getEncrypteddata(readConf.getdbUsername());
let password = encrypt.getEncrypteddata(readConf.getdbPassword());
let database = encrypt.getEncrypteddata(readConf.getdatabase());

const connection = mysql.createConnection({
  host: host,
  user: username,
  password: password,
  database: database
});

module.exports = connection;