//alert("det virker");

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    //nulstil alting

    //-> showstart
    showStart();
}

function showStart() {
    console.log("showStart");
    //vis startskærm
    document.querySelector("#start").classList.add("show");
    //start animation på startknap

    document.querySelector("#playsign").classList.add("pulse");
    document.querySelector("#settingsign").classList.add("pulse");
    document.querySelector("#infosign").classList.add("pulse");

    document.querySelector("#playsign").addEventListener("click", hideStart);

    document.querySelector("#settingsign").addEventListener("click", hideStart);

    document.querySelector("#infosign").addEventListener("click", hideStart);

}

function hideStart() {
    console.log("hideStart");
    //stop animation på start-knap
    document.querySelector("#playsign").classList.remove("pulse");

    //fade startskærm ud
    document.querySelector("#start").classList.add("fade_out");

    //når fade animationen er færdig -> startGame
    document.querySelector("#start").addEventListener("animationend", startGame);
    document.querySelector("#start").classList.remove("show");
}

//function showSettings() {
//    console.log(showSettings)
//
//    document.querySelector("#start").classList.add("hide");
//
//    document.querySelector("#settings").classList.add("show");
//
//
//    document.querySelector("#kryds").addEventListener("click", showStart);
//}
//
//
//
//function showInfo() {
//    console.log(showInfo)
//
//    document.querySelector("#start").classList.add("hide");
//
//    document.querySelector("#information").classList.add("show");
//
//
//    document.querySelector("#kryds1").addEventListener("click", showStart);
//}

function startGame() {
    console.log("startGame");
    //skjul startskærm
    document.querySelector("#start").classList.add("hide");
    //vis spilskærm
    document.querySelector("#game").classList.add("show");


    document.querySelector("#gave").addEventListener("click", clickGave);
    document.querySelector("#candy").addEventListener("click", clickCandy);
    document.querySelector("#bombe").addEventListener("click", clickBombe);
}

let point = 0;

function clickGave() {
    console.log("clickGave")
    point++;
    console.log(point);
    document.querySelector(".antal").textContent = point;
}


let liv = 3;

function clickBombe() {
    console.log("clickBombe")

    let heart = "#heart" + liv;
    document.querySelector(heart).classList.add("hide");
    console.log("#heart" + liv);
    liv--;
    console.log(liv);
}


function clickCandy() {
    console.log("clickCandy")
    let heart = "#heart" + liv;
    document.querySelector(heart).classList.add("show");
    console.log("#heart" + liv);
    liv++;
    console.log(liv);
}
