var MongoClient = require('mongodb').MongoClient;


   

function insertIntoDB(Distelec){
MongoClient.connect("mongodb://localhost:27017/", function(err, db) {
var dbo = db.db("Padron")
dbo.collection("distelec").insertOne(Distelec, function(err, res) {
  if (err) throw err;
  console.log("document inserted");
    });
});  

}

function processFile(fileName) {
  count = 1
  var fs = require('fs'),
        readline = require('readline'),
        instream = fs.createReadStream(fileName),
        outstream = new (require('stream'))(),
        rl = readline.createInterface(instream, outstream);
  
   rl.on('line', function (line) {
      line = line.trim()
      var array = line.split(',')
      var myobj = { codeelect: array[0], provincia: array[1], canton : array[2], distrito: array[3] }
      insertIntoDB(myobj)
    }); 

}

console.log(processFile("./files/Distelec.csv"))
