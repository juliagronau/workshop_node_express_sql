import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: process.env.PGUSER,
  host: "tai.db.elephantsql.com",
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: 5432,
});

export default pool;
