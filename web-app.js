var express = require("express");

var app = express();
app.get("/", function(req, res) {
  res.redirect("/index.html");
})
app.use("/index.html", express.static("index.html"));
app.use(express.static("static"));
app.use(express.static("public"));

app.use("/repo", express.static("archiv"));

app.listen(8099);
console.log("Server start on 8099.");