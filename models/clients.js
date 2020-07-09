const pool = require("./mysqlpool");

const insertNewUser = (data) => {
  return pool.execute(
    `INSERT INTO exampleclass.clients
    (name,password)
    VALUES
    (?,?);
    `,
    data
  );
};

const selectUser = (username) => {
  return pool.execute(`SELECT * FROM exampleclass.clients WHERE name = ?`, [
    username,
  ]);
};

module.exports.insertNewUser = insertNewUser;
module.exports.selectUser = selectUser;
