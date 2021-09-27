const express = require("express");
const router = require("./app/router");
const ejs = require("ejs");

const PORT = 3000;
const app = express();

// on définit le dossier des ressources statiques
app.use(express.static("./public"));

app.set('view engine', 'ejs');
app.set("views", "app/views");

app.use(router);

app.listen(PORT, () => {
    console.log(`Server ready at http://localhost:${PORT}`);
});