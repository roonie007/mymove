#! /usr/bin/env node
var mymove = require('../index');
mymove(process.argv[2],process.argv[3],function(err)
{
	if(err)
		throw err;
	else
		console.log(process.argv[2]+" Moved to "+process.argv[3]);
});

