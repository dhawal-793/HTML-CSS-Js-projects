// Variables
const rollBtn = document.querySelector(".btn")
const Heading = document.querySelector(".heading")
const dice1 = document.getElementById("dice1")
const dice2 = document.getElementById("dice2")


// Checking the winner
const checkWin = (r1, r2) => {
    Heading.innerText = r1 > r2 ? "Player 1 Won" : r1 < r2 ? "Player 2 Won" : "Draw";
}

// Assigning random dice image to both dices
const randomNumber = () => {
    const random_number1 = Math.floor(Math.random() * 6) + 1;
    const random_number2 = Math.floor(Math.random() * 6) + 1;
    const dice1_image = `assets/dice${random_number1}.png`;
    const dice2_image = `assets/dice${random_number2}.png`;
    dice1.setAttribute("src", dice1_image);
    dice2.setAttribute("src", dice2_image);
    checkWin(random_number1, random_number2);
}

// Roll
const Roll = () => {
    randomNumber();
}

// Adding click event listener to Roll button
rollBtn.addEventListener("click", Roll)