// Récupère la classe Router du module express
const { Router } = require("express");

// Initialisation du router
const router = Router();

// Route racine
router.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

// Si aucune route n'est trouvée => 404
router.use((req, res) => {
    res.status(404).sendFile(__dirname + "/views/404.html");
});

module.exports = router;