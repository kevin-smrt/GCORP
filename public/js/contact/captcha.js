require('dotenv').config();
const express = require("express");
const app = express();

const { RecaptchaEnterpriseServiceClient } = require('@google-cloud/recaptcha-enterprise');

const client = new RecaptchaEnterpriseServiceClient({
    credentials: {
        client_email: process.env.GOOGLE_RECAPTCHA_EMAIL,
        // https://github.com/auth0/node-jsonwebtoken/issues/642#issuecomment-585173594
        private_key: process.env.GOOGLE_RECAPTCHA_PRIVATE_KEY.replace(/\\n/gm, '\n')
    },
    projectId: process.env.GOOGLE_RECAPTCHA_PROJECT_ID,
});

client.initialize();

// app is your express server, app = express();
app.set('captcha', {
    client: client,
    key: process.env.GOOGLE_RECAPTCHA_SITE_KEY,
    projectId: process.env.GOOGLE_RECAPTCHA_PROJECT_ID
});