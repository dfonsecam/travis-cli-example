const app = require('express')();

app.get('/', (req, res) => {
  res.send('Travis-cli example online!');
});
app.get('/test', (req, res) => {
  res.send('run test!');
});
const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Example app listening at http://${host}:${port}`);
});