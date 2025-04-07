import sql from 'mssql';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

// connection config string
const dbConfig = {
    user: process.env.USER,          
    password: process.env.PW,      
    server: process.env.SERVER,               
    database: process.env.DATABASE,
    port: 1433,   
    options: {
        encrypt: false,                  
        trustServerCertificate: true     
    }
};



export default dbConfig;