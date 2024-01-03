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
                        Answer: "The Temptations",
                        Correct: false,
                    },
                    {
                        Answer: "Electric Light Orchestra",
                        Correct: true,
                    },
                    {
                        Answer: "Bee Gees",
                        Correct: false,
                    },
                    {
                        Answer: "Aerosmith",
                        Correct: false,
                    },
                ],
            },
            {
                Question: "Which Band wrote the song 'Superstition'?",
                Answers: [
                    {
                        Answer: "Parliament",
                        Correct: false,
                    },
                    {
                        Answer: "Electric Light Orchestra",
                        Correct: false,
                    },
                    {
                        Answer: "The Temptations",
                        Correct: false,
                    },
                    {
                        Answer: "Stevie Wonder",
                        Correct: true,
                    },
                ],
            },
            {
                Question: "Which Band wrote the song 'Just My Imagination'?",
                Answers: [
                    {
                        Answer: "Sly And The Family Stone",
                        Correct: false,
                    },
                    {
                        Answer: "The Temptations",
                        Correct: true,
                    },
                    {
                        Answer: "Pink Floyd",
                        Correct: false,
                    },
                    {
                        Answer: "Parliament",
                        Correct: false,
                    },
                ],
            },
            {
                Question: "Which Band wrote the song 'Get Back'?",
                Answers: [
                    {
                        Answer: "Beatles",
                        Correct: true,
                    },
                    {
                        Answer: "AC/DC",
                        Correct: false,
                    },
                    {
                        Answer: "Pink Floyd",
                        Correct: false,
                    },
                    {
                        Answer: "Led Zeppelin",
                        Correct: false,
                    },
                ],
            },
            {
                Question: "Which Band wrote the song 'When the Levee Breaks'?",
                Answers: [
                    {
                        Answer: "Beatles",
                        Correct: false,
                    },
                    {
                        Answer: "AC/DC",
                        Correct: false,
                    },
                    {
                        Answer: "Rolling Stones",
                        Correct: false,
                    },
                    {
                        Answer: "Led Zeppelin",
                        Correct: true,
                    },
                ],
            },
            {
                Question: "Which Band wrote the song 'Dream On'?",
                Answers: [
                    {
                        Answer: "Beatles",
                        Correct: false,
                    },
                    {
                        Answer: "Aerosmith",
                        Correct: true,
                    },
                    {
                        Answer: "Rolling Stones",
                        Correct: false,
                    },
                    {
                        Answer: "Pink Floyd",
                        Correct: false,
                    },
                ],
            },
            {
                Question: "Which Band wrote the song 'Sara Smile'?",
                Answers: [
                    {
                        Answer: "Beatles",
                        Correct: false,
                    },
                    {
                        Answer: "AC/DC",
                        Correct: false,
                    },
                    {
                        Answer: "Pink Floyd",
                        Correct: false,
                    },
                    {
                        Answer: "Hall and Oates",
                        Correct: true,
                    },
                ],
            },
            {
                Question: "Which Band wrote the song 'Somebody to Love'?",
                Answers: [
                    {
                        Answer: "Sly and the Family Stone",
                        Correct: false,
                    },
                    {
                        Answer: "AC/DC",
                        Correct: false,
                    },
                    {
                        Answer: "Queen",
                        Correct: true,
                    },
                    {
                        Answer: "Hall and Oates",
                        Correct: false,
                    },
                ],
            },
            {
                Question: "Which Band wrote the song 'Comfortably Numb'?",
                Answers: [
                    {
                        Answer: "Pink Floyd",
                        Correct: false,
                    },
                    {
                        Answer: "AC/DC",
                        Correct: false,
                    },
                    {
                        Answer: "Queen",
                        Correct: true,
                    },
                    {
                        Answer: "Eagles",
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

                currentQuestionIndex++;
                if (currentQuestionIndex < questions_70s.length) {
                    displayQuestion(currentQuestionIndex);
                }
                

                //questions_70s[0] question should be questions_70s[i+1]
               
            } else {

                alert("Incorrect. Try Again");
            
            } 

        }
        console.log(questions_70s[0].Answers)
        console.log(questions_70s[0].Answers[0].Answer)





        //have an array of objects for q and a's just from line 2 to 50. 
        //  for displayQUestion function get question set id from the array (line 103)
        // call display question function if correct!!!
        

        function displayQuestion(i) {
            const questionData = questions_70s[i];
        
            const questionTextElement = document.getElementById("question-text");
            questionTextElement.textContent = questionData.Question;
                console.log(questionTextElement)
        
            const answersContainer = document.getElementById("answers-container");
            answersContainer.innerHTML = '';
                console.log(answersContainer)
        
            questionData.Answers.forEach(answer => {
                const answerButton = document.createElement('button');
                answerButton.textContent = answer.Answer;
                answerButton.addEventListener('click', () => checkAnswer(answer.Correct));
                answersContainer.appendChild(answerButton);
            });
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