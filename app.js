const diss = document.querySelector(".display");
var mintdis=document.getElementById("mint")
var secdis=document.getElementById("sec")
var countdis=document.getElementById("count")
var mint = 0
var sec = 0
var count = 0;
var timer = false;
function starte() {
    timer = true;
    stopwatch();
    document.getElementById("start").disabled = true
}
function stop() {
    timer = false;
    document.getElementById("start").disabled = false
}
function reset() {
    timer = false
    mint = 0;
    sec = 0;
    count = 0;
    mintdis.innerHTML = "00";
    secdis.innerHTML = "00"
    countdis.innerHTML = "00"
    document.getElementById("start").disabled =false
console.log(countdis);
}
function stopwatch() {
    if (timer === true) {
        count = count + 1
        if (count === 100) {
            sec = sec + 1
            count = 0
        }
        if (sec === 60) {
            mint = mint + 1
            sec = 0
        }
        if (mint === 60) {
            mint = 0
        }
        var mintSt = mint;
        var secSt = sec;
        var countSt = count;
        if (mint < 10) {
            mintSt = "0" + mintSt;
        }
        if (sec < 10) {
            secSt = "0" + secSt;
        }
        if (count < 10) {
            countSt = "0" + countSt;
        }
        mintdis.innerHTML = mintSt;
        secdis.innerHTML = secSt;
        countdis.innerHTML = countSt;
        // mintdis.innerHTML = mintSt;
console.log(countSt);
        setTimeout("stopwatch()", 10)

    }
}
