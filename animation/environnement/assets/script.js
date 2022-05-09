const questions = [

    {   
        question:
         "What percentage of earth’s land is covered by forests?"
        ,
        optionA: "10",
        optionB: "31",
        optionC: "1",
        optionD: "20",
        correctOption: "optionB",
        imagee:'assets/img/landimg/tree.png',
        identt:'Image4',
        doc: "31% of our planet is covered by forests, which produce oxygen and provide homes for both animals and people. They also give us food, water, clothing, medicine and keep our air clean and breathable"
        
    },

    {
        question: "What percentage of trees had humans chopped down?",
        optionA: "17",
        optionB: "46",
        optionC: "21",
        optionD: "37",
        correctOption: "optionB",
        imagee:'assets/img/landimg/trees.png',
        identt:'Image3',
        doc: 'Be it due to small-scale agriculture and the need for fuelwood or to open up space for large farmlands and cities, humans have cut almost 50% of the world’s trees.'
    },

    {
        question: "What percent of our trash can be recycled?",
        optionA: "50%",
        optionB: "45%",
        optionC: "90%",
        optionD: "75%",
        correctOption: "optionD",
        imagee:'assets/img/landimg/poubelle4.png',
        identt:'Image2',
        doc: 'Remember how much trash we throw away? Well, 75% of that trash could be recycled instead! That could mean a lot of trash saved from going to the landfill and dumps.'
    },

    {
        question: "How much food is wasted in a year?",
        optionA: "1.5 Tons",
        optionB: "2 Tons",
        optionC: "21.4 Million Tons",
        optionD: "20 Tons",
        correctOption: "optionC",
        imagee:'assets/img/landimg/flower2.png',
        identt:'Image1',
        doc: 'A whopping 21.5 million tons of food is thrown away each year. If we composted that amount of food to turn it into soil, it would have the same effect as removing 2 million cars off the roads'
    },

    {
        question: "When you go to the supermarket, it's best to...",
        optionA: "Take your own reusable bag from home. ",
        optionB: "Buy a reusable bag.",
        optionC: "Buy a paper bag.",
        optionD: "Buy a plastic bag.",
        correctOption: "optionA",
        imagee:'assets/img/landimg/flower2.png',
        identt:'Image5',
        doc: 'Reusable bags require more energy to produce than common plastic shopping bags. One reusable bag requires the same amount of energy as an estimated 28 traditional plastic shopping bags or eight paper bags.'
    },
    {
        question: "What happens to plastic waste when left in the environment?",
        optionA: "It never fully goes away, it just breaks into little pieces",
        optionB: "There is no such thing as plastic waste, all plastic is recycled",
        optionC: "It is a biodegradable material so it eventually disintegrates",
        optionD: "It goes away",
        correctOption: "optionA",
        imagee:'assets/img/landimg/poubelle2.png',
        identt:'Image6',
        doc: 'Plastics at SEA (Sea Education Association): North Pacific Expedition 2012, a 36-day nautical research journey through the the North Pacific subtropical gyre down to the Hawaiian islands, found this to be true. The team was studying plastic pollution in the ocean and found that out of the 66,077 pieces of plastic collected in samples, 95% of it was millimeters in size.'
    },
    {
        question: "What is the most ubiquitous type of 'litter' on the planet?",
        optionA: "Candy wrappers",
        optionB: "Plastic straws",
        optionC: "Cigarette butts",
        optionD: "Coffee cups/lids",
        correctOption: "optionC",
        imagee:'assets/img/landimg/flower1.png',
        identt:'Image8',
        doc: 'Cigarette butts comprise half of all littered objects, and they are consistently the most common litter found on beaches during the annual International Coastal Cleanup Day'
    },
    {
        question: "Which greenhouse gas do trees help remove from the atmosphere?",
        optionA: "hydrogen",
        optionB: "Nitrous oxide",
        optionC: "Methane",
        optionD: "Carbon dioxide",
        correctOption: "optionD",
        imagee:'assets/img/landimg/cloud2.png',
        identt:'Image9',
        doc: 'Carbon dioxide is one of the most abundant greenhouse gases. When trees perform photosynthesis they suck it up and store it, which removes it from the atmosphere!'
    },

    {
        question: "Premature deaths caused by pollution are expected to increase as more people move to",
        optionA: "developed nations",
        optionB: "urban centres",
        optionC: "country towns",
        optionD: "rural areas",
        correctOption: "optionB",
        imagee:'assets/img/landimg/cloud1.png',
        identt:'Image10',
        doc: 'Among all types of ecosystems, urban produce roughly 78% of carbon emissions and substantial airborne pollutants that adversely affect over 50% of the world’s population living in them'
    }

    


]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 8) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}

let questionNumber = 1 //holds the current question number
let playerScore = 100  //holds the player score
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
            playerScore++ //adding to player's score
            
            
             
            document.getElementById('doc-modal').style.display = "flex"  
               
             
                
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
        if (indexNumber <= 8) {
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
    NextQuestion(indexNumber)*/
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