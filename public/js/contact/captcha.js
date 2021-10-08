// Récupère le formulaire de contact
const formContainer = document.querySelector('.form-container');

// Fonction pour reset les valeurs du formulaire
function resetForm() {
    document.querySelector('#name').value = "";
    document.querySelector('#email').value = "";
    document.querySelector('#tel').value = "";
    document.querySelector('#place').value = "";
    document.querySelector('#date').value = "";
    document.querySelector('#details').value = "";
}

// Fonction qui empeche le comportement par défaut de l'element passé en argument
function runVerify(e) {
    e.preventDefault();
    runCaptcha();
}

// Execute l'appel à l'API de google en générant un token de captcha
function runCaptcha() {
    grecaptcha.execute("6LeAZ7UcAAAAADPAwYZK8IRRIDUE6UjHFbLztyd_", {action: 'homepage'}).then(function(token) {
        collectInfo(token);
    });
}

// Récupère toute les infos nécessaire à l'envoie du mail
function collectInfo(token) {
    const presta = document.querySelector('#presta').value;
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#tel').value;
    const weddingPlace = document.querySelector('#place').value;
    const weddingDate = document.querySelector('#date').value;
    const details = document.querySelector('#details').value;
    const captcha = token;

    // Reset des valeurs du formulaire
    resetForm();

    const info = JSON.stringify({
        presta: presta,
        name: name,
        email: email,
        phone: phone,
        weddingPlace: weddingPlace,
        weddingDate: weddingDate,
        details: details,
        captcha: captcha
    });

    sendData(info);
}

// Envoie des données à la route /mail qui s'occupe de récupérer la réponse de l'API google et d'envoyer un mail si la personne est réél
function sendData(info) {
    fetch('/mail', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: info
    }).then((res) => res.json())
    .then((data)=>{
        alert(data.msg);
    })
}

formContainer.addEventListener("submit", runVerify);