var total = 0;

function gridAleatoire(variable) {
    const randomIndex = Math.floor(Math.random() * variable.length);
    return variable[randomIndex];
}

function changeStyleGrid(element) {
    element.style.backgroundColor = "green";
}

function Game() {
    var result = document.getElementById("infoDiv-points-points");
    var infoDivinformation = document.getElementById("infoDiv-information");

    var allGrid = document.getElementsByClassName("grid-item");


    for (var i = 0; i < allGrid.length; i++) {
        allGrid[i].style.backgroundColor = "";
        allGrid[i].addEventListener("click", function() {
            if (this !== gameCase) {
                infoDivinformation.innerText = "Wrong choice!!";
            }
        }, { once: true });
    }

    var gameCase = gridAleatoire(allGrid);
    changeStyleGrid(gameCase);
    gameCase.addEventListener("click", function() {
        total += 1;
        result.innerText = total;
        infoDivinformation.innerText = "Bravo!";
        Game();
    }, { once: true });
}

function startGame() {
    var infoDivinformation = document.getElementById("infoDiv-information");
    infoDivinformation.innerText = "Start Game !!!";
    total = 0;
    var result = document.getElementById("infoDiv-points-points");
    result.innerText = total;

    Game();
}
