      //  questions_70s Questions/Answers

      let currentQuestionIndex = 0;
      let currentQuestions= []

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
                        Correct: true,
                    },
                    {
                        Answer: "AC/DC",
                        Correct: false,
                    },
                    {
                        Answer: "Queen",
                        Correct: false,
                    },
                    {
                        Answer: "Eagles",
                        Correct: false,
                    },
                ],
            },      
        ];

        


        //  questions_80s Questions/Answers
        
        const questions_80s = [
            {
                Question: "Which Band wrote the song 'Africa'?",
                Answers: [
                    {
                        Answer: "A-Ha",
                        Correct: false,
                    },
                    {
                        Answer: "Toto",
                        Correct: true,
                    },
                    {
                        Answer: "The Police",
                        Correct: false,
                    },
                    {
                        Answer: "U2",
                        Correct: false,
                    },
                ],
            },
            {
                Question: "Which Band wrote the song 'Take On Me'?",
                Answers: [
                    {
                        Answer: "Journey",
                        Correct: false,
                    },
                    {
                        Answer: "Billy Joel",
                        Correct: false,
                    },
                    {
                        Answer: "A-Ha",
                        Correct: true,
                    },
                    {
                        Answer: "U2",
                        Correct: false,
                    },
                ],
            },
            {
                Question: "Which Band wrote the song 'I Will Follow'?",
                Answers: [
                    {
                        Answer: "Journey",
                        Correct: false,
                    },
                    {
                        Answer: "Def Leppard",
                        Correct: false,
                    },
                    {
                        Answer: "Billy Joel",
                        Correct: false,
                    },
                    {
                        Answer: "U2",
                        Correct: true,
                    },
                ],
            },
            {
                Question: "Which Band wrote the song 'Uptown Girl'?",
                Answers: [
                    {
                        Answer: "Journey",
                        Correct: false,
                    },
                    {
                        Answer: "Def Leppard",
                        Correct: false,
                    },
                    {
                        Answer: "Billy Joel",
                        Correct: true,
                    },
                    {
                        Answer: "Hall and Oates",
                        Correct: false,
                    },
                ],
            },
            {
                Question: "Which Band wrote the song 'Feeling That Way'?",
                Answers: [
                    {
                        Answer: "Journey",
                        Correct: true,
                    },
                    {
                        Answer: "Queen",
                        Correct: false,
                    },
                    {
                        Answer: "The Police",
                        Correct: false,
                    },
                    {
                        Answer: "Hall and Oates",
                        Correct: false,
                    },
                ],
            },
            {
                Question: "Which Band wrote the song 'Private Eyes'?",
                Answers: [
                    {
                        Answer: "Journey",
                        Correct: false,
                    },
                    {
                        Answer: "Def Leppard",
                        Correct: false,
                    },
                    {
                        Answer: "The Police",
                        Correct: false,
                    },
                    {
                        Answer: "Hall and Oates",
                        Correct: true,
                    },
                ],
            },
            {
                Question: "Which Band wrote the song 'Another One Bites the Dust'?",
                Answers: [
                    {
                        Answer: "Queen",
                        Correct: true,
                    },
                    {
                        Answer: "Def Leppard",
                        Correct: false,
                    },
                    {
                        Answer: "The Police",
                        Correct: false,
                    },
                    {
                        Answer: "David Bowie",
                        Correct: false,
                    },
                ],
            },
            {
                Question: "Which Band wrote the song 'Photograph'?",
                Answers: [
                    {
                        Answer: "Journey",
                        Correct: false,
                    },
                    {
                        Answer: "Def Leppard",
                        Correct: true,
                    },
                    {
                        Answer: "David Bowie",
                        Correct: false,
                    },
                    {
                        Answer: "Rolling Stones",
                        Correct: false,
                    },
                ],
            },
            {
                Question: "Which Band wrote the song 'Undercover of the Night'?",
                Answers: [
                    {
                        Answer: "Poison",
                        Correct: false,
                    },
                    {
                        Answer: "Heart",
                        Correct: false,
                    },
                    {
                        Answer: "David Bowie",
                        Correct: false,
                    },
                    {
                        Answer: "Rolling Stones",
                        Correct: true,
                    },
                ],
            },
            {
                Question: "Which Band wrote the song 'Under Pressure'?",
                Answers: [
                    {
                        Answer: "Poison",
                        Correct: false,
                    },
                    {
                        Answer: "Heart",
                        Correct: false,
                    },
                    {
                        Answer: "David Bowie",
                        Correct: true,
                    },
                    {
                        Answer: "Van Halen",
                        Correct: false,
                    },
                ],
            },    
        ];



         //  questions_90s Questions/Answers
        
         const questions_90s = [
            {
                Question: "Which Band wrote the song 'Black Hole Sun'?",
                Answers: [
                    {
                        Answer: "Radiohead",
                        Correct: false,
                    },
                    {
                        Answer: "Pearl Jam",
                        Correct: false,
                    },
                    {
                        Answer: "Soundgarden",
                        Correct: true,
                    },
                    {
                        Answer: "Green Day",
                        Correct: false,
                    },
                ],
            },
            {
                Question: "Which Band wrote the song 'Karma Police",
                Answers: [
                    {
                        Answer: "Radiohead",
                        Correct: true,
                    },
                    {
                        Answer: "Pearl Jam",
                        Correct: false,
                    },
                    {
                        Answer: "Nirvana",
                        Correct: false,
                    },
                    {
                        Answer: "Green Day",
                        Correct: false,
                    },
                ],
            },
            {
                Question: "Which Band wrote the song 'Lithium'?",
                Answers: [
                    {
                        Answer: "Red Hot Chili Peppers",
                        Correct: false,
                    },
                    {
                        Answer: "Blink-182",
                        Correct: false,
                    },
                    {
                        Answer: "Nirvana",
                        Correct: true,
                    },
                    {
                        Answer: "Green Day",
                        Correct: false,
                    },
                ],
            },
            {
                Question: "Which Band wrote the song 'Under the Bridge'?",
                Answers: [
                    {
                        Answer: "Red Hot Chili Peppers",
                        Correct: true,
                    },
                    {
                        Answer: "Smash Mouth",
                        Correct: false,
                    },
                    {
                        Answer: "Pearl Jam",
                        Correct: false,
                    },
                    {
                        Answer: "Green Day",
                        Correct: false,
                    },
                ],
            },
            {
                Question: "Which Band wrote the song 'Basket Case'?",
                Answers: [
                    {
                        Answer: "Beastie Boys",
                        Correct: false,
                    },
                    {
                        Answer: "Blink-182",
                        Correct: false,
                    },
                    {
                        Answer: "Pearl Jam",
                        Correct: false,
                    },
                    {
                        Answer: "Green Day",
                        Correct: true,
                    },
                ],
            },
            {
                Question: "Which Band wrote the song 'Just'?",
                Answers: [
                    {
                        Answer: "Beastie Boys",
                        Correct: false,
                    },
                    {
                        Answer: "Smash Mouth",
                        Correct: false,
                    },
                    {
                        Answer: "Weezer",
                        Correct: false,
                    },
                    {
                        Answer: "Radiohead",
                        Correct: true,
                    },
                ],
            },
            {
                Question: "Which Band wrote the song 'Intergalactic'?",
                Answers: [
                    {
                        Answer: "Beastie Boys",
                        Correct: true,
                    },
                    {
                        Answer: "Blink-182",
                        Correct: false,
                    },
                    {
                        Answer: "Weezer",
                        Correct: false,
                    },
                    {
                        Answer: "Smashing Pumpkins",
                        Correct: false,
                    },
                ],
            },
            {
                Question: "Which Band wrote the song 'Buddy Holly'?",
                Answers: [
                    {
                        Answer: "Metallica",
                        Correct: false,
                    },
                    {
                        Answer: "Smash Mouth",
                        Correct: false,
                    },
                    {
                        Answer: "Weezer",
                        Correct: true,
                    },
                    {
                        Answer: "Blink-182",
                        Correct: false,
                    },
                ],
            },
            {
                Question: "Which Band wrote the song 'Alive'?",
                Answers: [
                    {
                        Answer: "Metallica",
                        Correct: false,
                    },
                    {
                        Answer: "Pearl Jam",
                        Correct: true,
                    },
                    {
                        Answer: "Smash Mouth",
                        Correct: false,
                    },
                    {
                        Answer: "Blink-182",
                        Correct: false,
                    },
                ],
            }, 
            {
                Question: "Which Band wrote the song 'All Star'?",
                Answers: [
                    {
                        Answer: "Metallica",
                        Correct: false,
                    },
                    {
                        Answer: "Pearl Jam",
                        Correct: false,
                    },
                    {
                        Answer: "Smash Mouth",
                        Correct: true,
                    },
                    {
                        Answer: "Blink-182",
                        Correct: false,
                    },
                ],
            },
            
        ];

        
        



            // checkAnswer for 70's Questions

        function checkAnswer(isCorrect) {
            if (isCorrect) {
                alert("Correct!");

                currentQuestionIndex++;
                if (currentQuestionIndex < currentQuestions.length) {
                    displayQuestion(currentQuestions, currentQuestionIndex);
                }
               
                } else {

                alert("Incorrect. Try Again");
            
            } 

        }
        console.log(questions_70s[0].Answers)
        console.log(questions_70s[0].Answers[0].Answer)






        //have an array of objects for q and a's just from line 2 to 50. 
        //  for displayQUestion function get question set id from the array (line 103)
        // call display question function if correct!!!
        

            // displayQuestion for 70's Questions

        function displayQuestion(currentQuestions, i) {
            const questionData = currentQuestions[i];
        
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
            switch (decade) {
                case '70s':
                    currentQuestions = questions_70s;
                    break;
                case '80s':
                    currentQuestions = questions_80s;
                    break;
                case '90s':
                    currentQuestions = questions_90s;
                    break;
                default:
                    return;
                    
            }

  
        
            
            document.getElementById('home-screen').style.display = 'none';
            const decadeQuestions = document.getElementById('decade-questions');
            const questionSetId = `${decade}-question-set-1`;
            decadeQuestions.innerHTML = document.getElementById(questionSetId).innerHTML;

            decadeQuestions.style.display = 'block';
        }