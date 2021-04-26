//const connetcion = require ('../db');
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

exports.pronostico = async ( req, res, next ) => { 
  console.log(' Pronostico .... ')

  const { ValRegion } = req.params;
  let query;
  if ( ValRegion != 'Panamá Oeste' ) {
    query = `SELECT region, fecha_pronostico, temp_maxima, temp_minima, sensacion_termica, humedad_relativa, tiempo_manana, tiempo_tarde, tiempo_noche FROM hidromet.pronosticodiario WHERE provincia = '${ ValRegion }'`;
  } else {
    query = `SELECT region, fecha_pronostico, temp_maxima, temp_minima, sensacion_termica, humedad_relativa, tiempo_manana, tiempo_tarde, tiempo_noche FROM hidromet.pronosticodiario WHERE region = '${ ValRegion };'`;
  }
  connetcion.query( query, (error, result)=> {
    if ( error ) res.status( 500 ).send({ error }) ;
    res.status( 200 ).send({ pronostico : result });
  })
}
