import nodemailer from 'nodemailer';

nodemailer.createTestAccount((err, account) => {
  if (err) {
    console.error('Failed to create a testing account');
    return console.error(err);
  }


  const transporter = nodemailer.createTransport({
    name: 'ethereal',
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: account.user,
      pass: account.pass,
    },
  }, {
    from: 'HelloPostal <no-reply@hellopostal.net>',
  });

  const mailOptions = {
    from: 'HelloPostal',
    to: 'recipient@yahoo.com',
    subject: 'Your HelloPostal Card',
    text: 'Your card is on its way!',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error(error);
    }
    console.log(`Message sent: ${info.messageId}`);
    console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
    return 'sent';
  });
  return 'end';
});
