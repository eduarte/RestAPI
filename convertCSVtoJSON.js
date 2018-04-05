var csv = require("csvtojson");

csv()
  .fromFile("\\Distelec.csv")
  .on("end_parsed",function(jsonArrayObj){ //when parse finished, result will be emitted here.
     console.log(jsonArrayObj); 
   })