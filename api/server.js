import express from 'express';   
import sql from 'mssql';         
import dbConfig from './db.js';  

const app = express();
const PORT = 3000;

app.use(express.json());  // to parse json


sql.connect(dbConfig)
  .then(pool => {
    console.log('Connected to Microsoft SQL Server');
    
    app.locals.db = pool;
  })
  .catch(err => {
    console.error('Database connection failed:', err);
  });

app.get('/', async (req, res) => {
    try {
        const pool = app.locals.db;  
        const result = await pool.request()
            .query('SELECT * FROM testtable');  

        res.json(result.recordset);          
    } catch (err) {
        console.error('Query failed:', err.message);
        res.status(500).send('Error querying database');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});