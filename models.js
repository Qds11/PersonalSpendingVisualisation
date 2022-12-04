import db from './database.js';
import moment from "moment";


//get all spending data
export async function getAllSpending() {
  const [rows] = await db.query("select * from Spending");
  const spendingRes = [];
  rows.forEach(function (row) {
    spendingRes.push(parseFloat(row.spendAmt));
  });
  const dateRes = [];
  rows.forEach(function (row) {
    dateRes.push(moment(row.date).utc().format("YYYY-MM-DD"));
  });

  return [dateRes, spendingRes];
}

//get spending data filtered by date range
export async function getRangeSpending(start, end) {
  const [rows] = await db.query(
    `select * from Spending where date  >= ? and date <=?`,
    [start, end]
  );
  const spendingRes = [];
  rows.forEach(function (row) {
    spendingRes.push(parseFloat(row.spendAmt));
  });
  const dateRes = [];
  rows.forEach(function (row) {
    dateRes.push(moment(row.date).utc().format("YYYY-MM-DD"));
  });

  return [dateRes, spendingRes];
}


