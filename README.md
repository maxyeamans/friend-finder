# Friend Finder

Take the quiz and find some friends in the Marvel universe (and maybe some outside Marvel). Access this app at https://sleepy-reef-98692.herokuapp.com/

## What is this?

In this app, you'll answer some oddly specific questions to match you up with a friend in the Marvel universe. The front-end is created with HTML, Bootstrap, jQuery, and a form library called Chosen. The back-end runs on Node and uses Express for routing (no databases in this one.)

## How does it work?

Each of the answers to the questions has a numerical value. After finishing the quiz, each of your answers are compared to the answers of those who already took the quiz. The app saves the differential between the answers for every respondent, sums them up, and stores the index of the person who matches up most closely to your answers.

## What next?

- Dynamically populate the questions using jQuery or a templating engine
