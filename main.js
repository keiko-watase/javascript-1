let time = document.getElementById("time");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let hours = 0;
let minutes = 0;
let seconds = 0;

//カウント
function stopWatch(){
    seconds++;
    if(seconds >= 60){
        minutes++;
        seconds = 0;
        if(minutes >= 60){
            hours++;
            minutes = 0;
        }
    }
    time.innerHTML = hours + ":" + minutes + ":" + seconds;
}

//ボタン制御
function setButtonStateInitial() {
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = true;
}
function setButtonStateRunning() {
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = true;
}
function setButtonStateStopped() {
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = false;
}

//発火
start.addEventListener("click",function(){
    count = setInterval(stopWatch, 1000);
    setButtonStateRunning();
})
stop.addEventListener("click",function(){
    clearInterval(count);
    setButtonStateStopped();
})
reset.addEventListener("click",function(){
    hours = 0;
    minutes = 0;
    seconds = 0;
    setButtonStateInitial();
    time.innerHTML = hours + ":" + minutes + ":" + seconds;
})

