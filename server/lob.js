const { LOB_API_KEY } = process.env;
const Lob = require('lob')(LOB_API_KEY);
console.log('API KEY', process.env.LOB_API_KEY);

const demoRequest = () => {
  Lob.postcards.create({
    description: 'Demo Postcard job',
    to: {
      name: 'Mr. Demo',
      address_line1: '123 HR Lane',
      address_line2: '# 6100',
      address_city: 'San Francisco',
      address_state: 'CA',
      address_zip: '94107',
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
  }, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Sucessfully sent postcard, Response:', res);
      res.end(`Sucessfully sent postcard, Response: ${res}`);
    }
  });
};


module.exports = demoRequest;
