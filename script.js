       let currentQuestionIndex = 0;
        const questions_70s = [
            {
                Question: "Which Band wrote the song 'How Deep is Your Love'?",
                Answers: [
                    {
                        Answer: "The Beatles",
                        Correct: false,
                    },
                    {
                        Answer: "Fleetwood Mac",
                        Correct: false,
                    },
                    {
                        Answer: "Bee Gees",
                        Correct: true,
                    },
                    {
                        Answer: "Led Zeppelin",
                        Correct: false,
                    },
                ],
            },
            {
                Question: "Which Band wrote the song 'Mr. Blue Sky'?",
                Answers: [
                    {
                        Answer: "The Beatles",
                        Correct: false,
                    },
                    {
                        Answer: "Fleetwood Mac",
                        Correct: false,
                    },
                    {
                        Answer: "Bee Gees",
                        Correct: true,
                    },
                    {
                        Answer: "Led Zeppelin",
                        Correct: false,
                    },
                ],
            },
        
            

            
        ];
        // const person = ["Andrew" , "Ghenet", "Thomas"]

        // const person =[ {
        //     firstName: "John",
        //     lastName: "Doe",
        //     age: 50,
        //     eyeColor: "blue",
            
        //   },{
        //     firstName: "Andrew",
        //     lastName: "Eacho",
        //     age: 50,
        //     eyeColor: "blue",
            
        //   }]

        //   person[0].lastName



        function checkAnswer(isCorrect) {
            if (isCorrect) {
                alert("Correct!");
                

                //questions_70s[0] question should be questions_70s[i+1]
                displayQuestion[i+1]
            } else {

                alert("Incorrect. Try Again");
            
            } 

        }
        console.log(questions_70s[0].Answers)
        console.log(questions_70s[0].Answers[0].Answer)

        function checkAndNext(isCorrect) {
            

            if (isCorrect) {

            currentQuestionIndex++;

            if (currentQuestionIndex < questions_70s.length) {
                displayQuestion(currentQuestionIndex);
            } else {
                alert("Quiz completed!");
            }
        }

        //have an array of objects for q and a's just from line 2 to 50. 
        //  for displayQUestion function the get question set id from the array (line 103)
        // call display question function if correct!!!
        

        function displayQuestion(i) {
            const decadeQuestions = document.getElementById("#decade-questions");
            const questionSetId = questions_70s[i+1]
            console.log(questionSetId)
            decadeQuestions.innerHTML = document.getElementById(questionSetId).innerHTML;
        }


        document.addEventListener('DOMContentLoaded', function () {
            const links = document.querySelectorAll('#home-screen ul a');

            links.forEach(function (link) {
                link.addEventListener('click', function (event) {
                    event.preventDefault();
                    const decade = event.target.getAttribute('href').substring(1);
                    showDecade(decade);
                     console.log(decade)
                });
            });
        });

        function showDecade(decade) {
            document.getElementById('home-screen').style.display = 'none';
            const decadeQuestions = document.getElementById('decade-questions');
            const questionSetId = `${decade}-question-set-1`;
            decadeQuestions.innerHTML = document.getElementById(questionSetId).innerHTML;

            decadeQuestions.style.display = 'block';
        }