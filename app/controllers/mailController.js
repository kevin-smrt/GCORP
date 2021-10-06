// Récupère les variables d'environnement
require('dotenv').config();
// Récupère le module nodemailer
const nodemailer = require('nodemailer');

// Crée le transporter, celui qui va envoyer le mail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL,
        pass: process.env.PASSWORD
    }
});

const mailController = {
    // Créé les options qui vont être envoyés par le transporteur
    createOption: function(infos) {
        let mailOptions = {
            from: infos.clientEmail,
            to: process.env.MAIL,
            subject: `Nouvelle demande d'information ${infos.presta}`,
            replyTo: infos.clientEmail,
            text: `
                Nom : ${infos.clientName}\n
                Mail : ${infos.clientEmail}\n
                Numéro de téléphone : ${infos.clientTel ? infos.clientTel : 'pas renseigné'}\n
                Lieu et date du mariage : ${infos.weddingPlace ? infos.weddingPlace : 'pas renseigné'}, ${infos.weddingDate ? infos.weddingDate : 'pas renseignée'}\n\n
                Message : \n${infos.clientDetails}`,
        }
        return mailOptions;
    },

    // Fonction d'envoi de mail
    sendMail: async function (req, res, next) {
        try {
            // Récupère toutes les données du formulaire de contact
            const infos = {
                presta: req.body.presta,
                clientName: req.body.name,
                clientEmail: req.body.email,
                clientTel: req.body.tel,
                weddingPlace: req.body.place,
                weddingDate: req.body.date,
                clientDetails: req.body.details
            };

            // Envoie du mail
            await transporter.sendMail(mailController.createOption(infos));

            res.redirect("/");

        } catch (error) {
            res.status(500).send(err);
        }
    },
};

module.exports = mailController;