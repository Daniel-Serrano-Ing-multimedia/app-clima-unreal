const mysql = require('mysql');

const connetcion = mysql.createConnection({
  host      : 'localhost',
  port      : '3600',
  database  : 'hidromet',
  user      : 'root'
});

connetcion.connect( err =>{
  if (err) throw err;
  console.log("Connected!");
});

exports = connetcion;