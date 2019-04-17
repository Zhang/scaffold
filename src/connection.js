/*
MySQL is configured to only allow connections from localhost by default

To connect run:
    mysql -uroot

To have launchd start mysql now and restart at login:
  brew services start mysql
Or, if you don't want/need a background service you can just run:
  mysql.server start

*/

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: '-uroot',
  // password: 'secret',
  database: 'my_db',
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

// connection.end();
