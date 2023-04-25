import React, { useEffect } from "react";
import sql from "mssql";

function Index() {
  const config = {
    server: "35.222.167.106",
    database: "jafferjees",
    user: "sqlserver",
    password: "Acer@3456-",
  };

  async function connect() {
    try {
      const pool = await sql.connect(config);
      return pool;
    } catch (err) {
      console.error("Error connecting to MSSQL server", err);
      throw err;
    }
  }

  async function getData() {
    let pool;
    try {
      pool = await connect();
      const result = await pool.request().query("SELECT * FROM branch");
      return result.recordset;
    } catch (err) {
      console.error("Error getting data", err);
    } finally {
      if (pool) await pool.close();
    }
  }

  useEffect(() => {
    getData()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return <h1>Hello</h1>;
}

export default Index;
