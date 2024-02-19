// Middleware.js
import mysql from 'mysql2/promise';

const createConnectionPool = (dbDetails) => {
  return mysql.createPool({
    connectionLimit: dbDetails.connectionLimit || 500,
    ...dbDetails,
  });
};

const connectToClientDatabase = (dbDetails) => {
  let client = dbDetails.client
  delete dbDetails.client;
  const pool = createConnectionPool(dbDetails);

  return async (req, res, next) => {
    try {
      const connection = await pool.getConnection();
      req.clientDb = connection;
      req.client = client;
      next();
    } catch (err) {
      res.status(500).json({ status: false, statusCode: 500, err });
    }
  };
};

const connectToApiDatabase = (dbDetails) => {
  const pool = createConnectionPool(dbDetails);
  return async (req, res, next) => {
    try {
      const connection = await pool.getConnection();
      req.apidb = connection;
      next();
    } catch (err) {
      res.status(500).json({ status: false, statusCode: 500, err });
    }
  };
};



export { connectToClientDatabase, connectToApiDatabase };