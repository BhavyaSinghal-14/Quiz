// Simple Quiz Game - Lab Assignment 4
// Made by: Bhavya Singhal

const quizQuestions = [
    { question: "What is the capital of India?", answer: "delhi" },
    { question: "Which tag is used for the largest heading in HTML?", answer: "<h1>" },
    { question: "What does HTML stand for?", answer: "hypertext markup language" },
    { question: "CSS is used for?", answer: "styling" },
    { question: "What is 5 + 7?", answer: "12" }
];



function runQuiz() {

    let score = 0; 

    
    for (let i = 0; i < quizQuestions.length; i++) {

       
        let userAnswer = prompt(quizQuestions[i].question);

        
        if (userAnswer === null) {
            alert("Quiz ended early!");
            return;
        }

        
        userAnswer = userAnswer.toLowerCase().trim();

        
        if (userAnswer === quizQuestions[i].answer) {
            score++;
            alert("Correct! ✅");
        } else {
            alert("Wrong ❌\nCorrect Answer: " + quizQuestions[i].answer);
        }
    }

    
    alert("Quiz Completed!\nYour Score: " + score + " / " + quizQuestions.length);
}



runQuiz();
