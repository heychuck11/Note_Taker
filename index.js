var PORT = process.env.PORT || 3500;

app.get("/", function(req,res){
  res.json(path.join(__dirname, "public/index.html"));
});