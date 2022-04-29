require("dotenv").config();
const mailer=require('../../config');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(mailer.mail.api);
/* sgMail.setApiKey('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'); */
welcomeMail = ( mailTo ) => {
    const msg = {
    to: mailTo,
    from: mailer.mail.from,
    templateId: mailer.mail.templateId
    };
   
    (async () => {
    try {
        await sgMail.send(msg);
    } catch (error) {
        console.error(error);

        if (error.response) {
        console.error(error.response.body)
        }
    }
    })();
}

module.exports = welcomeMail;


