let pbtm = document.querySelector("#pbtm");
let music = document.getElementById("click-sound");

let hitVal = "";
let score = 0;

function makeBubble() {
    let cluster = "";
    for (let i = 0; i <= 188; i++) {
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


function increseScore() {

    pbtm.addEventListener("click", (detls) => {
        let bubbleVal = Number(detls.target.textContent);
        // console.log(bubbleVal);

        if (bubbleVal === hitVal) {
            score += 10;
            document.getElementById("scoreval").textContent = score;
            hitRn();
            makeBubble();
            music.currentTime = 0;
            music.play();


        } else {
            console.log("Wrong Selection .....  ")
        }
    })


}

function runTimer() {

    let timer = 60;
    let yourInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.getElementById("timeval").textContent = timer;
        } else {
            clearInterval(yourInterval);
            document.getElementById("pbtm").innerHTML = `
                                        <div>  
                                        <h2 class="gameover"> Game Over </h2> 
                                        <h1 class="score"> Your Score is 🎰 ${score}</h1>
                                        </div>
            `;
        }
    }, 1000);


}

increseScore()
runTimer()
makeBubble();
hitRn();