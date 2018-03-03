
var mysql=require('mysql');

var connection = mysql.createConnection({
	host :'localhost',
	user : 'root',
	password : 'santoshsrujana9',
	database : 'testdb'

});
module.exports=connection;