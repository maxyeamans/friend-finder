// Import friend data
const friendData = require("../data/friends");

module.exports = app => {

    // Get all friends list results
    app.route("/api/friends")
    .get( (req, res) => {
        res.json(friendData);
    })
    .post( (req, res) => {

        const newResults = req.body;

        let lowestScoreDiff = 41;
        let lowestScoreIndex = 0;

        friendData.forEach( (friend, index) => {
            let score = compareArrays(newResults.scores, friend.scores);
            if (score < lowestScoreDiff) {
                lowestScoreDiff = score;
                lowestScoreIndex = index;
            }
        });

        friendData.push(newResults);

        res.json(friendData[lowestScoreIndex]);

    });
};

function compareArrays(arrFirst, arrSecond) {
    // Declare variable to hold eventual result
    let result;
    result = arrFirst
        // Iterate over the two array to create new array of answer differences
        .map((item, ind) => {
            // Returns the difference between the two answers
            return Math.abs(parseInt(item) - parseInt(arrSecond[ind]));
        })
        // Reduce the array of answer differences to total difference
        .reduce((accumulator, currentVal) => {
            return accumulator + currentVal;
        });
    return result;
};