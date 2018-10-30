//alert("det virker");

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

    document.querySelector("#playsign").addEventListener("click", hideStart);
}


function hideStart() {
    console.log("hideStart");
    //stop animation på start-knap
    document.querySelector("#playsign").classList.add("pulse");
    //fade startskærm ud
    document.querySelector("#start").classList.add("fade_out");

    //når fade animationen er færdig -> startGame
    document.querySelector("#start").addEventListener("animationend", startGame);
}

function startGame() {
    console.log("startGame");
    //skjul startskærm
    document.querySelector("#start").classList.add("hide");
    //vis spilskærm
    document.querySelector("#game").classList.add("show");
}
