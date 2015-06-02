// MODULES
	var path 	= require('path'),
		express = require('express'),
		app 	= express(),
		bodyParser = require('body-parser');
		
		require('./config/mongoose.js');

// BODY-PARSER
	app.use(bodyParser.json());

	require('./config/routes.js')(app);

// VIEW PATH
	app.use(express.static(path.join(__dirname, './client')));

// SERVER
	app.listen(8000, function() {
		console.log('> NODE SERVER LISTENING ON PORT *.8000');
	});