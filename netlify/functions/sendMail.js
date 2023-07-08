import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.GMAIL_ADDR,
    pass: process.env.GMAIL_PASS,
  },
});

export const handler = async function (event) {
  const { email, subject, message } = JSON.parse(event.body);
  try {
    const info = await transporter.sendMail({
      from: `NabePero Video Site ${process.env.GMAIL_ADDR}`,
      to: process.env.GMAIL_ADDR,
      subject: subject,
      text: `
      FROM: ${email}
      MESSAGE: ${message}
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ messageID: info.messageId }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
