const sql = require("mssql");

const config = {
  server: "35.222.167.106",
  database: "jafferjees",
  user: "sqlserver",
  password: "Acer@3456-",
};

async function connect1() {
  try {
    const pool = await sql.connect(config);
    console.log("Connected to MSSQL server");
    return pool;
  } catch (err) {
    console.error("Error connecting to MSSQL server", err);
  }
}

module.exports = connect;
