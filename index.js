var PORT = process.env.PORT || 3500;

app.listen()

app.get("/", function(req,res){
  res.json(path.join(__dirname, "public/index.html"));
});