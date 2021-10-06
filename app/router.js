// Récupère la classe Router du module express
const { Router } = require("express");
// Récupère le controller qui gère les mails
const mailController = require('./controllers/mailController');

// Initialisation du router
const router = Router();

// Page d'accueil
router.get("/", (req, res) => {
    res.status(200).render('index');
});

// Page de présentation
router.get("/presentation", (req, res) => {
    res.status(200).render('presentation');
});

// Page de contact
router.get("/contact", (req, res) => {
    res.status(200).render('contact');
});

// Page d'informations
router.get("/informations", (req, res) => {
    res.status(200).render('informations');
});

// Page du portfolio mariage
router.get("/portfolio/mariage", (req, res) => {
    res.status(200).render('mariage');
});

// Page du portfolio famille
router.get("/portfolio/famille", (req, res) => {
    res.status(200).render('famille');
});

// Page du portfolio portrait
router.get("/portfolio/portrait", (req, res) => {
    res.status(200).render('portrait');
});

// Page du portfolio portrait
router.get("/mentions-legales", (req, res) => {
    res.status(200).render('legals');
});

// Page des galleries privées clients
router.get("/client", (req, res) => {
    res.status(200).render('client');
});

// Route pour envoyer un mail
router.post('/mail', mailController.sendMail);

// Si aucune route n'est trouvée => 404
router.use((req, res) => {
    res.status(404).sendFile(__dirname + "/views/404.html");
});

module.exports = router;