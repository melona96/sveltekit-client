import { Pool } from 'pg';

const pool = new Pool({
    user: 'melona',
    host: 'localhost',
    database: 'community',
    password: 'xkdlald1',
    port: 5432, // Change to your PostgreSQL port
});

export default pool;