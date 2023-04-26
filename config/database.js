const { createPool } = require("mysql");
const { resolve } = require("styled-jsx/css");
const pool = createPool({
  // //local
  // host: "localhost",
  // user: "root",
  // password: "abcd1234",
  // port: 3306,
  // database: "zakireen",

  //Domain
  host: "104.247.78.143",
  user: "jaffer5_gc",
  password: "jaff_gc@2019",
  port: 3306,
  database: "jaffer5_onlinestock",
});

pool.getConnection((err) => {
  if (err) {
    console.log("Error in db connection");
  } else {
    console.log("db connected successfully");
  }
});

const executeQuery = (query, arrParams) => {
  return new Promise((resolve, reject) => {
    try {
      pool.query(query, arrParams, (err, data) => {
        if (err) {
          console.log("Error in execute query");
          reject(err);
        }
        resolve(data);
      });
    } catch (err) {
      reject(err);
    }
  });
};
module.exports = { executeQuery };
