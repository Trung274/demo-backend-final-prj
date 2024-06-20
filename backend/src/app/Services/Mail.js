const nodemailer = require("nodemailer");

class MailerService {
  constructor() {
    this.transport = this.config();
  }

  config = () =>
    nodemailer.createTransport({
      host: "smtp.gmail.com",
      auth: {
        user: "",
        pass: ""
      }
    });

  sendMail = mail => {
    this.transport.sendMail(mail);
  };

  welcomeMailContent = userMail => ({
    from: '"Node API" <rest-api-node@gmail.com>',
    to: userMail,
    subject: "Welcome to Node API",
    html:
      "<p>Welcome to Node API!</p>" +
      "<p>This API is developed to provide Front End developers</p>" +      
      "<br><br>Happy Hack!," +
      "<br>Node API Team 🤖"
  });
}

module.exports = new MailerService();
