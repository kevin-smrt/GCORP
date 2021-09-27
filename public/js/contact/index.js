// Récupère les éléments qui servent à afficher le formulaire de mariage
const presta = document.querySelector('#presta');
const formMariage = document.querySelector('.form__mariage');

function showMariageForm() {
    // Si l'élément select a la valeur mariage
    if (presta.value == "mariage") {
        // Ajoute la valeur flex au formulaire de mariage
        formMariage.style.display = "flex";
    } else {
        // Sinon, le cache
        formMariage.style.display = "none";
    }
}

// Ajout de l'écouteur d'evenement sur le bouton select
presta.addEventListener('click', showMariageForm);
