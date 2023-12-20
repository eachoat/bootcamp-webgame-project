let currentQuestionIndex = 0;
const questions_70s=[
    {
        Question:"Which Band wrote the song 'How Deep is Your Love'?",
        Answers:[
            {
                Answer:"The Beatles",
                Correct: false,
                
                Answer:"Fleetwoord Mac",
                Correct: false,

                Answer:"Bee Gees",
                Correct: true,

                Answer:"Led Zeppelin",
                Correct: false,

            }
        ]
    }
]
function checkAnswer(isCorrect) {
    if (isCorrect) {
    alert("Correct!")

    
    
    currentQuestionIndex++
    if (currentQuestionIndex < questions_70s.length) {
        displayQuestion()
    } else {
        alert("Quiz completed!");
    }
}   else {
    alert("Incorrect. Try Again")
}}


document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('#home-screen ul a')

    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault()
            const decade = event.target.getAttribute('href').substring(1)
            showDecade(decade)
        });
    });
});

function showDecade(decade) {
    document.getElementById('home-screen').style.display = 'none'
    const decadeQuestions = document.getElementById('decade-questions')
    const questionSetId = `${decade}-question-set-1`
    decadeQuestions.innerHTML = document.getElementById(questionSetId).innerHTML

    decadeQuestions.style.display = 'block'
}



