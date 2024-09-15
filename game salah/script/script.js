// Fonction pour sélectionner un élément aléatoire
function gridAleatoire(variable) {
    const randomIndex = Math.floor(Math.random() * variable.length);
    return variable[randomIndex]; // Correction: utiliser 'variable' pour renvoyer l'élément
}

// Fonction pour changer le style d'un élément de grille
function changeStyleGrid(variable) {
    variable.style.backgroundColor = "green"; // Correction: utiliser 'backgroundColor' et non 'backendColor'
}

// Fonction principale du jeu
function Game() {
    var result = document.getElementById("infoDiv-points-points");
    var infoDivinformation = document.getElementById("infoDiv-information");

    // Initialiser le score à 0 (assurez-vous que 'result' est un élément HTML)
    result.innerText = 0;

    // Récupérer toutes les cases de la grille
    var allGrid = document.getElementsByClassName("grid-item");

    // Sélectionner une case aléatoire
    var gameCase = gridAleatoire(allGrid);

    // Changer la couleur de la case sélectionnée
    changeStyleGrid(allGrid[gameCase]);

    // Ajouter un écouteur d'événement pour détecter le clic sur la case
    gameCase.addEventListener("click", function() {
        // Incrémenter le score quand la case est cliquée
        result.innerText = parseInt(result.innerText) + 1;

        // Mettre à jour l'information
        infoDivinformation.innerText = "Bravo";

        // Relancer le jeu
        Game(); // Appeler la fonction à nouveau pour relancer la sélection d'une nouvelle case
    });
}

// Fonction pour démarrer le jeu
function startGame() {
    var infoDivinformation = document.getElementById("infoDiv-information");
    infoDivinformation.innerText = "Start Game !!!"; // Correction: modifier innerText pour mettre à jour le texte
}
