const path = require("path");

module.exports = app => {
    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
        console.log("Sending survey page...");
    });
};