import app from './server/request-handler'

const PORT = process.env.PORT || 6060;
const HOST = process.env.HOST || 'localhost';

const server = app.listen(PORT, () => {
  console.log(`Listening at http at http://${HOST}:${PORT}`);
});
