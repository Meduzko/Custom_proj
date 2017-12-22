var db = function localConnect(){
    return require('mysql2').createConnection({
        hostname: 'localhost',
        user: 'root',
        password: '1234',
        database: 'sakila'
    });
    connection.connect();
}
module.exports.localConnect = db;