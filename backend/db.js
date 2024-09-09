/**
 *  Author: Isaac Denning
 *  ISU Netid : idenning@iastate.edu
 *  Date :  April 29th, 2024
 */

const mysql = require('mysql2/promise')
const DEBUG = false;
let db;

function connect() {
  db = mysql.createPool({
    host: "127.0.0.1",
    user: "secoms319user",
    password: "secoms319pw",
    database: "secoms319"
  });
}

connect();

module.exports = {
  async query(...params) {
    if (DEBUG)
      console.log('query:', mysql.format(params[0], params.slice(1)));
    return await db.query(...params);
  }
};