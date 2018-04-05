var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('./files/Padron_Completo.csv');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);

rl.on('line', function(line) {
    line = line.trim()
    var array = line.split(',')
    var myobj = { cedula: array[0], codelec: array[1], sexo: array[2], fechacaduc: array[3], junta: array[4], nombre: array[5], apellido1: array[6], apellido2: array[7] };
    MongoClient.connect(url, function(err, db) {
        var dbo = db.db("Padron")
        dbo.collection("Votantes").insertOne(myobj, function(err, res) {
            if (err) throw err;
            db.close();
        });
    });
});

rl.on('close', function() {
    console.log("Done")
});