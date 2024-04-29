import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_ROOT_USER,
  password: process.env.DB_ROOT_PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DATABASE_PORT,
  waitForConnections: true,
  connectionLimit: 10, // You can adjust this value based on your application's needs
});

export default pool;
