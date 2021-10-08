// Récupère les variables d'environnement
require('dotenv').config();
// Récupère le module nodemailer
const nodemailer = require('nodemailer');
const axios = require("axios").default;

const mailController = {
    // Crée le transporter, celui qui va envoyer le mail
    createTransporter: function() {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 465,
            secure: true,
            auth: {
                user: process.env.MAIL,
                pass: process.env.PASSWORD
            }
        });

        return transporter;
    },

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

    // Fonction de vérification du captcha
    verifyCaptcha: async function (req, res) {
        // Si quelqu'un à désactivé le captcha
        if (!req.body.captcha) {
            return res.json({ 'msg': 'Captcha non défini, ne tentez pas de le bloquer svp.' });
        }

        // Lien de l'API google. Envoie du captcha et renvoie d'un objet JSON
        const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${req.body.captcha}`;

        try {
            // Axios permet de faire une requete
            const response = await axios.post(verifyUrl, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            // Récuperation des données renvoyées par Google
            let data = response.data;

            // Si la variable succès est false, ou le score en dessous de .4 => c'est un bot
            if (data.score < 0.4) {
                return res.json({"msg": `Vous avez été considéré(e) comme un robot, veuillez m'envoyer un message sur instagram si vous êtes une personne réelle`});
            }

            return mailController.sendMail(req, res);
            
        } catch(error) {
            return res.json({ "msg": error });
        }
    },

    sendMail: async function(req, res) {
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

            // Création du transporter
            const transporter = mailController.createTransporter();

            // Création des options d'envoie du mail
            const mailOptions = mailController.createOption(infos);

            // Envoie du mail
            await transporter.sendMail(mailOptions);

            return res.json({"msg": "Merci pour ton mail ! Je reviens vers toi très vite !"});

        } catch (error) {
            return res.status(500).send(err);
        }
    },
};

module.exports = mailController;