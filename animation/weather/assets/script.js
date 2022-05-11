const questions = [

    {   
        question:
         "What is evaporation?"
        ,
        optionA: "Water freezes",
        optionB: "Water vapor meets cold air and changes back into liquid.",
        optionC: "Water gets warm and changes from liquid water to water vapor",
        optionD: "Plants take in water from the soil.",
        correctOption: "optionC",
        imagee:'assets/img/Evaporation.png',
        identt:'Evaporation',
        doc: "Evaporation is when a liquid changes into a gas. Liquid water evaporates to become a gas called water vapor.Evaporation happens when a liquid is heated. The heat gives the iquid’s molecules more energy. This energy causes the molecules to move faster. If they gain enough energy, the molecules near the surface break away. These molecules escape the liquid and enter the air as gas."
        
    },

    {
        question: "What is the correct term for moisture that falls to the ground from clouds?",
        optionA: "condensation",
        optionB: " precipitation",
        optionC: "hibernation",
        optionD: "evaporation",
        correctOption: "optionB",
        imagee:'assets/img/precipitation.png',
        identt:'precipitation',
        doc: 'Precipitation occurs when warm air pushes water vapor high into the atmosphere. When it cools, the vapor condenses into water droplets that can stay liquid or freeze into hail or snowflakes. If enough condensation collects to saturate the air, it will fall back to earth as precipitation.'
    },

    {
        question: "What is the correct term for plants releasing water from their leaves, which then evaporates?",
        optionA: "condensation",
        optionB: "evaporation",
        optionC: "precipitation",
        optionD: "transpiration",
        correctOption: "optionD",
        imagee:'assets/img/transpiration.png',
        identt:'transpiration',
        doc: 'the evaporation of water from plants, especially leaves. It is a type of translocation and part of the water cycle. The amount of water lost by a plant depends on its size, the light intensity, temperature, humidity, wind speed, and soil water supply.The process of Transpiration helps in regulating temperature in the plant.'
    },

    {
        question: "What is the correct term for rising water vapor meeting colder air and turning back into water droplets?",
        optionA: "transpiration",
        optionB: "precipitation",
        optionC: "condensation",
        optionD: "dehydration",
        correctOption: "optionC",
        imagee:'assets/img/condensation.png',
        identt:'condensation',
        doc: 'Condensation is the process through which the physical state of matter changes from the gaseous phase into the liquid phase.It happens when molecules of water vapor cool and collect together as liquid water.'
        
    },

    {
        question: "What is Infiltration ?",
        optionA: "the process by which water on the ground surface enters the soil.",
        optionB: "the process by which water changes from a liquid to a gas vapor.",
        optionC: "the process of water that flows over the land surface.",
        optionD: "rain, snow, sleet, or hail.",
        correctOption: "optionA",
        imagee:'assets/img/infiltration.png',
        identt:'infiltration',
        doc: "Infiltration happens when water soaks into the soil from the ground level. It moves underground and moves between the soil and rocks. Some of the water will be soaked up by roots to help plants grow. The plant's leaves eventually release the water into the air through the plant's pours as waste."
    }

    


]

let documentation =["premiere doc","deuxieme doc","troisieme doc", "quatrieme doc"]
let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 4) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}

let questionNumber = 1 //holds the current question number
let playerScore = 50 //holds the player score
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
            playerScore+=100//adding to player's score
            
            
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
            //indexNumber++
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
        if (indexNumber <= 4) {
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
   /* questionNumber = 1
    playerScore= 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber) */ 
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