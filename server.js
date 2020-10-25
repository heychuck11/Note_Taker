var express = require("express");
var fs = require("fs");
var app = express();
var PORT = process.env.PORT || 3500;
const path = require("path")

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'));

var notes = require("./db/db.json")

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname,'', 'notes.html'))
})

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
