const mysql = require('mysql');

const connetcion = mysql.createConnection({
  host      : 'localhost',
  database  : 'hidromet',
  user      : 'root',
});

connetcion.connect( err =>{
  if (err) throw err;
  console.log("Connected!");
});

exports = connetcion;