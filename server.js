// function readData() {
// 	var fs = require('fs');
// 	var csv = require('ya-csv');
// 	var reader = csv.createCsvFileReader('../data/data.csv', {
//     	columnsFromHeader: true,
//     	'separator': ',',
//     	'quote': '"',
//     	'escape': '"',       
//     	'comment': '',
// 	});
// 	var writer = new csv.CsvWriter(process.stdout);
// 	reader.addListener('data', function(data) {
// 		// writer.writeRecord([ data[0] ]);
// 		console.log(data);
// 	});
// }


var http = require("http");

function onRequest(request, response) {
  console.log("Request received.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(8888);

console.log("Server has started.");