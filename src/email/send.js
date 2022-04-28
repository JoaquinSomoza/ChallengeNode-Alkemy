const { mail_Service } = require('../../config');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey('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');
welcomeMail = ( mailTo ) => {
    console.log(mail_Service.from)
    const msg = {
    to: mailTo,
    from: 'joaquinsomoza6@gmail.com',
    templateId: 'd-109a4a156cb140e0be593ed65689b1a4'
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