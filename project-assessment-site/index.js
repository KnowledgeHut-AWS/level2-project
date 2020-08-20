var express = require("express");
var app = express();

app.use(express.static('public'))

app.listen(80, () => {
    console.log("Project Assessment Website: running on port 80");
});
