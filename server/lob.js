const { LOB_API_KEY } = process.env;
const Lob = require('lob')(LOB_API_KEY);
console.log('API KEY', process.env.LOB_API_KEY);

const demoRequest = (req, res) => {
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
    front: '<html style="padding: 1in; font-size: 50;">Front HTML for {{name}}</html>',
    back: '<html style="padding: 1in; font-size: 20;">Back HTML for {{name}}</html>',
    merge_variables: {
      name: 'Jonathan',
    },
  }, (err, response) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Sucessfully sent postcard, Response:', response);
      res.redirect(response.url);
    }
  });
};


module.exports = demoRequest;
