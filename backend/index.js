const express = require("express");
const app = express();

app.get("/", function (req, res) {
//   res.send("<h1 style: color>Hello,Lucario<h1>");
res.write("Hello, ")
res.write("Lucario! :V:V:VXDXD")
res.end()
});

app.listen(3000)