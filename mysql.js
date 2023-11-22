
const mysql = require('mysql')

// Configura la conexión a la base de datos
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tienda-muebles",
});

// Conecta a la base de datos
connection.connect();

// Realiza la consulta SQL
const sql = "SELECT * FROM muebles"; // Reemplaza con tu consulta y tabla

connection.query(sql, (err, results) => {
  if (err) {
    console.error("Error al ejecutar la consulta", err);
    return;
  }

  // Muestra los resultados
  console.log("Resultados de la consulta:");
  console.log(results);
  // let resultado = results;
  // let { id, nombre, tipo } = results;
  // let resultadoElemento = document.getElementById('resultado');
  // resultadoElemento.innerHTML = nombre;

  // Cierra la conexión cuando hayas terminado
  // tuscript.js

  const usuario = results[0]
  console.log(usuario.id);
  let resultadoElemento = document.getElementById('resultado');
  resultadoElemento.innerHTML = usuario;
  ;


  connection.end();
});

