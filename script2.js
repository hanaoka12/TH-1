var questions = [
    {
            type: "true_false",
            question: "I am satisfied with my current job.",
            answer: true // Correct answer is true
        },
        {
            type: "true_false",
            question: "I enjoy spending time outdoors.",
            answer: true // Correct answer is true
        },
        {
            type: "true_false",
            question: "I have traveled to at least 3 different countries.",
            answer: false // Correct answer is false
        },
        {
            type: "true_false",
            question: "I exercise regularly.",
            answer: true // Correct answer is true
        },
        {
            type: "true_false",
            question: "I prefer reading books over watching TV shows.",
            answer: true // Correct answer is true
        },
        {
            type: "true_false",
            question: "I consider myself to be a good cook.",
            answer: false // Correct answer is false
        },
        {
            type: "true_false",
            question: "I speak more than one language fluently.",
            answer: false // Correct answer is false
        },
        {
            type: "true_false",
            question: "I am satisfied with my current living situation.",
            answer: true // Correct answer is true
        },
        {
            type: "true_false",
            question: "I enjoy trying new foods.",
            answer: true // Correct answer is true
        },
        {
            type: "true_false",
            question: "I have a pet.",
            answer: true // Correct answer is true
        },
        
        
        {
            type: "single_correct",
            question: "What is your preferred method of transportation?",
            options: ["Car", "Public transport", "Bicycle", "Walking"],
            answer: 0 // Index of correct option
        },
        {
            type: "single_correct",
            question: "How often do you eat out?",
            options: ["Rarely", "Once a week", "2-3 times a week", "Every day"],
            answer: 2 // Index of correct option
        },
        {
            type: "single_correct",
            question: "What is your favorite type of cuisine?",
            options: ["Italian", "Mexican", "Asian", "Mediterranean"],
            answer: 2 // Index of correct option
        },
        {
            type: "single_correct",
            question: "How many hours of sleep do you get per night on average?",
            options: ["Less than 6 hours", "6-7 hours", "7-8 hours", "More than 8 hours"],
            answer: 2 // Index of correct option
        },
        {
            type: "single_correct",
            question: "How often do you exercise?",
            options: ["Never", "Once a week", "2-3 times a week", "Every day"],
            answer: 2 // Index of correct option
        },
        {
            type: "single_correct",
            question: "Do you enjoy cooking?",
            options: ["Yes", "No", "Sometimes", "I'm indifferent"],
            answer: 0 // Index of correct option
        },
        {
            type: "single_correct",
            question: "What is your favorite leisure activity?",
            options: ["Reading", "Watching movies", "Hiking", "Playing video games"],
            answer: 2 // Index of correct option
        },
        {
            type: "single_correct",
            question: "Are you satisfied with your current living space?",
            options: ["Yes", "No", "Somewhat", "I'm not sure"],
            answer: 0 // Index of correct option
        },
        {
            type: "single_correct",
            question: "Do you have any pets?",
            options: ["Yes", "No", "I used to", "I'm planning to get one"],
            answer: 0 // Index of correct option
        },
        {
            type: "single_correct",
            question: "How often do you travel for leisure?",
            options: ["Rarely", "Once a year", "2-3 times a year", "More than 3 times a year"],
            answer: 2 // Index of correct option
        },
        {
            type: "multiple",
            question: "Which of the following are your favorite fruits?",
            options: ["Apple", "Banana", "Orange", "Grapes"],
            answers: [0, 1] // Indexes of correct options
        },
        {
            type: "multiple",
            question: "Which of the following hobbies do you enjoy?",
            options: ["Reading", "Painting", "Gardening", "Cooking"],
            answers: [0, 1, 2] // Indexes of correct options
        },
        {
            type: "multiple",
            question: "Which of the following social media platforms do you use?",
            options: ["Facebook", "Instagram", "Twitter", "LinkedIn"],
            answers: [0, 1, 2] // Indexes of correct options
        },
        {
            type: "multiple",
            question: "Which of the following activities do you enjoy in your free time?",
            options: ["Watching movies", "Playing sports", "Going for a walk", "Listening to music"],
            answers: [0, 2, 3] // Indexes of correct options
        },
        {
            type: "multiple",
            question: "Which of the following cuisines do you enjoy eating?",
            options: ["Italian", "Mexican", "Japanese", "Indian"],
            answers: [0, 1, 2] // Indexes of correct options
        },
        {
            type: "multiple",
            question: "Which of the following vacation destinations would you like to visit?",
            options: ["Beach resort", "Mountain retreat", "Historical city", "Adventure park"],
            answers: [0, 1, 2] // Indexes of correct options
        },
        {
            type: "multiple",
            question: "Which of the following TV genres do you enjoy watching?",
            options: ["Comedy", "Drama", "Documentary", "Reality show"],
            answers: [0, 1] // Indexes of correct options
        },
        {
            type: "multiple",
            question: "Which of the following musical instruments can you play?",
            options: ["Guitar", "Piano", "Violin", "Drums"],
            answers: [0, 1] // Indexes of correct options
        },
        {
            type: "multiple",
            question: "Which of the following languages can you speak fluently?",
            options: ["English", "Spanish", "French", "German"],
            answers: [0, 1] // Indexes of correct options
        },
        {
            type: "multiple",
            question: "Which of the following sports do you enjoy playing?",
            options: ["Soccer", "Basketball", "Tennis", "Swimming"],
            answers: [0, 2] // Indexes of correct options
        },
        {
            type: "text_input",
            question: "What is your favorite color?",
            answer: "blue"
        },
        {
            type: "text_input",
            question: "What is your favorite food?",
            answer: "pizza"
        },
        {
            type: "text_input",
            question: "What is your favorite movie?",
            answer: "The Shawshank Redemption"
        },
        {
            type: "text_input",
            question: "What is your favorite hobby?",
            answer: "reading"
        },
        {
            type: "text_input",
            question: "What is your favorite animal?",
            answer: "dog"
        },
        {
            type: "text_input",
            question: "What is your favorite book?",
            answer: "To Kill a Mockingbird"
        },
        {
            type: "text_input",
            question: "What is your favorite season?",
            answer: "summer"
        },
        {
            type: "text_input",
            question: "What is your favorite sport?",
            answer: "soccer"
        },
        {
            type: "text_input",
            question: "What is your favorite holiday?",
            answer: "Christmas"
        },
        {
            type: "text_input",
            question: "What is your favorite music genre?",
            answer: "rock"
        }
    ];
    
    // Display questions
    var currentQuestion = 0;
    displayQuestions();
    
    function displayQuestions() {
        var questionsContainer = document.getElementById("questionsContainer");
        questionsContainer.innerHTML = ""; // Clear previous questions
        for (var i = 0; i < questions.length; i++) {
            var questionDiv = document.createElement("div");
            questionDiv.innerHTML = "<h3>Question " + (i + 1) + ": " + questions[i].question + "</h3>";
            
            if (questions[i].type === "true_false") {
                for (var j = 0; j < 2; j++) {
                    var option = document.createElement("input");
                    option.type = "radio";
                    option.name = "option" + i;
                    option.value = (j === 0) ? "true" : "false";
                    var label = document.createElement("label");
                    label.textContent = (j === 0) ? "True" : "False";
                    questionDiv.appendChild(option);
                    questionDiv.appendChild(label);
                    questionDiv.appendChild(document.createElement("br"));
                }
            } else if (questions[i].type === "multiple") {
                for (var j = 0; j < questions[i].options.length; j++) {
                    var option = document.createElement("input");
                    option.type = "checkbox";
                    option.name = "option" + i;
                    option.value = j;
                    var label = document.createElement("label");
                    label.textContent = questions[i].options[j];
                    questionDiv.appendChild(option);
                    questionDiv.appendChild(label);
                    questionDiv.appendChild(document.createElement("br"));
                }
            } else if (questions[i].type === "single_correct") {
                for (var j = 0; j < questions[i].options.length; j++) {
                    var option = document.createElement("input");
                    option.type = "radio";
                    option.name = "option" + i;
                    option.value = j;
                    var label = document.createElement("label");
                    label.textContent = questions[i].options[j];
                    questionDiv.appendChild(option);
                    questionDiv.appendChild(label);
                    questionDiv.appendChild(document.createElement("br"));
                }
            } else if (questions[i].type === "text_input") {
                var input = document.createElement("input");
                input.type = "text";
                input.name = "textAnswer" + i; // Ensure unique names for each input field
                questionDiv.appendChild(input);
            }
            
            questionsContainer.appendChild(questionDiv);
        }
    }
    
    document.getElementById('submitBtn').addEventListener('click', function() {
        const score = calculateScore();
        const totalQuestions = questions.length;
    const answers = getAnswers();
        document.getElementById('result').innerText = 'Kết quả: ' + score + '/' + questions.length;
        const answersString = encodeURIComponent(JSON.stringify(answers));
window.location.href = `result.html?score=${score}&totalQuestions=${totalQuestions}&answers=${answersString}`;
    });
    function getAnswers() {
        const userAnswers = [];
        for (let i = 0; i < questions.length; i++) {
            const question = questions[i];
            let userAnswer;
            if (question.type === "text_input") {
                userAnswer = document.querySelector('input[name="textAnswer' + i + '"]').value;
            } else if (question.type === "single_correct") {
                const selectedOption = document.querySelector('input[name="option' + i + '"]:checked');
                userAnswer = selectedOption ? getOptionText(question.options, parseInt(selectedOption.value)) : null;
            } else if (question.type === "multiple") {
                const selectedOptions = Array.from(document.querySelectorAll('input[name="option' + i + '"]:checked'));
                userAnswer = selectedOptions.map(option => getOptionText(question.options, parseInt(option.value)));
            }
            userAnswers.push({
                correctAnswer: question.answer,
                userAnswer: userAnswer
            });
        }
        return userAnswers;
    }
    
    function getOptionText(options, index) {
        if (options && index >= 0 && index < options.length) {
            return options[index];
        }
        return null;
    }
    function calculateScore() {
        let score = 0;
        for (let i = 0; i < questions.length; i++) {
            if (questions[i].type === "true_false") {
                const selectedOption = document.querySelector('input[name="option' + i + '"]:checked');
                if (selectedOption) {
                    const selectedValue = selectedOption.value === "true";
                    if (selectedValue === questions[i].answer) {
                        score++;
                    }
                }
            } else if (questions[i].type === "multiple") {
                const selectedOptions = Array.from(document.getElementsByName("option" + i))
                    .filter(option => option.checked)
                    .map(option => parseInt(option.value));
                const correctAnswers = questions[i].answers;
                if (arraysEqual(selectedOptions, correctAnswers)) {
                    score++;
                }
            } else if (questions[i].type === "single_correct") {
                const selectedOption = document.querySelector('input[name="option' + i + '"]:checked');
                if (selectedOption) {
                    const selectedValue = parseInt(selectedOption.value);
                    if (selectedValue === questions[i].answer) {
                        score++;
                    }
                }
            }  else if (questions[i].type === "text_input") {
                const inputAnswer = document.querySelector('input[name="textAnswer' + i + '"]').value;
                if (inputAnswer.toLowerCase() === questions[i].answer.toLowerCase()) {
                    score++;
                }
            } 
        }
        return score;
    }
    
    function arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }