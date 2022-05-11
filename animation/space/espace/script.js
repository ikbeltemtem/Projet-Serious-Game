const questions = [

    {   
        question:"How many moons does Mars have?",
        optionA: "1",
        optionB: "3",
        optionC: "2",
        optionD: "13",
        correctOption: "optionC",
        imagee:'assets/img/Image6.png',
        identt:'Image6',
        doc: "Mars has two moons ,Phobos and Deimos."

        
    },

    {
        question: "What are comets mostly made of?",
        optionA: "Hot,liquid rock",
        optionB: "Rusty material",
        optionC: "Dirty ice and dust",
        optionD: "Poisonous liquid",
        correctOption: "optionC",
        imagee:'assets/img/Image11.png',
        identt:'Image11',
        doc: "Comets are mostly made of snow,ice,and dust."  
   },

    {
        question: "Which is the closest planet to the sun?",
        optionA: "Mercury",
        optionB: "Neptune",
        optionC: "Earth",
        optionD: "Venus",
        correctOption: "optionA",
        imagee:'assets/img/Image3.png',
        identt:'Image3',
        doc: 'Mercury is the closest planet to the sun,Neptune is the furthest.Earth is the third planet from the sun and Venus is second'
   },

    {
        question: "What is the sun mainly made of?",
        optionA: "Molten iron",
        optionB: "Gas",
        optionC: "Rock",
        optionD: "Liquid lava",
        correctOption: "optionB",
        imagee:'assets/img/Image4.png',
        identt:'Image4',
        doc: 'The sun is mainly made from hydrogen and helium gas '
     },

    {
        question: "We see streaks of light or “shooting stars” at night but they’re known as what scientific name?",
        optionA: "Comet",
        optionB: "Meteor",
        optionC: "Asteroid",
         optionD: "Meteroid",
        correctOption: "optionD",
        imagee:'assets/img/Image12.png',
        identt:'Image12',
        doc: 'A meteoroid is a chunk of rock, nickel and iron that travels through space. When a meteoroid enters Earth’s atmosphere it is called a meteor, or “shooting star.” You can see meteors at night when they are 75 to 120 km above the Earth.'
   },

    { 
        question: "Which freezing planet is the farthest away from the Sun?",
        optionA: "Jupiter",
        optionB: "Neptune",
        optionC: "Venus",
        optionD: "Saturn",
        correctOption: "optionB",
        imagee:'assets/img/Image10.png',
        identt:'Image10',
        doc: "Neptune is considered an ice planet because of the thick slushy mix of ammonia, water and methane ices under its atmosphere. Being the eighth planet from the Sun, it gets very little sunlight to help warm its atmosphere. And Neptune is a very windy place — here, the wind can reach up to 2,400 kph on the surface."
   }, 
  
   {
      question:"How many Earth days are in Venus’s year?",
      optionA:"225",
      optionB:"365",
      optionC:"250",
      optionD:"135",
      correctOption:"optionA",
      imagee:'assets/img/Image5.png',
      identt:"Image5",
      doc:"It takes Venus longer to rotate once on its axis than to complete one orbit of the Sun. That’s 243 Earth days to rotate once – the longest rotation of any planet in the Solar System – and only 224.7 Earth days to complete an orbit of the Sun."
    },

    {
        question:"Saturn is made mostly up of...?",
        optionA:"Gas",
        optionB:"Dirt",
        optionC:"Iron",
        optionD:"Glass",
        correctOption:"optionA",
        imagee:'assets/img/Image8.png',
        identt:'Image8',
        doc:'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth.'

    },

    {
        question:"in wich direction uranus rotates",
        optionA:"no rotation",
        optionB:"same direction as the earth",
        optionC:"opposite direction to the earth",
        optionD:"same direction as Neptune",
        correctOption:"optionC",
        imagee:'assets/img/Image9.png',
        identt:'Image9',
        doc:'Uranus rotates in the opposite direction than most planets, from East to West. It is also the only planet known to rotate on its side.'
    },

    {
        question:"how long the Great Red Spot has been around on Jupiter",
        optionA:"350 years",
        optionB:"1000 years",
        optionC:"500 years",
        optionD:"550 years",
        correctOption:"optionA",
        imagee:"assets/img/Image7.png",
        identt:'Image7',
        doc:'The Great Red Spot on Jupiter is one of its most familiar features. This persistent anticyclonic storm, which is located south of its equator, measures between 24,000 km in diameter and 12–14,000 km in height. As such, it is large enough to contain two or three planets the size of Earth’s diameter. And the spot has been around for at least 350 years, since it was spotted as far back as the 17th century.'

    }





]

let documentation =["premiere doc","deuxieme doc","troisieme doc", "quatrieme doc"]
let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}

let questionNumber = 1 //holds the current question number
let playerScore = 50  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}
function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null
    
    
   
    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
       
    })
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }
   

    //checking if checked radio button is same as answer
   
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore+=100 //adding to player's score
            
            setTimeout(() => {
             
            document.getElementById('doc-modal').style.display = "flex"  
        }, 1000)   
             
                
            indexNumber++;//adding 1 to index so has to display next question..
            
            //set to delay question number till when next question loads
            setTimeout(() => {
               
                questionNumber++
            }, 1000)
            
            document.getElementById(currentQuestion.identt).src= currentQuestion.imagee ;
            document.getElementById("1").innerHTML=currentQuestion.doc;
             
           
          
           
           
        }

         else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
           // document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            playerScore -= 50 
            
            //set to delay question number till when next question loads
            document.getElementById('reanswer-modal').style.display = "flex"
            setTimeout(() => {
                //questionNumber++
            }, 1000) 
           
        }
    })
}




//called when the next button is called
function handleNextQuestion() {
    //checkForAnswer() //check if player picked right or wrong option
  
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <=9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
            
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);

}
//called when the submit button is called
function handleSubmitQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
   
   
    

}
//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}
// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null
    

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
   
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
//function to close doc modal
function closeDocModal() {
    document.getElementById('doc-modal').style.display = "none"
}
//function to close reanswer modal
function closeReanswerModal() {
    document.getElementById('reanswer-modal').style.display = "none"
}