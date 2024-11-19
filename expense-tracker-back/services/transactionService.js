const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { sql } = require("../configs/database");

async function createTransaction() {
  const input = {
    id: uuidv4(),
    amount: 1033,
    type: "EXPENSE",
    payee: "Mmg",
  };

  // await sql`insert into category (id, name) values (${id} ${name})`;
  await sql`INSERT INTO transaction ${sql(input, Object.keys(input))}`;
  return "";
}

async function getTransactions({ type, categoryId, before, payee }) {
  let query = sql`select * from transaction where 1=1`;
  if (type) {
    query = `${query} and type=${type}`;
  }
  if (categoryId) {
    query = `${query} and categoryId=${categoryId}`;
  }
  if (before) {
    query = `${query} and date>${before}`;
  }
  if (payee) {
    query = `${query} and payee=${payee}`;
  }
  const list = await query;
  return list;
}

module.exports = {
  createTransaction,
  getTransactions,
};
