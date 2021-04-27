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

  const { valRegion } = req.params;
  valRegion.replace( '%20', ' ');
  let query;
  if ( valRegion != 'Panamá Oeste' ) {
    query = `SELECT region, fecha_pronostico, temp_maxima, temp_minima, sensacion_termica, humedad_relativa, tiempo_manana, tiempo_tarde, tiempo_noche FROM hidromet.pronosticodiario WHERE provincia = '${ valRegion }'`;
  } else {
    query = `SELECT region, fecha_pronostico, temp_maxima, temp_minima, sensacion_termica, humedad_relativa, tiempo_manana, tiempo_tarde, tiempo_noche FROM hidromet.pronosticodiario WHERE region = '${ valRegion };'`;
  }
  connetcion.query( query, (error, result)=> {
    if ( error ) res.status( 500 ).send({ error }) ;
    res.status( 200 ).send({ pronostico : result });
  })
}
