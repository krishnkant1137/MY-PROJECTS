var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;

}

function makeBobble(){
    var clutter = "";

for(var i=1; i<=96; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += ` <div class="bobble">${rn}</div>`
}
document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    var timeend = setInterval( function () {
        if (timer>0){
            timer--;
            document.querySelector("#timerval").textContent= timer
        }
        else {
            clearInterval(timeend);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over </h1>`;
        }
    },1000);
}

document.querySelector("#pbtm").addEventListener("click",function (details){
    var clickednum = Number(details.target.textContent);
    if (clickednum == hitrn){
        increaseScore();
        makeBobble();
        getNewHit();
    }

})
runTimer()
makeBobble()
getNewHit()
increaseScore()