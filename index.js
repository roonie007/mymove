const exec = require('child_process').exec;
module.exports = function(from ,to,callback) 
{
	var cmd = "mv";
	if(process.platform === "win32")
		cmd = "MOVE"
	
	exec(cmd+" \""+from+"\" \""+to+"\"", function(error, stdout, stderr) 
	{
		if(typeof callback !== "undefined")
	  		callback(error);
	});
}