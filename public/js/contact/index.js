const presta = document.querySelector('#presta');
const formMariage = document.querySelector('.form__mariage');

function showMariageForm() {
    if (presta.value == "mariage") {
        formMariage.style.display = "flex";
    } else {
        formMariage.style.display = "none";
    }
}

presta.addEventListener('click', showMariageForm);
