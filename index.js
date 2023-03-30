const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.listen(3000, () => {
  console.log('API escuchando en el puerto 3000');
});
