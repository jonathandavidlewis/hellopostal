import nodemailer from 'nodemailer';

nodemailer.createTestAccount((err, account) => {
  if (err) {
    console.error('Failed to create a testing account');
    return console.error(err);
  }


  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: account.user,
      pass: account.pass,
    },
  }, {
    from: 'HelloPostal <no-reply@pangalink.net>',
  });

  const mailOptions = {
    // from: 'Rick',
    to: 'duulketariakan@yahoo.com',
    subject: 'I\'m hungry',
    text: 'Testing2',
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
