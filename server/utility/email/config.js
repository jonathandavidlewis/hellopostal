import nodemailer from 'nodemailer';

nodemailer.createTestAccount((err, account) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: account.user,
      pass: account.pass,
    },
  });

  const mailOptions = {
    from: 'Rick',
    to: 'Jonathan',
    subject: 'I"m hungry',
    html: '<div>This is a div</div>',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error(error);
    }
    console.log(`Message sent: ${info.messageId}`);
    console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
    return 'test';
  });
});
