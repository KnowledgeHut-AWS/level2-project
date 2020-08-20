var express = require("express");
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/office", (req, res) => {
    res.json([
        {
            "id": "1",
            "country": "Kenya",
            "city": "Nairobi"
        },
        {
            "id": "2",
            "country": "Saudi Arabia",
            "city": "Riyadh"
        },
        {
            "id": "3",
            "country": "Netherlands",
            "city": "Amsterdam"
        },
        {
            "id": "4",
            "country": "USA",
            "city": "New York"
        }
    ]);
});

app.listen(80, () => {
    console.log("Offices service running on port 80");
});

