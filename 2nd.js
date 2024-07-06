let ysc=0;
let csc=0;

box = document.querySelector("#pick")
you = document.querySelector("#yscore")
comp = document.querySelector("#cscore")

let  choices = document.querySelectorAll(".ga")

const genCompChoice = () =>{
    const arr=["rock" , "paper" , "scissors"]
    let idx= Math.floor(Math.random()*3)
    return arr[idx]


};
const drawGame = ()=>{
    console.log("Game Drawn...!");
    box.style.backgroundColor=("black")
    box.innerHTML = "GAME DRAWN"
};
// let displayResult = (userWin) => {
//     if (userWin) {
//         console.log("You Won..!");
//     }
//     else {
//         console.log("You Lose");
//     }
// };



let playGame = (userChoice) => {
    console.log("user choice", userChoice);
    const compChoice = genCompChoice(); // Ensure genCompChoice is defined elsewhere
    console.log("comp choice", compChoice);

    if (userChoice === compChoice) {
        // draw
        drawGame(); // Ensure drawGame is defined elsewhere
    } else {
        let userWin = 1;
        if (userChoice === "rock") {
            userWin = compChoice === "scissors" ? 1 : 0;
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock" ? 1 : 0;
        } else if (userChoice === "scissors") {
            userWin = compChoice === "paper" ? 1 : 0;
        }

        if (userWin === 1) {
            console.log("YOU WON");
            box.style.backgroundColor = ("Green");
            box.innerHTML = (`YOU WON...!  your ${userChoice} beats ${compChoice}`);
            ysc++;
            you.innerHTML = (` ${ysc}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp`)
        } else {
            console.log("YOU LOST");
            box.style.backgroundColor = "red"
            box.innerHTML = `YOU LOST...! ${compChoice} beats your ${userChoice}`
            csc++;
            comp.innerHTML = (csc)
        }
    }
};




choices.forEach((choice) =>{
    console.log(choice)
    choice.addEventListener("click", ()=>{
       const userChoice = choice.getAttribute("id")
       playGame(userChoice)

    });

});