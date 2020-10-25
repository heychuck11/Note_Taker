var express = require("express");
var fs = require("fs");
var app = express();
var PORT = 3500;

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'));

var notes = require("./db.json")

app.post("/:notes", function(req,res) {
  const newNotes = req.body
  notes.push(newNotes)
  fs.writeFile("db.json", JSON.stringify(notes), function(err){
    res.send("new notes added");
    res.end;
  })
})



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
})
