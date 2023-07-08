const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.GMAIL_ADDR,
    pass: process.env.GMAIL_PASS,
  },
});

exports.handler = async function (event) {
  const { email, subject, message } = JSON.parse(event.body);
  const info = await transporter.sendMail({
    from: `NabePero Video Site ${process.env.GMAIL_ADDR}`, // sender address
    to: process.env.GMAIL_ADDR, // list of receivers
    subject: subject, // Subject line
    text: `
    FROM: ${email}
    MESSAGE: ${message}
    `, // plain text body
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Body sent: %s", event.body);
  return {
    statusCode: 200,
    body: JSON.stringify({ messageID: info.messageId }),
  };
};
