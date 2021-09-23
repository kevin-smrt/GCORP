// Récupère la classe Router du module express
const { Router } = require("express");

// Initialisation du router
const router = Router();

// Page d'accueil
router.get("/", (req, res) => {
    res.status(200).sendFile(__dirname + "/views/index.html");
});

// Page de présentation
router.get("/presentation", (req, res) => {
    res.status(200).sendFile(__dirname + "/views/presentation.html");
});

// Page de contact
router.get("/contact", (req, res) => {
    res.status(200).sendFile(__dirname + "/views/contact.html");
});

// Si aucune route n'est trouvée => 404
router.use((req, res) => {
    res.status(404).sendFile(__dirname + "/views/404.html");
});

module.exports = router;