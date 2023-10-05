import mysql from 'mysql2';
import { loadData } from './db_data.js';


class DB {
    constructor() {
        this.connection = mysql.createConnection({
        host: "localhost",
            user: "root",
            database: "audience",
        });
    }

    connect() {
       this.connection.connect((err) => {
            if (err) return console.error("ERROR: ", err.message);
            else console.log("Connect to MySQL Server");
        });
    }

    get(key, query) {
        this.connection.query(query, (err, result) => {
            if (err) console.log("ERROR: ", err);
            else loadData(key, result);
        });
    }

    close() {
        this.connection.end();
    }
}

export default DB;