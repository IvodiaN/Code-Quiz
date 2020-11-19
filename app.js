console.log('Am in the game ')

//Create an Array that holds the question and answers
var quesAnswer = [
    {
        question: 'Which is the most beautiful country in Africa ____?',
        answerOptions: ['Cameroon', 'Nigeria', 'Ghana'],
        answer:"Cameroon"
    },
    {
        question: 'Capital of USA ____?',
        answerOptions: ['Transylvania', 'Washington DC', 'Florida'],
        answer:"Washington DC"
    },
    {
        question: 'Who is the Saviour of the universe ____?',
        answerOptions: ['Donald Trump', 'Jesus Christ', 'Joe Biden'],
        answer:"Jesus Christ"
    },
    {
        question: 'What rings a bell when you hear the word TITANIC ____?',
        answerOptions: ['A ship made in 2019', 'A movie', 'a bus driver'],
        answer:"A movie"
    },
    {
        question: 'Who will be the winner of the 2020 election ____?',
        answerOptions: ['Joe Biden', 'Trump', 'We just need a president'],
        answer:"We just need a president"
    }
]

window.onload = init;

function init() {
    console.log("Loaded")
    //Variables 
    var answers,
        question,
        correctAns,
        displayQA,
        listBut,
        i = 0,
        len,
        num,
        timer = 60,
        deducer = 5,
        interval;
   // create timer
    interval = setInterval(() => {
        timer--
        console.log(timer)
        if (timer === 0) {
            clearInterval(interval)
            document.querySelector('#timer').innerHTML += `You loose try again`
        }
    }, 1000)

  //call the function
    getQuestions()
    display()
    next()

function getQuestions() {
        len = quesAnswer.length;
    //loog through array of questions and extract as needed
        for (i = 0; i < len; i++){
            question = quesAnswer[i].question
            // console.log(question)
            //Loop through array of answer Options and style
            answers = quesAnswer[i].answerOptions
                answers.map((answer) => {
                return `${answer}`
            });
            correctAns = quesAnswer[i].answer;
                
    }  
        
}

   
    function display() {
        displayQA = document.querySelector('#questionsArea');       
        displayQA.innerHTML = `
        <div>
            <h2>${question}</h2>      
            <ol>
                <li> ${answers[0]} </li>
                <li> ${answers[1]} </li>
                <li> ${answers[2]} </li>
            </ol>
        </div>
        `
    } 
    
    function next() {
        listBut = document.querySelectorAll('li');
        listBut.forEach(element => {
            element.addEventListener('click',()=> {
                if (element.innerText === correctAns) {
                    console.log('correct') 
                } else {
                    if (element.innerText !== correctAns) {
                      console.log('wrong')
                    }
                }              
            })
        });
    }

    f
}

