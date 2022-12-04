import mysql from "mysql2";

//create connection to database
const db = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "BudgetTracking",
  })
  .promise();


export default db;


