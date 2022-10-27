
const rollBtn = document.querySelector(".btn")
const Heading = document.querySelector(".heading")
const dice1 = document.getElementById("dice1")
const dice2 = document.getElementById("dice2")



const checkWin = (r1, r2) => {
    if (r1 > r2) {
        console.log("Player 1 Won")
        Heading.innerText = "Player1 Won"
    }
    else if (r1 < r2) {
        console.log("Player 2 Won")
        Heading.innerText = "Player2 Won"
    }
    else {
        console.log("No One Won")
        Heading.innerText = "Draw"
    }
}

const randomNumber = () => {
    const random_number1 = Math.floor(Math.random() * 6) + 1;
    const random_number2 = Math.floor(Math.random() * 6) + 1;
    const dice1_image = `assets/dice${random_number1}.png`;
    const dice2_image = `assets/dice${random_number2}.png`;
    dice1.setAttribute("src", dice1_image);
    dice2.setAttribute("src", dice2_image);
    console.log(random_number1, random_number2);
    checkWin(random_number1, random_number2);
}

const Roll = () => {
    console.log(dice1, dice2, player1, player2);
    randomNumber();
}



rollBtn.addEventListener("click", Roll)