let userScore = 0;
let ComputerScore = 0;

const choice = ['stone', 'paper', 'scissors'];
// computerchoice
function computerChoice() {
    const random_No = (Math.floor(Math.random() * 3));
    return choice[random_No];

}

// userchoice and play
function play(userChoice) {
    const computer = computerChoice();
    triggerShake();
    setTimeout(() => {
        const result = compairChoices(userChoice, computer);
        //update img
        update_image(userChoice, computer)
        // Update result text
        document.querySelector(".playerPoints").textContent = userScore;
        document.querySelector(".computerPoints").textContent = ComputerScore;
        document.querySelector(".message").textContent = result;
        showGameBanner(result);
        // Optional: Log for debugging
        console.log(`User: ${userChoice}, Computer: ${computer}, Result: ${result}`);
    }, 1000);
};

//compair function
function compairChoices(user, computer) {
    let message = '';
    if (user === computer) {
        userScore++;
        ComputerScore++;
        message = `IT's a draw`;
    }
    else if (
        (user === 'stone' && computer === 'scissors') ||
        (user === 'paper' && computer === 'stone') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        userScore = userScore + 3;
        message = `You win  CONGRATS!!`;
    }
    else {

        ComputerScore = ComputerScore + 3;
        message = `You lose  try again to win `;
    }
    return message;
}

function update_image(userChoice, computer) {
    document.getElementById('user-img').src = `./assets/gameImages/${userChoice}-Player.png`
    console.log(`User image path: assets/gameImages/${userChoice}-Player.png`);
    document.getElementById('computer-img').src = `./assets/gameImages/${computer}-Computer.png`
}




//allert feature
function showGameBanner(message) {
    const banner = document.getElementById("game-banner");
    banner.textContent = message;
    banner.classList.remove("hidden");

    // Hide it after 3 seconds
    setTimeout(() => {
        banner.classList.add("hidden");
    }, 3000);
}

//triggring the shaking animation 
function triggerShake() {
    const userImg = document.getElementById('user-img');
    const computerImg = document.getElementById('computer-img');

    // Reset animation
    userImg.classList.remove('shakePlayer');
    computerImg.classList.remove('shakeComputer');
    void userImg.offsetWidth;
    void computerImg.offsetWidth;

    // Add shake
    userImg.classList.add('shakePlayer');
    computerImg.classList.add('shakeComputer');
}

