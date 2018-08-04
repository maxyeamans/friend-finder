const path = require("path");

module.exports = app => {
    
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
        console.log("Sending home page")
    });

    app.get("/home", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
        console.log("Sending home page")
    });

    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
        console.log("Sending survey page...");
    });
};