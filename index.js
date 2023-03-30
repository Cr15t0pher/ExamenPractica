const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ventas'
});

connection.connect((error) => {
  if (error) {
    console.log('Error al conectarse a la base de datos:', error);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Leer todos los registros
app.get('/ventas', (req, res) => {
    connection.query('SELECT * FROM venta', (error, results) => {
      if (error) throw error;
      res.send(results);
    });
  });

// Leer un registro por ID
app.get('/ventas/:id', (req, res) => {
    const { id } = req.params;
    connection.query(`SELECT * FROM venta WHERE id=${id}`, (error, results) => {
      if (error) throw error;
      res.send(results[0]);
    });
  });

  // Crear un nuevo registro
app.post('/ventas', (req, res) => {
    const {empleado,cliente,fecha,producto,total } = req.body;
    connection.query(`INSERT INTO venta (empleado,cliente,fecha,producto,total) VALUES ('${empleado}','${cliente}','${fecha}','${producto}', '${total}')`, (error, results) => {
      if (error) throw error;
      res.send('Registro creado exitosamente');
    });
  });

  // Actualizar un registro existente
app.put('/ventas/:id', (req, res) => {
    const { id } = req.params;
    const { empleado,cliente,fecha,producto,total } = req.body;
    connection.query(`UPDATE venta SET empleado='${empleado}', cliente='${cliente}', fecha='${fecha}', 
    producto='${producto}', total='${total}' WHERE id=${id}`, (error, results) => {
      if (error) throw error;
      res.send('Registro actualizado exitosamente');
    });
  });




app.listen(3000, () => {
  console.log('API escuchando en el puerto 3000');
});
