const { LOB_API_KEY } = process.env;
const Lob = require('lob')(LOB_API_KEY);
const fs = require('fs');

const frontTemplate = fs.readFileSync('./server/front-template.html', 'utf8');
const backTemplate = fs.readFileSync('./server/back-template.html', 'utf8');


const createPostcard = (req, res) => {
  const {
    fromName,
    fromAddressLine1,
    fromAddressLine2,
    fromAddressCity,
    fromAddressState,
    fromAddressZip,
    toName,
    toAddressLine1,
    toAddressLine2,
    toAddressCity,
    toAddressState,
    toAddressZip,
    toMessage,
} = req.body;
  Lob.postcards.create({
    description: 'Demo Postcard job',
    to: {
      name: fromName || 'HR San Francisco',
      address_line1: fromAddressLine1 || '944 Market Street',
      address_line2: fromAddressLine2,
      address_city: fromAddressCity || 'San Francisco',
      address_state: fromAddressState || 'CA',
      address_zip: fromAddressZip || '94102',
    },
    from: {
      name: toName || 'Hello Postcard Team',
      address_line1: toAddressLine1 || '6060 Center Dr',
      address_line2: toAddressLine2 || '#950',
      address_city: toAddressCity || 'Los Angeles',
      address_state: toAddressState || 'CA',
      address_zip: toAddressZip || '90045',
    },
    front: frontTemplate,
    back: backTemplate,
    merge_variables: {
      name: toName || 'Jonathan',
      message: toMessage || 'Happy Holidays!',
    },
  }, (err, response) => {
    if (err) {
      console.log(err);
      console.log('FRONT', frontTemplate);
      res.send(err);
    } else {
      console.log('Sucessfully sent postcard, Response:', response);

      if (req.method === 'POST') {
        res.send(response);
      } else {
        // for testing, wait for PDF to load to AWS
        setTimeout(() => res.redirect(response.url), 3000)
      }
    }
  });
};


exports.createPostcard = createPostcard;
