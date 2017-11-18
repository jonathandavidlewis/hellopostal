const app = require('./server/request-handler.js');

const PORT = process.env.PORT || 6060;
const HOST = process.env.HOST || 'Local host';

const server = app.listen(PORT, () => {
  console.log(`Listening at http at http://${HOST}:${PORT}`);
});
