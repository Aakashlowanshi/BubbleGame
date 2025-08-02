let pbtm = document.querySelector("#pbtm");
let rightMusic = document.getElementById("click-right-sound");
let wrongMusic = document.getElementById("click-wrong-sound");
let panel = document.getElementById("panel");

let hitVal = " ";
let score = 0;
let timer = 60;

document.getElementById("startgame").addEventListener("click", startGame)

function startGame() {
    panel.classList.remove("panelrecreated")
    panel.style.display = "block";
    document.getElementById("startgame").style.display = "none";

    increseScore()
    runTimer()
    makeBubble();
    hitRn();
}

function makeBubble() {
    let cluster = "";
    for (let i = 0; i <= 188; i++) {
        // for (let i = 0; i <= 50; i++) {
        let rn = Math.floor(Math.random() * 10);
        cluster += `<div class="bubble">
                        ${rn}
                        </div>`
    }
    pbtm.innerHTML = cluster;
    console.log("code run ")
}

function hitRn() {
    hitVal = Math.floor(Math.random() * 10);
    document.getElementById("hitval").textContent = hitVal
}

function runTimer() {
    let yourInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.getElementById("timeval").textContent = timer;
        } else {
            clearInterval(yourInterval);
            panel.innerHTML = `
                                        <div class ="gameoverdiv">  
                                        <h2 class="gameovertext"> Game Over </h2> 
                                        <h1 class="score"> Your Score is 🎰 ${score}</h1>
                                        <button id="playagaingame"> Play Again </button>
                                        </div>
                                    
            `;
            panel.classList.add("panelrecreated");

            document.getElementById("playagaingame").addEventListener("click", () => {
                console.log("Click Play Again button ");
                location.reload();
            })

        }
    }, 1000);


}

function increseScore() {

    pbtm.addEventListener("click", (detls) => {
        let bubbleVal = Number(detls.target.textContent);
        // console.log(bubbleVal);


        if (bubbleVal === hitVal) {
            score += 10;
            document.getElementById("scoreval").textContent = score;
            hitRn();
            makeBubble();
            rightMusic.currentTime = 0;
            rightMusic.play();


        } else {
            console.log("Wrong Selection .....  ")
            wrongMusic.currentTime = 0;
            wrongMusic.play();
        }
    })


}




