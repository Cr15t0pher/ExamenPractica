
Create DATABASE ventas;
use ventas;
CREATE TABLE venta(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    empleado VARCHAR(30) NOT NULL,
    cliente VARCHAR(30) NOT NULL,
    fecha DATE NOT NULL,
    producto VARCHAR(30) NOT NULL,
    total float(6,3) NOT NULL
);