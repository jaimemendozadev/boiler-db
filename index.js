require('dotenv').config()
const app = require('./server');

const PORT = process.env.PORT || 7000;

app.listen(process.env.PORT, () => {
  console.log(`Listening on Port 7000`);
});