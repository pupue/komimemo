import * as functions from 'firebase-functions';
import * as nodemailer from 'nodemailer';

export const sendEmailOnNewContact = functions.firestore
  .document('contacts/{documentId}')
  .onCreate((snapshot, context) => {
    const gmailEmail: string = functions.config().gmail.email;
    const gmailPassword: string = functions.config().gmail.password;
    const mailTransport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailEmail,
        pass: gmailPassword,
      },
    });

    const addedData = JSON.stringify(snapshot.data());

    const mailOptions: nodemailer.SendMailOptions = {
      from: `Komimemo <noreply@yourapp.com>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: '新しいお問い合わせがあります',
      text: `お問い合わせ内容: ${addedData}`,
    };

    return mailTransport.sendMail(mailOptions);
  });
