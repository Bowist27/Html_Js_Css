const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'valoran',
    password: 'Negro30171',
});
module.exports = pool.promise();