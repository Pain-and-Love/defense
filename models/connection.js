const mysql = require('mysql');
exports.getConnection = function(){
	let connection = mysql.createConnection({
		host: 'localhost',
		database: 'safety',
		user: 'root',
		password: 'qwer1234'
	});
	connection.connect();
	return connection;
};
