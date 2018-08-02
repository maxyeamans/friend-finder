
const surveyQuestions = [
// Questions for survey:
    "I closely follow politics.",
    "My ideal night of fun would be going to a sports game.",
    "The best Christmas movie ever made is Die Hard.",
    "My preferred pet would be a dog instead of a cat.",
    "Marvel comics are better than DC comics.",
    "I like to play Fortnite: Battle Royale.",
    "I can grocery shop and cook my own meals with no outside help.",
    "I'm okay going on vacation with no real itenerary.",
    "I prefer having a small group of friends that I know really well instead of a large group of friends that I only partially know.",
    "I'm always down to go see live music even if I don't know what band is playing."
];

surveyQuestions.forEach( question, index =>{
    $("<div>").attr({
        class: "survey-question"
    })
});