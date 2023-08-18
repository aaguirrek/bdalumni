var connect = require('connect');
var serveStatic = require('serve-static');
var baseDirectory = "/home/frappe/frappe-bench/apps/bdalumni/bdalumni/www/AlumniFront/dist/Vien-Angular" 
connect()
	.use(serveStatic(baseDirectory))
	.listen(8080, () => console.log('Server running on 8080...'));
 // or whatever base directory you want

console.log("Static file server running at\n  => http://localhost:8080/\nCTRL + C to shutdown");