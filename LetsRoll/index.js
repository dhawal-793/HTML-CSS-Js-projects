// Variables
const rollBtn = document.querySelector(".btn")
const Heading = document.querySelector(".heading")
const dice1 = document.getElementById("dice1")
const dice2 = document.getElementById("dice2")
const player1_score = document.getElementById("p1-score")
const player2_score = document.getElementById("p2-score")
const attempts = document.getElementById("attempts")




// Checking the winner and updating the Scores
const checkWin = (r1, r2) => {
    if (r1 === r2) Heading.innerText = "Draw";
    else if (r1 > r2) {
        player1_score.innerText = parseInt(player1_score.innerText) + 1;
        Heading.innerText = "Player 1 Won";
    }
    else {
        player2_score.innerText = parseInt(player2_score.innerText) + 1;
        Heading.innerText = "Player 2 Won";
    }
}


// Assigning random dice image to both dices
const randomNumber = () => {
    const random_number1 = Math.floor(Math.random() * 6) + 1;
    const random_number2 = Math.floor(Math.random() * 6) + 1;
    const dice1_image = `assets/dice_${random_number1}.png`;
    const dice2_image = `assets/dice_${random_number2}.png`;
    dice2.setAttribute("src", dice2_image);
    dice1.setAttribute("src", dice1_image);
    checkWin(random_number1,random_number2)
}

// Roll
const Roll = () => {

    attempts.innerText = parseInt(attempts.innerText) + 1;

    randomNumber();
}

// Adding click event listener to Roll button
rollBtn.addEventListener("click", Roll)