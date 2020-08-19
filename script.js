let buttons = document.querySelectorAll("button")
let computerArray = ["rock", "paper", "scissors"]
let playerCount = 0
let computerCount = 0

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", decideWinner);
}
$("#playerCount").text(playerCount)
$("#computerCount").text(computerCount)

function decideWinner(e) {
    let choice = e.target.value
    let computerChoice = computerArray[Math.floor(Math.random() * 3)]

    if (choice === "rock") {
        $(".playerImg").hide()
        $("#playerRock").show()
    }
    if (choice === "paper") {
        $(".playerImg").hide()
        $("#playerPaper").show()
    }
    if (choice === "scissors") {
        $(".playerImg").hide()
        $("#playerScissors").show()
    }

    if (computerChoice === "rock") {
        $(".computerImg").hide()
        $("#computerRock").show()
    }
    if (computerChoice === "paper") {
        $(".computerImg").hide()
        $("#computerPaper").show()
    }
    if (computerChoice === "scissors") {
        $(".computerImg").hide()
        $("#computerScissors").show()
    }


    if (choice === computerChoice) {
        console.log("tie", choice, computerChoice)
    } else if (choice === "rock" && computerChoice === "scissors") {
        playerCount++;
        $("#playerCount").text(playerCount)
        console.log("player Wins", choice, computerChoice)
    } else if (choice === "scissors" && computerChoice === "paper") {
        playerCount++;
        $("#playerCount").text(playerCount)
        console.log("player Wins", choice, computerChoice)
    } else if (choice === "paper" && computerChoice === "rock") {
        playerCount++;
        $("#playerCount").text(playerCount)
        console.log("player Wins", choice, computerChoice)
    } else {
        computerCount++;
        $("#computerCount").text(computerCount)
        console.log("computer wins", choice, computerChoice)
    }

    if (playerCount === 5) {
        console.log("player Wins the whole game!!");
        $("#playerWin").show()
        $("button").attr("disabled", true)
        setTimeout(() => {
            $("#playerWin").hide()
            $(".playerImg").hide()
            $(".computerImg").hide()
            playerCount = 0
            computerCount = 0
            $("#playerCount").text(playerCount)
            $("#computerCount").text(computerCount)
            $("button").attr("disabled", false)
        }, 5000);
    }
    if (computerCount === 5) {
        console.log("computer Wins the whole game!!");
        $("#computerWin").show()
        $("button").attr("disabled", true)
        setTimeout(() => {
            $("#computerWin").hide()
            $(".playerImg").hide()
            $(".computerImg").hide()
            playerCount = 0
            computerCount = 0
            $("#playerCount").text(playerCount)
            $("#computerCount").text(computerCount)
            $("button").attr("disabled", false)
        }, 5000);
    }
}

//visibility: visible