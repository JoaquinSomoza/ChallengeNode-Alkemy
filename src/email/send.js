const { mail_Service } = require('../../config');
require("dotenv").config();
const mailer=require('../../config');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(mailer.mail.api);
/* sgMail.setApiKey('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'); */
welcomeMail = ( mailTo ) => {
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


/* const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'joaquinsomoza6@gmail.com',
  from: 'joaquinsomoza6@gmail.com', // Use the email address or domain you verified above
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
//ES6
sgMail
  .send(msg)
  .then(() => {}, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  });
//ES8
(async () => {
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  }
})(); */