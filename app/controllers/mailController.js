// Récupère les variables d'environnement
require('dotenv').config();
// Récupère le module nodemailer
const nodemailer = require('nodemailer');

// Crée le transporter, celui qui va envoyer le mail
const transporter = nodemailer.createTransport({
    service: 'gmail',
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
    sendMail: function (req, res) {
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
        transporter.sendMail(mailController.createOption(infos), (err, data) => {
            if (err) {
                console.error(err);
            } else {
                res.redirect('/');
            }
        });
    },
};

module.exports = mailController;