const { LOB_API_KEY } = process.env;
const Lob = require('lob')(LOB_API_KEY);
console.log('API KEY', process.env.LOB_API_KEY);
const fs = require('fs');
const path = require('path');
const frontTemplate = fs.readFileSync('./server/front-template.html', 'utf8');
const backTemplate = fs.readFileSync('./server/back-template.html', 'utf8');
console.log(frontTemplate);


const createPostcard = (req, res) => {
  Lob.postcards.create({
    description: 'Demo Postcard job',
    to: {
      name: 'HR San Francisco',
      address_line1: '944 Market Street',
      address_line2: '8th floor',
      address_city: 'San Francisco',
      address_state: 'CA',
      address_zip: '94102',
    },
    from: {
      name: 'Hello Postcard Team',
      address_line1: '6060 Center Dr',
      address_line2: '#950',
      address_city: 'Los Angeles',
      address_state: 'CA',
      address_zip: '90045',
    },
    front: frontTemplate,
    back: backTemplate,
    merge_variables: {
      name: 'Jonathan',
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
        setTimeout(() => res.redirect(response.url), 1500)
      }
    }
  });
};


exports.createPostcard = createPostcard;
