import { Email } from "@/components/EmailSender";
import nodeMailer from "nodemailer";

const transporter = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MY_MAIL_ADDR,
    pass: process.env.MY_MAIL_PASSWORD,
  },
});

export function sendEMail({ email, subject, message }: Email) {
  const mailOptions = {
    from: email,
    to: process.env.MY_MAIL_ADDR,
    subject,
    text: message,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info.response);
      }
    });
  });
}
