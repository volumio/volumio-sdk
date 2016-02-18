/**
	Plugin checker
**/
var argv = require('minimist')(process.argv.slice(2));
var winston = require('winston');

var ccommand;

ccommand.logger = new (winston.Logger)({
		transports: [
			new (winston.transports.Console)(),
			new (winston.transports.File)({
				filename: '/var/log/volumio.log',
				json: false
			})
		]
	});

var pluginmanager=new(require(__dirname+'/pluginmanager.js'))(ccommand);

if (argv.d) {
	console.log('Testing plugin in folder '+argv.d);
	
//	pluginmanager.setPluginFolder(argv.d);
//	pluginmanager.loadPlugins();

}
else console.log('Please specify the plugin folder through the -d option');



