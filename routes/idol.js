
var mysql = require('mysql');
var mysqlConfig={
	host: 'localhost',
	port: 3306,
	user: "root",
	password: "moon1207",
	database: "test"
}

var statementMapList = "SELECT map_code, map_id FROM map_table where map_code = {mapCode}";

var util = require('util');

/**
* Retrieve Memo List
**/


exports.getList = function(req, res){
	console.log("-> request map_name id : "+req.params.mapCode);
	var conn = mysql.createConnection(mysqlConfig);
	var queryString = statementMapList.replace('{mapCode}',req.params.mapCode);
	
	console.log("-> 1 : "+queryString);
	
	conn.query(queryString,
		function(err, rows){
			if(err){
				console.log(err);
			}else{
				console.log("<- result count : " + rows.length);
				res.send({"mapCode":rows});
			}
			conn.destroy();
		}
	);
};
