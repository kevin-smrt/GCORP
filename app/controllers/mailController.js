require('dotenv').config();
const { google } = require('googleapis');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL,
        pass: process.env.PASSWORD
    }
});

const mailController = {
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
                ${infos.clientDetails}`,
        }

        return mailOptions;
    },

    sendMail: function (req, res) {

        const infos = {
            presta: req.body.presta,
            clientName: req.body.name,
            clientEmail: req.body.email,
            clientTel: req.body.tel,
            weddingPlace: req.body.place,
            weddingDate: req.body.date,
            clientDetails: req.body.details
        };

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