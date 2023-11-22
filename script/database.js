const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Configura la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'tu_host',
    user: 'tu_usuario',
    password: 'tu_contraseña',
    database: 'tu_base_de_datos'
});

// Conecta a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar con la base de datos', err);
        return;
    }
    console.log('Conexión a la base de datos MySQL establecida');
});

// Configura una ruta para realizar la consulta y mostrarla en HTML
app.get('/', (req, res) => {
    // Realiza la consulta SQL
    const sql = 'SELECT * FROM tu_tabla'; // Reemplaza con tu consulta y tabla

    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error al ejecutar la consulta', err);
            res.status(500).send('Error interno del servidor');
            return;
        }

        // Renderiza los resultados en una página HTML
        let html = '<ul>';
        results.forEach((row) => {
            html += `<li>${row.columna1} - ${row.columna2}</li>`; // Reemplaza con los nombres de tus columnas
        });
        html += '</ul>';

        res.send(html);
    });
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor web iniciado en http://localhost:${port}`);
});
